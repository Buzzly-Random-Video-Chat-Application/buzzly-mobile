const { getDefaultConfig } = require('expo/metro-config');

// Định nghĩa danh sách ánh xạ từ alias sang thư mục (dựa trên tsconfig.json)
const aliasMap = {
  '@assets/': 'assets/',
  '@components/': 'components/',
  '@constants/': 'constants/',
  '@hooks/': 'hooks/',
  '@navigations/': 'navigations/',
  '@providers/': 'providers/',
  '@services/': 'services/',
  '@types/': 'types/',
  '@utils/': 'utils/',
};

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  const { transformer, resolver } = config;

  // Cấu hình transformer cho SVG (giữ nguyên)
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };

  // Cấu hình resolver
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
    // Thêm resolveRequest để ánh xạ tất cả alias
    resolveRequest: (context, moduleName, platform) => {
      // Kiểm tra từng alias trong aliasMap
      Object.entries(aliasMap).some(([alias, targetPath]) => {
        if (moduleName.startsWith(alias)) {
          // Thay thế alias bằng đường dẫn thực tế
          const newModuleName = moduleName.replace(alias, targetPath);
          context.resolveRequest(context, newModuleName, platform);
          return true; // Exit iteration early
        }
        return false;
      });
      // Nếu không có alias nào khớp, giữ nguyên module name
      return context.resolveRequest(context, moduleName, platform);
    },
  };

  return config;
})();
