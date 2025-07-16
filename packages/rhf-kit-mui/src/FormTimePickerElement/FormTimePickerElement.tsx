import { useForkRef } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormTimePickerElementProps } from ".";

type FormTimePickerElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormTimePickerElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => React.JSX.Element;

/**
 * The `FormTimePicker` component is a wrapper around the MUI `TimePicker`.
 * This component that serves as a layer of abstraction form any `react-hook-form` form control functions.
 * and validation in MUI-based forms. This component simplifies the use of DatePickers within a form context,
 * handling errors and custom validation rules transparently.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `TimePicker` component accepts.
 *
 * On Desktops, the [MUI DesktopTimePicker](https://mui.com/x/api/date-pickers/desktop-time-picker/) is rendered automatically.
 *
 * On Mobile devices, the [MUI MobileTimePicker](https://mui.com/x/api/date-pickers/mobile-time-picker/) is rendered automatically.
 *
 * The component is implemented using:
 * - [MUI TimePicker](https://mui.com/x/react-date-pickers/time-picker/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * TODO: Add example usage link to Storybook docs
 */
const FormTimePickerElement = forwardRef(function FormTimePickerElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormTimePickerElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): React.JSX.Element {
  const {
    name,
    control,
    required = false,
    rules,
    inputProps,
    textReadOnly = false,
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
    rules: {
      required: required ? `${rest.label} is required` : false,
      ...rules,
    },
    defaultValue: null as any,
  });

  const handleInputRef = useForkRef(field.ref, inputRef);

  //   Sets default value if there is one
  if (field?.value && typeof field?.value === "string") {
    field.value = new Date(field.value) as any;
  }

  return (
    <TimePicker
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
          onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
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
}) as FormTimePickerElementComponent;

export { FormTimePickerElement };
