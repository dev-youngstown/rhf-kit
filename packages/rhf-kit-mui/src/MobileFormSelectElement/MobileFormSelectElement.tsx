import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
  useForkRef,
} from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { MobileFormSelectProps } from "./MobileFormSelectElement.types";

type MobileFormSelectElementComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = (
  props: MobileFormSelectProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

/**
 * The `MobileFormSelectElement` component serves as a form group wrapper around the MUI `NativeSelect`.
 * This component that serves as a layer of abstraction form any `react-hook-form` form control functions.
 * and validation in MUI-based forms. This component simplifies the use of `Select` within a form context,
 * handling errors and custom validation rules transparently.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `NativeSelect` component accepts with a few exceptions.
 *
 * The component is implemented using:
 * - [MUI Select](https://mui.com/material-ui/react-select/#native-select)
 * - [MUI FormControl](https://mui.com/material-ui/api/form-control/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * TODO: Add example usage link to Storybook docs
 */
const MobileFormSelectElement = forwardRef(function MobileFormSelectComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: MobileFormSelectProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    name,
    label,
    control,
    options,
    required = false,
    helperText,
    disabled = false,
    rules,
    placeholder,
    formControlProps,
    inputRef,
    ...other
  } = props;

  const {
    field: { value, onChange, onBlur, disabled: fieldDisabled, ...field },
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

  const handleInputRef = useForkRef(field.ref, inputRef);

  return (
    <FormControl
      fullWidth
      ref={ref}
      error={!!error}
      required={required}
      disabled={fieldDisabled}
      {...formControlProps}
    >
      {label && <InputLabel variant="standard">{label}</InputLabel>}
      <NativeSelect
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputRef={handleInputRef}
        {...other}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </NativeSelect>
      {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
    </FormControl>
  );
}) as MobileFormSelectElementComponent;

export { MobileFormSelectElement };
