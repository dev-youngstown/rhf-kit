import { FormContainerDecorator } from "@/FormDecorator";
import { FormRadioGroup, FormRadioOption } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Form Radio Group",
  component: FormRadioGroup,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const options: FormRadioOption[] = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
];

export const Basic: Story = {
  args: {
    label: "Radio Group",
    name: "radioGroupBase",
    options,
  },
};

export const Required: Story = {
  args: {
    label: "Radio Group",
    name: "radioGroupRequired",
    options,
    required: true,
  },
};
