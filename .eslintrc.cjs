module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:typescript/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint"],
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  parser: "@typescript-eslint/parser",
  rules: {
    "linebreak-style": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-shadow": "off",
    "import/prefer-default-export": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-param-reassign": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/no-unused-prop-types": "off",
    "react/require-default-props": "off",
    "import/no-cycle": "off",
    "consistent-return": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
  },
};