import FormContainer from "@/FormContainer";
import { SubmitButton } from "@/StoryBook/SubmitButton";
import { Box } from "@mui/material";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useFormContext } from "react-hook-form";
import FormPasswordElement from "..";

const meta = {
  title: "FormPasswordElement",
  component: FormPasswordElement,
  decorators: [FormWrapper],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormPasswordElement>;

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
        <br />
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
