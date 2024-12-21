import type { Meta, StoryObj } from "@storybook/react";

import { BookColumn } from "./bookColumn";

const meta = {
  title: "Bibliotheca/BookColumn",
  component: BookColumn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BookColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 1,
    title: "Title",
    ISBN: 1234567890123,
    buttonLabel: "借りる",
    onClick: () => {},
  },
};
