import { FormContainerDecorator } from "@/StoryBook/FormDecorator";
import { FormDatePickerElement } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Date picker",
  component: FormDatePickerElement,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormDatePickerElement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Date Picker",
    name: "basic",
  },
};

export const WithClearable: Story = {
  args: {
    label: "Date Picker",
    name: "basic",
    slotProps: {
      actionBar: {
        actions: ["clear"],
      },
    },
  },
};

export const RequiredDate: Story = {
  args: {
    label: "Date Picker",
    name: "basic",
    required: true,
  },
};

export const ReadOnlyDate: Story = {
  args: {
    label: "Date Picker",
    name: "basic",
    textReadOnly: true,
  },
};

export const PresetDate: Story = {
  args: {
    label: "Date Picker",
    name: "preset",
  },
};
