
import { PropsWithChildren } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, UseFormProps, useForm } from "react-hook-form";

export type FormContainerProps<T extends FieldValues = FieldValues> =
  PropsWithChildren<
    UseFormProps<T> & {
      onSuccess?: SubmitHandler<T>;
      onError?: SubmitErrorHandler<T>;
    }
  >;

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

export default FormContainer;
