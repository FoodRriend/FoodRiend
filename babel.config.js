module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.json',
        ],
        alias: {
          '@': './src',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
