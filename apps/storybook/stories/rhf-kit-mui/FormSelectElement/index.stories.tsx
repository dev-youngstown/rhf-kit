import { FormContainerDecorator } from "@/FormDecorator";
import { FormSelectElement, FormSelectOption } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Form Select Element",
  component: FormSelectElement,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormSelectElement>;

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
  },
};

export const Required: Story = {
  args: {
    name: "selectRequired",
    label: "Select",
    options,
    required: true,
  },
};

export const RequiredWithHelperText: Story = {
  args: {
    name: "selectRequiredWithHelperText",
    label: "Select",
    options,
    required: true,
    helperText: "Select an option.",
  },
};

export const Disabled: Story = {
  args: {
    name: "selectDisabled",
    label: "Disabled",
    options,
    disabled: true,
  },
};

export const Placeholder: Story = {
  args: {
    name: "selectPlaceholder",
    options,
    placeholder: "Select an option",
  },
};

export const WithCheckboxes: Story = {
  args: {
    name: "selectDisabled",
    label: "Select",
    options,
    checkboxes: true,
  },
};

export const Multiple: Story = {
  args: {
    name: "selectMultiple",
    label: "Select",
    options,
    multiple: true,
  },
};

export const MultipleRequired: Story = {
  args: {
    name: "selectMultipleRequired",
    label: "Select",
    options,
    multiple: true,
    required: true,
  },
};

export const MultipleWithPlaceholder: Story = {
  args: {
    name: "selectMultipleWithPlaceholder",
    options,
    multiple: true,
    placeholder: "Select option(s)",
  },
};

export const MultipleWithCheckboxes: Story = {
  args: {
    name: "selectMultipleWithCheckboxes",
    label: "Select",
    options,
    multiple: true,
    checkboxes: true,
  },
};

export const MultipleWithChips: Story = {
  args: {
    name: "selectMultipleWithChips",
    label: "Select",
    options,
    multiple: true,
    chips: true,
  },
};
