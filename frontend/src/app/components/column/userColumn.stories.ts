import type { Meta, StoryObj } from "@storybook/react";

import { UserColumn } from "./userColumn";

const meta = {
  title: "Bibliotheca/userColumn",
  component: UserColumn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "test@gmail.com",
    buttonLabel: "消去",
    onClick: () => {},
  },
};
