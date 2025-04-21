module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@app': './app',
            '@assets': './assets',
            '@components': './components',
            '@constants': './constants',
            '@hooks': './hooks',
            '@types': './types',
            '@utils': './utils',
            '@apis': './apis',
            '@stores': './stores',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
