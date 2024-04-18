import { SubmitButton } from "@/StoryBook/SubmitButton";
import {
  FormContainer,
  FormPasswordElement,
  FormTextFieldElement,
} from "@/index";
import { Box } from "@mui/material";
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
        "default-text-field": "Test Data",
        "default-email-field": "john@example.com",
        "number-text-field": 6,
        "default-first-name-field": "John",
        "default-last-name-field": "Doe",
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
      name={"default-first-name-field"}
    />
    <br />
    <FormTextFieldElement
      required
      fullWidth
      margin={"dense"}
      label={"Last Name"}
      name={"default-last-name-field"}
    />
    <br />
    <FormTextFieldElement
      required
      fullWidth
      type={"email"}
      margin={"dense"}
      label={"Email"}
      name={"default-email-field"}
    />
  </>
);
