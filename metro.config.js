// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// module.exports = getDefaultConfig(__dirname);
module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  const { transformer, resolver } = config;

  // Cấu hình Metro để sử dụng react-native-svg-transformer
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };

  // Cấu hình resolver để nhận diện file SVG
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'), // Loại bỏ svg khỏi assetExts
    sourceExts: [...resolver.sourceExts, 'svg'], // Thêm svg vào sourceExts
  };

  return config;
})();
