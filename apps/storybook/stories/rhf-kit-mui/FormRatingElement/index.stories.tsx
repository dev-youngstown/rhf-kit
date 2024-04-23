import { FormContainerDecorator } from "@/FormDecorator";
import { FormRatingElement } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Form Rating Element",
  component: FormRatingElement,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormRatingElement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "ratingDefault",
  },
};

export const WithLabel: Story = {
  args: {
    name: "ratingDefault",
    label: "Rating",
  },
};

export const Disabled: Story = {
  args: {
    name: "ratingDefault",
    label: "Disabled",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    name: "ratingReadOnly",
    label: "Read Only",
    readOnly: true,
  },
};

export const HoverFeedback: Story = {
  args: {
    name: "ratingDefault",
    label: "Hover Feedback",
    feedbackLabels: ["Poor", "Fair", "Good", "Excellent", "Outstanding"],
    width: 200,
  },
};
