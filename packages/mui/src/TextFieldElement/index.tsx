import { TextField, TextFieldProps } from "@mui/material";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

// FormInputProps is a generic type that takes a FieldValues type as an argument
export type FormInputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  rules?: RegisterOptions;
};

// FormTextFieldProps is a generic type that extends FormInputProps and TextFieldProps
export type FormTextFieldProps<TFieldValues extends FieldValues = FieldValues> =
  FormInputProps<TFieldValues> & TextFieldProps;

export const FormTextField = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  label,
  rules,
  ...props
}: FormTextFieldProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props} // spread TextFieldProps
          label={label}
          error={!!error}
          helperText={error && error.message}
        />
      )}
    />
  );
};
