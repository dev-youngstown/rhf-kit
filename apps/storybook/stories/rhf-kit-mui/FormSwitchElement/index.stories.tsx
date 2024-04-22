import { FormContainerDecorator } from "@/FormDecorator";
import { FormSwitchElement } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Form Switch Element",
  component: FormSwitchElement,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormSwitchElement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "switchDefault",
  },
};

export const WithLabel: Story = {
  args: {
    name: "switchDefault",
    label: "Switch",
  },
};

export const WithHelperText: Story = {
  args: {
    name: "switchDefault",
    helperText: "Helper text",
  },
};

export const Required: Story = {
  args: {
    name: "switchDefault",
    required: true,
  },
};

export const RequiredWithLabel: Story = {
  args: {
    name: "switchDefault",
    label: "Switch",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    name: "switchTrue",
    disabled: true,
  },
};
