module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.tsx', '.ts'],
        alias: {
          '@core': './src/app/core',
          '@enums': './src/app/shared/enums',
          '@components/': './src/app/shared/Components',
          '@helpers/': 'src/app/shared/Helpers/',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
