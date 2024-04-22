import { FormContainerDecorator } from "@/FormDecorator";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import { FormSliderElement } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Form Slider Element",
  component: FormSliderElement,
  decorators: [FormContainerDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormSliderElement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "sliderDefault",
    valueLabelDisplay: "auto",
  },
};

export const WithLabel: Story = {
  args: {
    name: "sliderDefault",
    label: "Slider",
    valueLabelDisplay: "auto",
  },
};

export const WithValueInLabel: Story = {
  args: {
    name: "sliderDefault",
    label: "Slider",
    valueLabelDisplay: "auto",
    valueInLabel: true,
  },
};

export const WithIcons: Story = {
  args: {
    name: "sliderDefault",
    startIcon: <VolumeDownRoundedIcon />,
    endIcon: <VolumeUpRoundedIcon />,
    valueLabelDisplay: "auto",
  },
};

export const WithInput: Story = {
  args: {
    name: "sliderDefault",
    valueLabelDisplay: "auto",
    input: true,
    inputProps: {
      step: 10,
      min: 0,
      max: 100,
    },
  },
};

export const WithMarks: Story = {
  args: {
    name: "sliderDefault",
    marks: true,
    step: 10,
    valueLabelDisplay: "auto",
  },
};

export const RangeSlider: Story = {
  args: {
    name: "sliderRange",
    valueLabelDisplay: "auto",
  },
};

export const RangeSliderWithMinDistance: Story = {
  args: {
    name: "sliderRange",
    minDistance: 10,
    valueLabelDisplay: "auto",
    disableSwap: true,
  },
};
