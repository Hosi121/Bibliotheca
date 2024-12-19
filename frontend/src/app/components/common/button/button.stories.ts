import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "./button";

const meta = {
  title: "Bibliotheca/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primaryストーリー
export const Primary: Story = {
  args: {
    label: "Button",
    onClick: action("Primary button clicked"), // 修正
    type: "main",
  },
};
