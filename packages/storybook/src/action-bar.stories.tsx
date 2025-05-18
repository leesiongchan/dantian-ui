import type { Meta, StoryObj } from "@storybook/react-vite";

import { ActionBar, Button } from "@dantian-ui/react";
import { fn } from "storybook/test";

const meta = {
  title: "Components/ActionBar",
  component: ActionBar,
} satisfies Meta<typeof ActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    actionTriggers: [<Button>Action 1</Button>, <Button>Action 2</Button>],
    closeable: true,
    open: true,
    onClose: fn(),
    selectionTrigger: "Selected 1 item",
  },
} satisfies Story;
