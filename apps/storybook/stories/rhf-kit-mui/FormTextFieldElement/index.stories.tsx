import { SubmitButton } from "@/SubmitButton";
import { Box } from "@mui/material";
import {
  FormContainer,
  FormPasswordElement,
  FormTextFieldElement,
} from "@rhf-kit/mui";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Text Field",
  component: FormTextFieldElement,
  decorators: [FormWrapper],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormTextFieldElement>;

export default meta;

type Story = StoryObj<typeof meta>;

function FormWrapper(Story) {
  return (
    <FormContainer
      defaultValues={{
        defaultFirstName: "John",
        defaultLastName: "Doe",
        defaultEmail: "john@doe.com",
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
    label: "Label",
    name: "core",
    fullWidth: true,
  },
};

export const Basic = () => (
  <>
    <FormTextFieldElement
      required
      fullWidth
      margin={"normal"}
      label={"First Name"}
      name={"firstName"}
    />
    <br />
    <FormTextFieldElement
      required
      fullWidth
      margin={"normal"}
      label={"Last Name"}
      name={"lastName"}
    />
    <br />
    <FormTextFieldElement
      required
      fullWidth
      type={"email"}
      margin={"normal"}
      label={"Email"}
      name={"email"}
    />
    <br />
    <FormPasswordElement
      required
      fullWidth
      name="password"
      label="Password"
      margin="normal"
    />
  </>
);

export const PreDefined = () => (
  <>
    <FormTextFieldElement
      required
      fullWidth
      margin={"dense"}
      label={"First Name"}
      name={"defaultFirstName"}
    />
    <br />
    <FormTextFieldElement
      required
      fullWidth
      margin={"dense"}
      label={"Last Name"}
      name={"defaultLastName"}
    />
    <br />
    <FormTextFieldElement
      required
      fullWidth
      type={"email"}
      margin={"dense"}
      label={"Email"}
      name={"defaultEmail"}
    />
  </>
);
