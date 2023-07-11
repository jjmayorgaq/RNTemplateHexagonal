const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').CustomConfig}
 */
module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return mergeConfig(defaultConfig);
})();
