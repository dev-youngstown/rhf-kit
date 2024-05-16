import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Stack } from "@mui/material";
import { FormButton } from "@rhf-kit/mui";
import type { Meta, StoryObj } from "@storybook/react";
import { ThreeDots } from "react-loader-spinner";

const meta: Meta<typeof FormButton> = {
  title: "@rhf-kit-mui/Form Button",
  component: FormButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Submit",
    type: "submit",
    loading: false,
    loadingPosition: "center",
    variant: "text",
    size: "medium",
  },
};

export const Variants = () => (
  <Stack spacing={2}>
    <FormButton>Default</FormButton>
    <FormButton variant="outlined">outlined</FormButton>
    <FormButton variant="contained">contained</FormButton>
  </Stack>
);

export const Icons = () => (
  <Stack spacing={2}>
    <FormButton variant="outlined" startIcon={<DeleteRoundedIcon />}>
      Delete
    </FormButton>
    <FormButton variant="contained" endIcon={<SendRoundedIcon />}>
      Send
    </FormButton>
  </Stack>
);

export const Disabled = () => (
  <Stack spacing={2}>
    <FormButton disabled>Disabled</FormButton>
    <FormButton disabled variant="outlined">
      Disabled
    </FormButton>
    <FormButton disabled variant="contained">
      Disabled
    </FormButton>
  </Stack>
);

export const Loading = () => (
  <Stack spacing={2}>
    <FormButton loading variant="outlined" loadingPosition="center">
      Loading
    </FormButton>
    <FormButton loading variant="contained" loadingPosition="start">
      Loading
    </FormButton>
    <FormButton loading variant="contained" loadingPosition="end">
      Loading
    </FormButton>
  </Stack>
);

export const CustomLoadingIndicator = () => (
  <Stack spacing={2}>
    <FormButton
      loading
      variant="outlined"
      loadingPosition="center"
      loadingIndicator={
        <ThreeDots
          visible={true}
          height="16"
          width="16"
          color="inherit"
          radius="2"
        />
      }
    >
      Loading
    </FormButton>
    <FormButton
      loading
      variant="contained"
      loadingPosition="start"
      loadingIndicator={
        <ThreeDots
          visible={true}
          height="16"
          width="16"
          color="inherit"
          radius="2"
        />
      }
    >
      Loading
    </FormButton>
    <FormButton
      loading
      variant="contained"
      loadingPosition="end"
      loadingIndicator={
        <ThreeDots
          visible={true}
          height="16"
          width="16"
          color="inherit"
          radius="2"
        />
      }
    >
      Loading
    </FormButton>
  </Stack>
);
