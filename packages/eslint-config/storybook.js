import reactRefreshPlugin from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";

import { config as baseConfig } from "./react-internal.js";

/** @type {import("eslint").Linter.Config} */
export const config = [
  ...baseConfig,
  {
    plugins: { "react-refresh": reactRefreshPlugin },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  ...storybook.configs["flat/recommended"],
  {
    ignores: ["!.storybook"],
  },
];
