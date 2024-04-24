import { FormContainerDecorator } from "@/FormDecorator";
import { FormSelectOption, MobileFormSelectElement } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MobileFormSelectElement> = {
  title: "@rhf-kit-mui/Mobile Form Select Element",
  component: MobileFormSelectElement,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const options: FormSelectOption[] = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
];

export const Default: Story = {
  args: {
    name: "mobileSelectDefault",
    label: "Select",
    options,
    sx: { minWidth: 240 },
  },
};

export const HelperText: Story = {
  args: {
    name: "mobileSelectDefault",
    label: "Select",
    options,
    helperText: "Select an option",
    sx: { minWidth: 240 },
  },
};

export const Required: Story = {
  args: {
    name: "mobileSelectDefault",
    defaultValue: undefined,
    label: "Select",
    options,
    required: true,
    sx: { minWidth: 240 },
  },
};

export const Disabled: Story = {
  args: {
    name: "mobileSelectDefault",
    label: "Select",
    options,
    disabled: true,
    sx: { minWidth: 240 },
  },
};
