import {
  Autocomplete,
  Checkbox,
  CircularProgress,
  TextField,
  useForkRef,
} from "@mui/material";
import { forwardRef, Ref, RefAttributes } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import {
  AutoDefault,
  FormAutoCompleteElementProps,
} from "./FormAutoCompleteElement.types";

type FormAutoCompleteElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormAutoCompleteElementProps<
    TFieldValues,
    TName,
    AutoDefault | string | any,
    boolean | undefined,
    boolean | undefined,
    boolean | undefined
  > &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

/**
 * The `FormAutoCompleteElement` component serves as a form group wrapper around the MUI `Autocomplete`.
 * This component that serves as a layer of abstraction form any `react-hook-form` form control functions.
 * and validation in MUI-based forms. This component simplifies the use of `Autocomplete` within a form context,
 * handling errors and custom validation rules transparently.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `Autocomplete` component accepts.
 *
 * The component is implemented using:
 * - [MUI Autocomplete](https://mui.com/material-ui/react-autocomplete/)
 * - [MUI TextField](https://mui.com/material-ui/react-text-field/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * example data from:
 * - [MUI Autocomplete](https://mui.com/material-ui/react-autocomplete/)
 *
 */
const FormAutoCompleteElement = forwardRef(function AutoCompleteElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormAutoCompleteElementProps<
    TFieldValues,
    TName,
    AutoDefault | string | any,
    boolean | undefined,
    boolean | undefined,
    boolean | undefined
  >,
  ref: Ref<HTMLDivElement>
) {
  const {
    name,
    control,
    options,
    loading = false,
    showCheckbox = false,
    rules,
    loadingIndicator,
    required = false,
    multiple,
    matchId = false,
    label,
    disableCloseOnSelect,
    renderInput,
    isOptionEqualToValue,
    getOptionLabel,
    onBlur,
    renderOption,
    onChange,
    ...rest
  } = props;

  const loadingElement = loadingIndicator || (
    <CircularProgress color="inherit" size={20} />
  );

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
  });

  const handleInputRef = useForkRef(field.ref);

  let currentValue = multiple ? field.value || [] : (field.value ?? null);

  if (matchId) {
    currentValue = multiple
      ? (field.value || []).map((i: any) =>
          options.find((j) => (j.id ?? j) === i)
        )
      : (options.find((i) => (i.id ?? i) === field.value) ?? null);
  }

  return (
    <Autocomplete
      {...rest}
      value={currentValue}
      loading={loading}
      multiple={multiple}
      options={options}
      disableCloseOnSelect={
        typeof disableCloseOnSelect === "boolean"
          ? disableCloseOnSelect
          : !!multiple
      }
      isOptionEqualToValue={
        isOptionEqualToValue
          ? isOptionEqualToValue
          : (option, value) => {
              return value ? option.id === (value?.id ?? value) : false;
            }
      }
      getOptionLabel={
        getOptionLabel
          ? getOptionLabel
          : (option) => {
              return `${option?.label ?? option}`;
            }
      }
      onChange={(event, value, reason, details) => {
        let changedVal = value;
        if (matchId) {
          changedVal = Array.isArray(value)
            ? value.map((i: any) => i?.id ?? i)
            : (value?.id ?? value);
        }
        field.onChange(changedVal);
        if (onChange) {
          onChange(event, value, reason, details);
        }
      }}
      ref={ref}
      renderOption={
        renderOption ??
        (showCheckbox
          ? (props, option, { selected }) => (
              <li {...props}>
                <Checkbox sx={{ marginRight: 1 }} checked={selected} />
                {getOptionLabel?.(option) || option.label || option}
              </li>
            )
          : undefined)
      }
      onBlur={(event) => {
        field.onBlur();
        if (typeof onBlur === "function") {
          onBlur(event);
        }
      }}
      renderInput={
        renderInput ??
        ((params) => (
          <TextField
            name={name}
            required={rules?.required ? true : required}
            label={label}
            {...params}
            error={!!error}
            slotProps={{
              inputLabel: { ...params.InputLabelProps },
              input: {
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? loadingElement : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              },
              htmlInput: { ...params.inputProps },
            }}
            helperText={error && error.message}
            inputRef={handleInputRef}
          />
        ))
      }
    />
  );
}) as FormAutoCompleteElementComponent;

export { FormAutoCompleteElement };
