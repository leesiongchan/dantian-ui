import type { Meta, StoryObj } from "@storybook/react-vite";

import { Slider } from "@dantian-ui/react";

const meta = {
  title: "Components/Slider",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {},
} satisfies Story;

export const Range = {
  args: {
    // defaultValue: [20, 80],
    defaultValue: [100_000, 100_000_000],
    min: 100_000,
    max: 100_000_000,
    step: 100_000,
  },
} satisfies Story;
