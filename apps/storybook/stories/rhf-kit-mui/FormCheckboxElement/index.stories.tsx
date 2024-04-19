import { FormContainerDecorator } from "@/FormDecorator";
import { FormCheckboxElement } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Checkbox Element",
  component: FormCheckboxElement,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormCheckboxElement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "checkboxBase",
  },
};

export const WithLabel: Story = {
  args: {
    name: "checkboxBase",
    label: "Label",
  },
};

export const Disabled: Story = {
  args: {
    name: "checkboxBase",
    label: "Disabled",
    disabled: true,
  },
};

export const PreDetermined: Story = {
  args: {
    name: "checkboxPreDetermined",
    label: "Pre Determined",
  },
};
