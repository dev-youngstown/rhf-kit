import { SubmitButton } from "@/SubmitButton";
import { Box, Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import {
  CheckboxOption,
  FormCheckboxElement,
  FormCheckboxGroup,
  FormContainer,
  FormDatePickerElement,
  FormPasswordElement,
  FormRadioGroup,
  FormRadioOption,
  FormTextFieldElement,
} from "@rhf-kit/mui";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormContainer> = {
  title: "@rhf-kit-mui/Form Container",
  component: FormContainer,
  parameters: {
    layout: "centered",
    docs: { source: { type: "code" } },
  },
  argTypes: {
    defaultValues: {
      control: {
        type: "object",
      },
    },
    onSuccess: {
      type: "function",
    },
    onError: {
      type: "function",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    onSuccess: action("submit"),
    onError: action("error"),
  },
  render: () => (
    <FormContainer
      defaultValues={{
        firstName: "",
        lastName: "",
      }}
      onSuccess={action("submit")}
    >
      <Box width={"600px"}>
        <FormTextFieldElement
          fullWidth
          margin={"normal"}
          label={"First Name"}
          name={"firstName"}
        />
        <br />
        <FormTextFieldElement
          fullWidth
          margin={"normal"}
          label={"Last Name"}
          name={"lastName"}
        />
        <SubmitButton />
      </Box>
    </FormContainer>
  ),
};

export const Basic = () => {
  return (
    <FormContainer
      defaultValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSuccess={action("submit")}
    >
      <Box width={"600px"}>
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
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          }}
        />
        <SubmitButton />
      </Box>
    </FormContainer>
  );
};

export const WithoutDefaultValues = () => {
  return (
    <FormContainer onSuccess={action("submit")}>
      <Box width={"600px"}>
        <FormTextFieldElement
          required
          fullWidth
          margin={"normal"}
          label={"Full Name"}
          name={"name"}
        />
        <br />
        <FormTextFieldElement
          required
          fullWidth
          margin={"normal"}
          label={"Email Address"}
          name={"email"}
        />
        <SubmitButton />
      </Box>
    </FormContainer>
  );
};

export const ExampleForm = () => {
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: new Date(),
    specialization: 1,
    skills: [],
    agreeToTerms: false,
  };

  const specializations: FormRadioOption[] = [
    { label: "Frontend Developer", value: 1 },
    { label: "Backend Developer", value: 2 },
    { label: "Fullstack Developer", value: 3 },
    { label: "UI Designer", value: 4 },
  ];

  const skills: CheckboxOption[] = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Node", value: "node" },
    { label: "Express", value: "express" },
    { label: "MongoDB", value: "mongodb" },
    { label: "PostgreSQL", value: "postgresql" },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormContainer defaultValues={defaultValues} onSuccess={action("submit")}>
        <Stack spacing={2} width={"600px"}>
          <Stack direction={"row"} spacing={2}>
            <FormTextFieldElement
              required
              fullWidth
              margin={"normal"}
              label={"First Name"}
              name={"firstName"}
            />
            <FormTextFieldElement
              required
              fullWidth
              margin={"normal"}
              label={"Last Name"}
              name={"lastName"}
            />
          </Stack>
          <FormTextFieldElement
            required
            fullWidth
            margin={"normal"}
            label={"Email Address"}
            name={"email"}
          />
          <FormPasswordElement
            required
            fullWidth
            margin={"normal"}
            label={"Password"}
            name={"password"}
          />
          <FormDatePickerElement
            required
            label={"Date of Birth"}
            name={"dateOfBirth"}
          />
          <FormRadioGroup
            name={"specialization"}
            label={"Specialization"}
            options={specializations}
            required
          />
          <FormCheckboxGroup
            name={"skills"}
            label={"Your Skills"}
            options={skills}
            row
            required
          />
          <FormCheckboxElement label="Agree To Terms" name={"agreeToTerms"} />

          <SubmitButton />
        </Stack>
      </FormContainer>
    </LocalizationProvider>
  );
};
