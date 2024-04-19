import { TextField, useForkRef } from "@mui/material";
import React, { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormTextFieldElementProps } from "./FormTextFieldElement.types";

type FormTextFieldElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormTextFieldElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

/**
 * The `FormTextFieldElement` component is a wrapper around the MUI `TextField`.
 * This component that serves as a layer of abstraction form any `react-hook-form` form control functions.
 * and validation in MUI-based forms. This component simplifies the use of text fields within a form context,
 * handling errors and custom validation rules transparently.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `TextField` component accepts.
 *
 * The component is implemented using:
 * - [MUI TextField](https://mui.com/material-ui/react-text-field/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * TODO: Add example usage link to Storybook docs
 */

const FormTextFieldElement = forwardRef(function FormTextFieldElement<
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
