import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta = {
  title: "Bibliotheca/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "h1",
    bold: false,
    children: "This is a text component.",
  },
};
