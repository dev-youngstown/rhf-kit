import { Checkbox, FormControlLabel, useForkRef } from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormCheckboxElementProps } from "./FormCheckboxElement.types";

type FormCheckboxComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormCheckboxElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

/**
 * The `FormCheckboxElement` component serves as a form wrapper around the MUI `Checkbox`.
 * The value of the checkbox is controlled by the `react-hook-form` `Controller` component.
 * The value of the checkbox is either `true` or `false`.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `Checkbox` and `FormControlLabel` components accepts.
 *
 * The component is implemented using:
 * - [MUI Checkbox](https://mui.com/material-ui/react-checkbox/)
 * - [MUI FormControlLabel](https://mui.com/material-ui/api/form-control-label/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * TODO: Add example usage link to Storybook docs
 */
const FormCheckboxElement = forwardRef(function FormCheckboxElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormCheckboxElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const { name, control, label, disabled, labelProps, checkboxProps } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    disabled,
  });

  const handleInputRef = useForkRef(field.ref, checkboxProps?.inputRef);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={field.value}
          onChange={field.onChange}
          disabled={field.disabled}
          onBlur={field.onBlur}
          inputRef={handleInputRef}
          {...checkboxProps}
        />
      }
      label={label}
      ref={ref}
      {...labelProps}
    />
  );
}) as FormCheckboxComponent;

export { FormCheckboxElement };
