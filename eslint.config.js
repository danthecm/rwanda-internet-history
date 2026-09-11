import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  // `.react-router/` holds generated TypeScript that the dev server rewrites on
  // every run; ESLint has no TS parser here and would fail on it.
  { ignores: ["build/", ".react-router/", "node_modules/"] },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: "detect" } },
    plugins: { react, "react-hooks": reactHooks },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // React 19's automatic JSX runtime: no React import, no prop-types.
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
