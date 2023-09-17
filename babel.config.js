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
            types: "./src/types",
            "@services": "./src/services",
            "@state": "./src/state",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  }
}
