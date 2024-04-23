import { FormContainerDecorator } from "@/FormDecorator";
import { FormDateTimePickerElement } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormDateTimePickerElement> = {
  title: "React Hook Form Kit/Material UI/Form Date-Time Picker Element",
  component: FormDateTimePickerElement,
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
    label: "Date Time Picker",
    name: "basic",
    sx: { width: 300 },
  },
};

export const WithClearable: Story = {
  args: {
    label: "Date Time Picker",
    name: "basic",
    slotProps: {
      actionBar: {
        actions: ["clear"],
      },
    },
    sx: { width: 300 },
  },
};

export const RequiredDate: Story = {
  args: {
    label: "Date Time Picker",
    name: "basic",
    required: true,
    sx: { width: 300 },
  },
};

export const ReadOnlyDate: Story = {
  args: {
    label: "Date Time Picker",
    name: "basic",
    textReadOnly: true,
    sx: { width: 300 },
  },
};

export const PresetDate: Story = {
  args: {
    label: "Date Time Picker",
    name: "preset",
    sx: { width: 300 },
  },
};
