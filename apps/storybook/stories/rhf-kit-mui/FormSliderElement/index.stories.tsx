import { FormContainerDecorator } from "@/FormDecorator";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import { FormSliderElement } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormSliderElement> = {
  title: "React Hook Form Kit/Material UI/Form Slider Element",
  component: FormSliderElement,
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
    name: "sliderDefault",
    valueLabelDisplay: "auto",
    sx: { width: 240 },
  },
};

export const WithLabel: Story = {
  args: {
    name: "sliderDefault",
    label: "Slider",
    valueLabelDisplay: "auto",
    sx: { width: 240 },
  },
};

export const WithValueInLabel: Story = {
  args: {
    name: "sliderDefault",
    label: "Slider",
    valueLabelDisplay: "auto",
    valueInLabel: true,
    sx: { width: 240 },
  },
};

export const WithIcons: Story = {
  args: {
    name: "sliderDefault",
    startIcon: <VolumeDownRoundedIcon />,
    endIcon: <VolumeUpRoundedIcon />,
    valueLabelDisplay: "auto",
    sx: { width: 240 },
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
    sx: { width: 240 },
  },
};

export const WithMarks: Story = {
  args: {
    name: "sliderDefault",
    marks: true,
    step: 10,
    valueLabelDisplay: "auto",
    sx: { width: 240 },
  },
};

export const RangeSlider: Story = {
  args: {
    name: "sliderRange",
    valueLabelDisplay: "auto",
    sx: { width: 240 },
  },
};

export const RangeSliderWithMinDistance: Story = {
  args: {
    name: "sliderRange",
    minDistance: 10,
    valueLabelDisplay: "auto",
    disableSwap: true,
    sx: { width: 240 },
  },
};
