import { PropsWithChildren } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormContainerProps } from ".";

/**
 * The `FormContainer` component is that serves a wrapper for a form that uses `react-hook-form`.
 * It provides the `FormProvider` context to all the form elements within it.
 * It also handles the form submission and validation.
 *
 *

 *
 * The component is implemented using:
 * - [React Hook Form useFormContext](https://react-hook-form.com/docs/useformcontext)
 *
 * TODO: Add example usage link to Storybook docs
 */
const FormContainer = <TFieldValues extends FieldValues = FieldValues>({
  onSuccess,
  onError,
  children,
  ...useFormProps
}: PropsWithChildren<FormContainerProps<TFieldValues>>) => {
  const methods = useForm<TFieldValues>({
    ...useFormProps,
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(
          onSuccess
            ? onSuccess
            : () => console.log("submit handler `onSuccess` is missing"),
          onError
        )}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
};

export { FormContainer };
