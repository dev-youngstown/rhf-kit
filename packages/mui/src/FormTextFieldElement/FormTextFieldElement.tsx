import { TextField, useForkRef } from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormTextFieldElementProps } from "./FormTextFieldElement.types";

type FormTextFieldElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormTextFieldElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

const FormTextFieldElement = forwardRef(function TextFieldElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormTextFieldElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    type,
    required,
    name,
    control,
    component: TextFieldComponent = TextField,
    inputRef,
    rules,
    ...rest
  } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    disabled: rest.disabled,
    rules: rules ?? {
      required: required ? `${rest.label} is required` : false,
    },
  });

  const handleInputRef = useForkRef(field.ref, inputRef);

  return (
    <TextFieldComponent
      {...rest}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      required={required}
      type={type}
      error={!!error}
      helperText={error ? error.message : rest.helperText}
      ref={ref}
      inputRef={handleInputRef}
    />
  );
}) as FormTextFieldElementComponent;

export { FormTextFieldElement };
