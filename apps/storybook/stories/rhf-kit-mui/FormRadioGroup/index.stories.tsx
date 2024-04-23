import { FormContainerDecorator } from "@/FormDecorator";
import { FormRadioGroup, FormRadioOption } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormRadioGroup> = {
  title: "React Hook Form Kit/Material UI/Form Radio Group",
  component: FormRadioGroup,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

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

export const RequiredError: Story = {
  args: {
    label: "Radio Group",
    name: "radioGroupRequired",
    options,
    required: true,
  },
};

export const Row: Story = {
  args: {
    label: "Radio Group",
    name: "radioGroupBase",
    options,
    row: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Radio Group",
    name: "radioGroupBase",
    options,
    disabled: true,
  },
};

export const HelperText: Story = {
  args: {
    label: "Radio Group",
    name: "radioGroupBase",
    options,
    helperText: "Please select an option.",
  },
};

export const HelperTextError: Story = {
  args: {
    label: "Radio Group",
    name: "radioGroupRequired",
    options,
    required: true,
    helperText: "Please select an option.",
  },
};
