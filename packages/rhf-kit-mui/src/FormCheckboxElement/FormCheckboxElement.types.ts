import { CheckboxProps, FormControlLabelProps } from "@mui/material";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export type FormCheckboxElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  /**
   * The name of the field.
   */
  name: TName;
  /**
   * The Controller from react-hook-form using generic FieldValues.
   */
  control?: Control<TFieldValues>;
  /**
   * The label to display.
   */
  label?: string;
  /**
   * If `true`, the component is disabled.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The props to pass to the FormControlLabel component.
   */
  labelProps?: FormControlLabelProps;
  /**
   * The props to pass to the Checkbox component.
   */
  checkboxProps?: CheckboxProps;
};
