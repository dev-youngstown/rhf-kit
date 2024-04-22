import { SwitchProps } from "@mui/material";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export type FormSwitchElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<SwitchProps, "name"> & {
  /**
   * Name of the field value in the form.
   */
  name: TName;
  /**
   * The Controller from react-hook-form using generic FieldValues.
   */
  control?: Control<TFieldValues>;
  /**
   * Label display with the switch.
   *
   * @default undefined
   */
  label?: string;
  /**
   * If `true`, the switch will be required
   *
   * @default false
   */
  required?: boolean;
  /**
   * Text that is displayed below the switch.
   */
  helperText?: string;
};
