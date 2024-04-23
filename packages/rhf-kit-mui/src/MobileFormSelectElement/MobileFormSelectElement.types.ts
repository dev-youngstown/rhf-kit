import { FormControlProps, NativeSelectProps } from "@mui/material";
import {
  Control,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { FormSelectOption } from "..";

export type MobileFormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<NativeSelectProps, "value" | "onChange" | "onBlur" | "variant"> & {
  /**
   * The name of the input field.
   */
  name: TName;
  /**
   * The label of the input field.
   */
  label?: string;
  /**
   * The control object from React Hook Form.
   */
  control?: Control<TFieldValues>;
  /**
   * The options of the select input.
   */
  options: FormSelectOption[];
  /**
   * If 'true' the input field is required.
   * @default false
   */
  required?: boolean;
  /**
   * The helper text of the input field.
   */
  helperText?: string;
  /**
   * If 'true' the input field is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The rules for the input field.
   */
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  /**
   * The props of the FormControl component.
   */
  formControlProps?: Omit<
    FormControlProps,
    | "variant"
    | "ref"
    | "error"
    | "required"
    | "disabled"
    | "fullWidth"
    | "variant"
  >;
};
