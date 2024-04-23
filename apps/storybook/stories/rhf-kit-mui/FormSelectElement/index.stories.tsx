import { FormContainerDecorator } from "@/FormDecorator";
import { FormSelectElement, FormSelectOption } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormSelectElement> = {
  title: "React Hook Form Kit/Material UI/Form Select Element",
  component: FormSelectElement,
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

export const Basic: Story = {
  args: {
    name: "selectBase",
    label: "Select",
    options,
    sx: { minWidth: 240 },
  },
};

export const Required: Story = {
  args: {
    name: "selectRequired",
    label: "Select",
    options,
    required: true,
    sx: { minWidth: 240 },
  },
};

export const RequiredWithHelperText: Story = {
  args: {
    name: "selectRequiredWithHelperText",
    label: "Select",
    options,
    required: true,
    helperText: "Select an option.",
    sx: { minWidth: 240 },
  },
};

export const Disabled: Story = {
  args: {
    name: "selectDisabled",
    label: "Disabled",
    options,
    disabled: true,
    sx: { minWidth: 240 },
  },
};

export const Placeholder: Story = {
  args: {
    name: "selectPlaceholder",
    options,
    placeholder: "Select an option",
    sx: { minWidth: 240 },
  },
};

export const WithCheckboxes: Story = {
  args: {
    name: "selectDisabled",
    label: "Select",
    options,
    checkboxes: true,
    sx: { minWidth: 240 },
  },
};

export const Multiple: Story = {
  args: {
    name: "selectMultiple",
    label: "Select",
    options,
    multiple: true,
    sx: { minWidth: 240 },
  },
};

export const MultipleRequired: Story = {
  args: {
    name: "selectMultipleRequired",
    label: "Select",
    options,
    multiple: true,
    required: true,
    sx: { minWidth: 240 },
  },
};

export const MultipleWithPlaceholder: Story = {
  args: {
    name: "selectMultipleWithPlaceholder",
    options,
    multiple: true,
    placeholder: "Select option(s)",
    sx: { minWidth: 240 },
  },
};

export const MultipleWithCheckboxes: Story = {
  args: {
    name: "selectMultipleWithCheckboxes",
    label: "Select",
    options,
    multiple: true,
    checkboxes: true,
    sx: { minWidth: 240 },
  },
};

export const MultipleWithChips: Story = {
  args: {
    name: "selectMultipleWithChips",
    label: "Select",
    options,
    multiple: true,
    chips: true,
    sx: { minWidth: 240 },
  },
};
