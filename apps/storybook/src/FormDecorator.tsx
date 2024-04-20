import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { FormContainer } from "@rhf-kit/mui";
import { action } from "@storybook/addon-actions";
import { SubmitButton } from "./SubmitButton";

export function FormContainerDecorator(Story) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormContainer
        defaultValues={{
          preset: "2023-02-01",
          datetime: null,
          wrong_date: "2023-13-199",
          checkboxBase: false,
          checkboxPreDetermined: true,
          radioGroupBase: 1,
        }}
        onSuccess={action("submit")}
      >
        <Story />
        <SubmitButton />
      </FormContainer>
    </LocalizationProvider>
  );
}
