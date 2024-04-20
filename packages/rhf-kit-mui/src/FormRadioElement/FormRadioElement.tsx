import { FormControlLabel, Radio } from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormRadioElementProps } from "./FormRadioElement.types";

type FormRadioElementComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = (
  props: FormRadioElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

/**
 * The `FormRadioElement` component serves as a form wrapper around the MUI `Radio`.
 * The value of the Radio is controlled by the `react-hook-form` `Controller` component.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `Radio` and `FormControlLabel` components accepts.
 *
 * The component is implemented using:
 * - [MUI Radio](https://mui.com/material-ui/api/radio/)
 * - [MUI FormControlLabel](https://mui.com/material-ui/api/form-control-label/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * TODO: Add example usage link to Storybook docs
 */
const FormRadioElement = forwardRef(function FormRadioElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormRadioElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    name,
    control,
    label,
    disabled = false,
    value,
    formControlLabelProps,
    radioProps,
  } = props;

  const { field } = useController({
    name,
    control,
    disabled,
  });

  return (
    <FormControlLabel
      control={
        <Radio
          value={value}
          onChange={() => field.onChange(value)}
          onBlur={field.onBlur}
          checked={field.value === value}
          {...radioProps}
        />
      }
      label={label}
      disabled={field.disabled}
      ref={ref}
      {...formControlLabelProps}
    />
  );
}) as FormRadioElementComponent;

export { FormRadioElement };
