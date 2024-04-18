import { TextField, TextFieldProps, useForkRef } from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

export type FormTextFieldElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<TextFieldProps, "name"> & {
  name: TName;
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  control?: Control<TFieldValues>;
  /**
   * You override the MUI's TextField component by passing a reference of the component you want to use.
   *
   * This is especially useful when you want to use a customized version of TextField.
   */
  component?: typeof TextField;
};

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
});
FormTextFieldElement.displayName = "TextFieldElement";

export default FormTextFieldElement as FormTextFieldElementComponent;
