import { FormContainerDecorator } from "@/StoryBook/FormDecorator";
import type { Meta, StoryObj } from "@storybook/react";
import { FormCheckboxGroup } from "..";

const meta = {
  title: "Checkbox Group",
  component: FormCheckboxGroup,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormCheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
];

export const Basic: Story = {
  args: {
    label: "Checkbox Group",
    name: "basic",
    options,
  },
};

export const Required: Story = {
  args: {
    label: "Checkbox Group",
    name: "required",
    options,
    required: true,
  },
};

export const Row: Story = {
  args: {
    label: "Checkbox Group",
    name: "row",
    options,
    row: true,
  },
};

export const ObjectOptions: Story = {
  args: {
    label: "Checkbox Group",
    name: "basic",
    options,
    returnObject: true,
  },
};
