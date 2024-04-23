import { SubmitButton } from "@/SubmitButton";
import { Box } from "@mui/material";
import { FormContainer, FormPasswordElement } from "@rhf-kit/mui";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useFormContext } from "react-hook-form";

const meta: Meta<typeof FormPasswordElement> = {
  title: "React Hook Form Kit/Material UI/Form Password Element",
  component: FormPasswordElement,
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
        password: "",
        confirmPassword: "",
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
    label: "Password",
    name: "password",
    fullWidth: true,
  },
};

export const ErrorControlled = () => {
  const { watch } = useFormContext();
  return (
    <>
      <FormPasswordElement
        required
        fullWidth
        margin={"normal"}
        label={"Password"}
        name={"password"}
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
        }}
      />
      <FormPasswordElement
        required
        fullWidth
        margin={"normal"}
        label={"Confirm Password"}
        name={"confirmPassword"}
        rules={{
          required: "Confirm Password is required",
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        }}
      />
    </>
  );
};
