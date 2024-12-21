import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "./form";

const meta = {
  title: "Bibliotheca/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primaryストーリー
export const Primary: Story = {
  args: {
    label: "form",
    type: "inline",
    setter: () => {},
  },
};
