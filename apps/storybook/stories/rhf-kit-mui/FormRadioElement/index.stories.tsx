import { FormContainerDecorator } from "@/FormDecorator";
import { FormRadioElement } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormRadioElement> = {
  title: "@rhf-kit-mui/Form Radio",
  component: FormRadioElement,
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
    name: "radioBase",
    value: true,
  },
};

export const Disabled: Story = {
  args: {
    name: "radioDisabled",
    value: false,
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    name: "radioLabel",
    label: "Radio Label",
    value: true,
  },
};

export const StringValue: Story = {
  args: {
    name: "radioStringValue",
    value: "string",
  },
};

export const NumberValue: Story = {
  args: {
    name: "radioNumberValue",
    value: 1,
  },
};
