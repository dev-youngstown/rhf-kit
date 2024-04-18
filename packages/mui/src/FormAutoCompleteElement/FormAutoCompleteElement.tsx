import {
  Autocomplete,
  Checkbox,
  CircularProgress,
  TextField,
  useForkRef,
} from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
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
    textFieldProps,
    autocompleteProps,
    name,
    control,
    options,
    loading,
    showCheckbox,
    rules,
    loadingIndicator,
    required,
    multiple,
    matchId,
    label,
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
    disabled: autocompleteProps?.disabled,
    rules: rules ?? {
      required: required ? `${label} is required` : false,
    },
  });

  const handleInputRef = useForkRef(field.ref, textFieldProps?.inputRef);

  let currentValue = multiple ? field.value || [] : field.value ?? null;

  if (matchId) {
    currentValue = multiple
      ? (field.value || []).map((i: any) =>
          options.find((j) => (j.id ?? j) === i)
        )
      : options.find((i) => (i.id ?? i) === field.value) ?? null;
  }

  return (
    <Autocomplete
      {...autocompleteProps}
      value={currentValue}
      loading={loading}
      multiple={multiple}
      options={options}
      disableCloseOnSelect={
        typeof autocompleteProps?.disableCloseOnSelect === "boolean"
          ? autocompleteProps.disableCloseOnSelect
          : !!multiple
      }
      isOptionEqualToValue={
        autocompleteProps?.isOptionEqualToValue
          ? autocompleteProps.isOptionEqualToValue
          : (option, value) => {
              return value ? option.id === (value?.id ?? value) : false;
            }
      }
      getOptionLabel={
        autocompleteProps?.getOptionLabel
          ? autocompleteProps.getOptionLabel
          : (option) => {
              return `${option?.label ?? option}`;
            }
      }
      onChange={(event, value, reason, details) => {
        let changedVal = value;
        if (matchId) {
          changedVal = Array.isArray(value)
            ? value.map((i: any) => i?.id ?? i)
            : value?.id ?? value;
        }
        field.onChange(changedVal);
        if (autocompleteProps?.onChange) {
          autocompleteProps.onChange(event, value, reason, details);
        }
      }}
      ref={ref}
      renderOption={
        autocompleteProps?.renderOption ??
        (showCheckbox
          ? (props, option, { selected }) => (
              <li {...props}>
                <Checkbox sx={{ marginRight: 1 }} checked={selected} />
                {autocompleteProps?.getOptionLabel?.(option) ||
                  option.label ||
                  option}
              </li>
            )
          : undefined)
      }
      onBlur={(event) => {
        field.onBlur();
        if (typeof autocompleteProps?.onBlur === "function") {
          autocompleteProps.onBlur(event);
        }
      }}
      renderInput={(params) => (
        <TextField
          name={name}
          required={rules?.required ? true : required}
          label={label}
          {...textFieldProps}
          {...params}
          error={!!error}
          InputLabelProps={{
            ...params.InputLabelProps,
            ...textFieldProps?.InputLabelProps,
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? loadingElement : null}
                {params.InputProps.endAdornment}
              </>
            ),
            ...textFieldProps?.InputProps,
          }}
          inputProps={{
            ...params.inputProps,
            ...textFieldProps?.inputProps,
          }}
          helperText={error ? error.message : textFieldProps?.helperText}
          inputRef={handleInputRef}
        />
      )}
    />
  );
}) as FormAutoCompleteElementComponent;

export { FormAutoCompleteElement };
