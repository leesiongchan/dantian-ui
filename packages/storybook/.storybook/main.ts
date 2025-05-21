import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  addons: [],
  core: {
    disableTelemetry: true,
  },
  framework: "@storybook/react-vite",
  stories: ["../src/*.mdx", "../src/*.stories.@(ts|tsx)"],
};

export default config;
