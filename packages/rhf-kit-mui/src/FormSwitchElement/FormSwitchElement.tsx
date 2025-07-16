import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Switch,
  useForkRef,
} from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormSwitchElementProps } from "./FormSwitchElement.types";

type FormSwitchElementComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = (
  props: FormSwitchElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => React.JSX.Element;

/**
 * The `FormSwitchElement` component serves as a form wrapper around the MUI `Switch`.
 * The value of the Switch is controlled by the `react-hook-form` `Controller` component.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `Switch` and `FormControlLabel` components accepts.
 *
 * The component is implemented using:
 * - [MUI Switch](https://mui.com/material-ui/react-switch/)
 * - [MUI FormControl](https://mui.com/material-ui/api/form-control/)
 * - [MUI FormControlLabel](https://mui.com/material-ui/api/form-control-label/)
 * - [MUI FormHelperText](https://mui.com/material-ui/api/form-helper-text/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * TODO: Add example usage link to Storybook docs
 */
const FormSwitchElement = forwardRef(function FormSwitchElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormSwitchElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): React.JSX.Element {
  const {
    control,
    name,
    label,
    required,
    helperText,
    inputRef,
    formControlProps,
    formControlLabelProps,
    formHelperTextProps,
    ...switchProps
  } = props;

  const {
    field: { value, onChange, ref: fieldRef },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: required ? `${label ? label : "selection"} is required` : false,
    },
  });

  const renderHelperText = error ? error.message : helperText;

  const handleInputRef = useForkRef(fieldRef, inputRef);

  return (
    <FormControl
      error={!!error}
      required={required}
      ref={ref}
      {...formControlProps}
    >
      <FormControlLabel
        control={
          <Switch checked={value} onChange={onChange} {...switchProps} />
        }
        label={label}
        inputRef={handleInputRef}
        {...formControlLabelProps}
      />
      <FormHelperText {...formHelperTextProps}>
        {renderHelperText}
      </FormHelperText>
    </FormControl>
  );
}) as FormSwitchElementComponent;

export { FormSwitchElement };
