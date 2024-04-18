import { PropsWithChildren } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormContainerProps } from ".";

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
