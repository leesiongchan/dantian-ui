import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import onlyWarnPlugin from "eslint-plugin-only-warn";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: { onlyWarn: onlyWarnPlugin },
  },
  {
    ignores: ["dist/**"],
  },
];
