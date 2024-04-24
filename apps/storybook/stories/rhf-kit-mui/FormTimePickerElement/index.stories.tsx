import { FormContainerDecorator } from "@/FormDecorator";
import { FormTimePickerElement } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormTimePickerElement> = {
  title: "@rhf-kit-mui/Form Time Picker Element",
  component: FormTimePickerElement,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Time Picker",
    name: "timePickerDefault",
  },
};

export const WithClearable: Story = {
  args: {
    label: "Time Picker",
    name: "basic",
    slotProps: {
      actionBar: {
        actions: ["clear"],
      },
    },
  },
};

export const RequiredTime: Story = {
  args: {
    label: "Time Picker",
    name: "basic",
    required: true,
  },
};

export const ReadOnlyTime: Story = {
  args: {
    label: "Time Picker",
    name: "basic",
    textReadOnly: true,
  },
};

export const PresetTime: Story = {
  args: {
    label: "Time Picker",
    name: "timePickerPreset",
  },
};
