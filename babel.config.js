module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@services": "./src/services",
            "@types": "./src/@types",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  }
}
