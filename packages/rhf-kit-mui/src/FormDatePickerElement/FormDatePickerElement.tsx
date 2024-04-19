import { useForkRef } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormDatePickerElementProps } from ".";

type FormDatePickerElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormDatePickerElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

const FormDatePickerElement = forwardRef(function FormDatePickerElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormDatePickerElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    name,
    control,
    required,
    isDate,
    rules,
    inputProps,
    textReadOnly,
    slotProps,
    inputRef,
    ...rest
  } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: rules ?? {
      required: required ? `${rest.label} is required` : false,
    },
    disabled: rest.disabled,
    defaultValue: null as any,
  });

  const handleInputRef = useForkRef(field.ref, inputRef);

  //   Sets default value if there is one
  if (field?.value && typeof field?.value === "string") {
    field.value = new Date(field.value) as any;
  }

  return (
    <DatePicker
      {...rest}
      {...field}
      ref={ref}
      inputRef={handleInputRef}
      readOnly={textReadOnly}
      onClose={(...args) => {
        field.onBlur();
        if (rest.onClose) {
          rest.onClose(...args);
        }
      }}
      onChange={field.onChange}
      slotProps={{
        ...slotProps,
        textField: {
          ...inputProps,
          required,
          onBlur: (event) => {
            field.onBlur();
            if (typeof inputProps?.onBlur === "function") {
              inputProps.onBlur(event);
            }
          },
          error: !!error,
          helperText: error
            ? error.message || "This field is required"
            : inputProps?.helperText,
          inputProps: {
            readOnly: !!textReadOnly,
            ...inputProps?.inputProps,
          },
        },
      }}
    />
  );
}) as FormDatePickerElementComponent;

export { FormDatePickerElement };
