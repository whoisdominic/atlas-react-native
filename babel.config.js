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
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@assets": "./assets",
            "@navigation": "./src/navigation",
            "@hooks": "./src/hooks",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  }
}
