import { FormControlProps, SelectProps } from "@mui/material";
import {
  Control,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

export type FormSelectOption = {
  /**
   * The value of the option.
   */
  value: string | number;
  /**
   * The label of the option.
   */
  label: string;
};

export type FormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<
  SelectProps,
  | "name"
  | "multiple"
  | "displayEmpty"
  | "label"
  | "value"
  | "onChange"
  | "onBlur"
  | "renderValue"
  | "disabled"
  | "required"
  | "children"
  | "variant"
> & {
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
   * If 'true' the input field is allowed to contain multiple values.
   * @default false
   */
  multiple?: boolean;
  /**
   * The rules for the input field.
   */
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  /**
   * The placeholder of the input field.
   */
  placeholder?: string;
  /**
   * The variant of the input field.
   * @default "outlined"
   */
  variant?: "filled" | "outlined" | "standard";
  /**
   * If 'true' the menu items will have checkboxes.
   * @default false
   */
  checkboxes?: boolean;
  /**
   * If 'true' the input field will display selected options as chips.
   *
   * This prop is only used when `multiple` is `true`.
   *
   * @default false
   */
  chips?: boolean;
  /**
   * The props of the FormControl component.
   */
  formControlProps?: Omit<
    FormControlProps,
    "variant" | "ref" | "error" | "required" | "disabled" | "fullWidth"
  >;
};
