import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // spread the shared flat config
  ...nextJsConfig,

  // add your overrides locally
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];