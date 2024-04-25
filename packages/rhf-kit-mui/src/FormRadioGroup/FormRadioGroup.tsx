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

/**
 * The `FormRadioGroup` component serves as a form group wrapper around the MUI `RadioGroup` and.
 * This component that serves as a layer of abstraction form any `react-hook-form` form control functions.
 * and validation in MUI-based forms. This component simplifies the use of checkbox groups within a form context,
 * handling errors and custom validation rules transparently.
 *
 * The radio group should have the most commonly used option by default.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `Radio`, `FormControl`, `FormLabel`, and `FormHelperText` components accepts.
 *
 * The component is implemented using:
 * - [MUI Radio](https://mui.com/material-ui/api/radio/)
 * - [MUI RadioGroup](https://mui.com/material-ui/react-radio-button/)
 * - [MUI FormControl](https://mui.com/material-ui/api/form-control/)
 * - [MUI FormLabel](https://mui.com/material-ui/api/form-label/)
 * - [MUI FormHelperText](https://mui.com/material-ui/api/form-helper-text/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * TODO: Add example usage link to Storybook docs
 */
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
    required = false,
    helperText,
    row = false,
    label,
    disabled = false,
    rules,
    radioProps,
    formControlProps,
    formControlLabelProps,
    formLabelProps,
    formHelperTextProps,
  } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: required ? `${label} is required` : false,
      ...rules,
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
      {...formControlProps}
    >
      {label && <FormLabel {...formLabelProps}>{label}</FormLabel>}
      <RadioGroup value={field.value} onBlur={field.onBlur} row={row}>
        {options.map(({ label, value }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={<Radio {...radioProps} />}
            label={label}
            onChange={() => field.onChange(value)}
            {...formControlLabelProps}
          />
        ))}
      </RadioGroup>
      {renderHelperText && (
        <FormHelperText {...formHelperTextProps}>
          {renderHelperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}) as FormRadioGroupComponent;

export { FormRadioGroup };
