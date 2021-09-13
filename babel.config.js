module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        cwd: "babelrc",
        root: ["./"],
        extensions: [".js", ".ts", ".tsx", ".jsx"],
        alias: {
          "@assets": "./src/assets/",
          "@models": "./src/models/",
          "@components": "./src/components/index.ts",
          "@context": "./src/context/index.ts",
          "@modules": "./src/modules/index.tsx",
          "@pages": "./src/pages/index.tsx",
          "@types": "./src/types/index.tsx",
        },
      },
    ],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
  ],
};
