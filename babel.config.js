module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ios.jsx', '.android.jsx', '.jsx', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
