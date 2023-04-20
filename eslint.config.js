const react = require("eslint-plugin-react");
const globals = require("globals");

module.exports = [
  {
    files: ["*.ts", "*.tsx"],
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "standard-with-typescript",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.json",
    },
    plugins: ["react"],
    rules: {},
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
];
