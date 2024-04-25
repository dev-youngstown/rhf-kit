import { FormControlLabelProps, RadioProps } from "@mui/material";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export type FormRadioElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  /**
   * Unique name of your input.
   */
  name: TName;
  /**
   * The label of the input field.
   */
  label?: string;
  /**
   * The control of the input field.
   */
  control?: Control<TFieldValues>;
  /**
   * If `true`, the input field will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The value of the input field.
   */
  value?: string | number | boolean;
  /**
   * The props of the FormControlLabel component.
   */
  formControlLabelProps?: Omit<
    FormControlLabelProps,
    "control" | "label" | "disabled" | "ref"
  >;
  /**
   * The props of the Radio component.
   */
  radioProps?: Omit<RadioProps, "value" | "onChange" | "onBlur" | "checked">;
};
