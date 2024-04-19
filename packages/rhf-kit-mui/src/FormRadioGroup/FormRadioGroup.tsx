import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormRadioGroupProps } from "./FormRadioGroup.types";

type FormRadioGroupComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormRadioGroupProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

const FormRadioGroup = forwardRef(function FormRadioGroup<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormRadioGroupProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    name,
    control,
    options,
    required,
    helperText,
    label,
    disabled,
    rules,
  } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: rules ?? {
      required: required ? `${label} is required` : false,
    },
    disabled,
  });

  const renderHelperText = error ? error.message : helperText;

  return (
    <FormControl
      error={!!error}
      required={required}
      disabled={field.disabled}
      ref={ref}
    >
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup value={field.value} onBlur={field.onBlur}>
        {options.map(({ label, value }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={<Radio />}
            label={label}
            onChange={() => field.onChange(value)}
          />
        ))}
      </RadioGroup>
      {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
    </FormControl>
  );
}) as FormRadioGroupComponent;

export { FormRadioGroup };
