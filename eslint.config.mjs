import prettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "commonjs",
    },

  },
  prettier,
  {
    ignores: ["eslint.config.mjs", "lib/"],
  }
];
