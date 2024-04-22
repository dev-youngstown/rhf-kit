import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Switch,
  useForkRef,
} from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormSwitchElementProps } from "./FormSwitchElement.types";

type FormSwitchElementComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = (
  props: FormSwitchElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

const FormSwitchElement = forwardRef(function FormSwitchElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormSwitchElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    control,
    name,
    label,
    required,
    disabled,
    helperText,
    inputRef,
    ...switchProps
  } = props;

  const {
    field: { value, onChange, ref: fieldRef },
    fieldState: { error },
  } = useController({
    name,
    control,
    disabled,
    rules: {
      required: required ? `${label ? label : "selection"} is required` : false,
    },
  });

  const renderHelperText = error ? error.message : helperText;

  const handleInputRef = useForkRef(fieldRef, inputRef);

  return (
    <FormControl
      error={!!error}
      required={required}
      disabled={disabled}
      ref={ref}
    >
      <FormControlLabel
        required={required}
        control={
          <Switch checked={value} onChange={onChange} {...switchProps} />
        }
        label={label}
        inputRef={handleInputRef}
      />
      <FormHelperText>{renderHelperText}</FormHelperText>
    </FormControl>
  );
}) as FormSwitchElementComponent;

export { FormSwitchElement };
