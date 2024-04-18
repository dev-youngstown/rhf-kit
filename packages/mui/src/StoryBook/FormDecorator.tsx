import FormContainer from "@/FormContainer";
import { action } from "@storybook/addon-actions";
import { SubmitButton } from "./SubmitButton";

export function FormContainerDecorator(Story) {
  return (
    <FormContainer
      defaultValues={{
        preset: "2023-02-01",
        datetime: null,
        wrong_date: "2023-13-199",
      }}
      onSuccess={action("submit")}
    >
      <Story />
      <SubmitButton />
    </FormContainer>
  );
}
