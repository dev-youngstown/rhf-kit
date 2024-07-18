import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
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

/**
 * The `FormCheckboxGroup` component serves as a form group wrapper around the MUI `Checkbox`.
 * This component that serves as a layer of abstraction form any `react-hook-form` form control functions.
 * and validation in MUI-based forms. This component simplifies the use of checkbox groups within a form context,
 * handling errors and custom validation rules transparently.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `Checkbox` component accepts.
 *
 * The component is implemented using:
 * - [MUI Checkbox](https://mui.com/material-ui/react-checkbox/)
 * - [MUI FormControl](https://mui.com/material-ui/api/form-control/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * TODO: Add example usage link to Storybook docs
 */
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
    required = false,
    label,
    rules,
    returnObject = false,
    helperText,
    disabled = false,
    row = false,
    options,
    checkboxProps,
  } = props;

  const {
    field: { value = [], onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: required ? `${label} is required` : false,
      ...rules,
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
    <FormControl error={!!error} required={required} ref={ref} disabled={disabled}>
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
