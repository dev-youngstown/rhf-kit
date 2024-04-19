import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React, { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import {
  CheckboxOption,
  FormCheckboxGroupProps,
} from "./FormCheckboxGroup.types";

type FormCheckboxGroupComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormCheckboxGroupProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

const FormCheckboxGroup = forwardRef(function FormCheckboxGroup<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormCheckboxGroupProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    name,
    control,
    required,
    label,
    rules,
    returnObject,
    helperText,
    disabled,
    row,
    options,
    checkboxProps,
  } = props;

  const {
    field: { value = [], onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    disabled,
    rules: rules ?? {
      required: required ? `${label} is required` : false,
    },
  });

  const renderHelperText = error ? error.message : helperText;

  const handleChange = (newValue: number | string) => {
    const newArray: any[] = [...value];
    const exists =
      value.findIndex((item: CheckboxOption | number | string) =>
        returnObject && typeof item === "object"
          ? item.value === newValue
          : item === newValue
      ) === -1;
    if (exists) {
      newArray.push(
        returnObject
          ? options.find((item: CheckboxOption) => item.value === newValue)
          : newValue
      );
    } else {
      newArray.splice(
        value.findIndex((item: CheckboxOption | number | string) =>
          returnObject && typeof item === "object"
            ? item.value === newValue
            : item === newValue
        ),
        1
      );
    }

    onChange(newArray);
  };

  return (
    <FormControl error={!!error} required={required} ref={ref}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormGroup row={row}>
        {options.map((option) => {
          const isChecked =
            value.findIndex((item: any) =>
              returnObject ? item.value === option.value : item === option.value
            ) !== -1;
          return (
            <FormControlLabel
              key={option.value}
              control={
                <Checkbox
                  {...checkboxProps}
                  checked={isChecked}
                  value={option.value}
                  onChange={() => handleChange(option.value)}
                  disabled={disabled}
                />
              }
              label={option.label}
            />
          );
        })}
      </FormGroup>
      {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
    </FormControl>
  );
}) as FormCheckboxGroupComponent;

export { FormCheckboxGroup };
