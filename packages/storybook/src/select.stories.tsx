import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "@dantian-ui/react";

const meta = {
  title: "Components/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    items: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
    ],
    placeholder: "Select a framework",
  },
} satisfies Story;

export const Group = {
  args: {
    items: [
      { label: "React.js", value: "react", category: "JavaScript" },
      { label: "Vue.js", value: "vue", category: "JavaScript" },
      { label: "Angular", value: "angular", category: "JavaScript" },
      { label: "Svelte", value: "svelte", category: "JavaScript" },
      { label: "Django", value: "django", category: "Python" },
      { label: "Flask", value: "flask", category: "Python" },
    ],
  },
} satisfies Story;
