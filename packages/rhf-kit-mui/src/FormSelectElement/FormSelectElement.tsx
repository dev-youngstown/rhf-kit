import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormSelectProps } from "./FormSelectElement.types";

type FormSelectElementComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = (
  props: FormSelectProps<TFieldValues, TName> & RefAttributes<HTMLDivElement>
) => JSX.Element;

/**
 * The `FormSelectElement` component serves as a form group wrapper around the MUI `Select`.
 * This component that serves as a layer of abstraction form any `react-hook-form` form control functions.
 * and validation in MUI-based forms. This component simplifies the use of `Select` within a form context,
 * handling errors and custom validation rules transparently.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `Select` component accepts.
 *
 * The component is implemented using:
 * - [MUI Select](https://mui.com/material-ui/react-select/)
 * - [MUI FormControl](https://mui.com/material-ui/api/form-control/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * TODO: Add example usage link to Storybook docs
 */
const FormSelectElement = forwardRef(function FormSelectElementComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormSelectProps<TFieldValues, TName>,
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
    multiple = false,
    rules,
    placeholder,
    variant = "outlined",
    checkboxes = false,
    formControlProps,
    chips,
    ...other
  } = props;

  const {
    field: {
      value = multiple ? [] : "",
      onChange,
      onBlur,
      disabled: fieldDisabled,
    },
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

  const renderInputValues = (
    selected: string | number | (string | number)[]
  ) => {
    // handle rendering selected values and placeholder for multiple select
    if (multiple) {
      if ((selected as (string | number)[]).length === 0 && placeholder) {
        return <em>{placeholder}</em>;
      }

      // handle rendering chips for multiple select
      if (chips) {
        return (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {(selected as (string | number)[]).map((value) => (
              <Chip
                key={value}
                label={options.find((option) => option.value === value)?.label}
              />
            ))}
          </Box>
        );
      }

      // render labels separated by comma
      return (selected as (string | number)[])
        .map((value) => {
          const option = options.find((option) => option.value === value);
          return option ? option.label : undefined;
        })
        .filter((label): label is string => !!label)
        .join(", ");
    }

    // handle rendering selected value and placeholder for single select
    if (typeof selected === "string" || typeof selected === "number") {
      if (!selected && placeholder) {
        return <em>{placeholder}</em>;
      }
      return options.find((option) => option.value === selected)?.label;
    }

    // fallback to return selected value
    return selected;
  };

  const renderHelperText = error ? error.message : helperText;

  return (
    <FormControl
      fullWidth
      ref={ref}
      error={!!error}
      required={required}
      disabled={fieldDisabled}
      variant={variant}
      {...formControlProps}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        multiple={multiple}
        displayEmpty={!!placeholder}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        renderValue={(selected: any) => renderInputValues(selected)}
        {...other}
      >
        {placeholder && (
          <MenuItem value="placeholder" disabled>
            <em>{placeholder}</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {checkboxes && (
              <Checkbox
                checked={
                  multiple
                    ? (value as (string | number)[]).includes(option.value)
                    : option.value === value
                }
              />
            )}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
      {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
    </FormControl>
  );
}) as FormSelectElementComponent;

export { FormSelectElement };
