const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  const { transformer, resolver } = config;

  // Configure transformer for SVG
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };

  // Configure resolver
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg', 'cjs'],
    resolveRequest: (context, moduleName, platform) => {
      const aliasMap = {
        '@app/': 'app/',
        '@assets/': 'assets/',
        '@components/': 'components/',
        '@constants/': 'constants/',
        '@hooks/': 'hooks/',
        '@providers/': 'providers/',
        '@types/': 'types/',
        '@utils/': 'utils/',
        '@apis/': 'apis/',
        '@stores/': 'stores/',
      };

      const aliasEntry = Object.entries(aliasMap).find(([alias]) =>
        moduleName.startsWith(alias),
      );
      if (aliasEntry) {
        const [alias, targetPath] = aliasEntry;
        const newModuleName = moduleName.replace(alias, targetPath);
        return context.resolveRequest(context, newModuleName, platform);
      }

      return context.resolveRequest(context, moduleName, platform);
    },
  };

  // Apply NativeWind
  return withNativeWind(config, { input: './global.css' });
})();
