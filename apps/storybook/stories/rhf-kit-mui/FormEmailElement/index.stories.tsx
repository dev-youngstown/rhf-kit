import { SubmitButton } from "@/SubmitButton";
import PersonIcon from "@mui/icons-material/Person";
import { Box } from "@mui/material";
import { FormContainer, FormEmailElement } from "@rhf-kit/mui";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormEmailElement> = {
  title: "@rhf-kit-mui/Form Email Element",
  component: FormEmailElement,
  decorators: [FormWrapper],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

function FormWrapper(Story) {
  return (
    <FormContainer
      defaultValues={{
        email: "",
      }}
      onSuccess={action("submit")}
    >
      <Box width={"300px"}>
        <Story />
        <SubmitButton />
      </Box>
    </FormContainer>
  );
}

export const Default: Story = {
  args: {
    label: "Email Address",
    name: "email",
    fullWidth: true,
  },
};

export const Required: Story = {
  args: {
    label: "Email Address",
    name: "email",
    fullWidth: true,
    required: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    label: "Email Address",
    name: "email",
    fullWidth: true,
    renderIcon: false,
  },
};

export const CustomIcon: Story = {
  args: {
    label: "Email Address",
    name: "email",
    fullWidth: true,
    icon: <PersonIcon />,
  },
};
