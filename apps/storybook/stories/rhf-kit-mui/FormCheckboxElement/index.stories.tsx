import { FormContainerDecorator } from "@/FormDecorator";
import { FormCheckboxElement } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormCheckboxElement> = {
  title: "React Hook Form Kit/Material UI/Form Checkbox Element",
  component: FormCheckboxElement,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

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
