import {
  FormControlLabelProps,
  FormControlProps,
  FormHelperTextProps,
  FormLabelProps,
  RadioProps,
} from "@mui/material";
import {
  Control,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

export type FormRadioOption = {
  label: string;
  value: string | number;
};

export type FormRadioGroupProps<
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
   * The options to display.
   */
  options: FormRadioOption[];
  /**
   * If `true`, the component is required.
   *
   * @default false
   */
  required?: boolean;
  /**
   * The helper text to display.
   */
  helperText?: string;
  /**
   * If `true`, the radios will be displayed in row.
   *
   * @default false
   */
  row?: boolean;
  /**
   * The label to display.
   */
  label?: string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The rules to apply for validation.
   */
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  /**
   * The props to pass to the Radio component.
   */
  radioProps?: RadioProps;
  /**
   * The props to pass to the FormControl component.
   */
  formControlProps?: Omit<
    FormControlProps,
    "error" | "required" | "disabled" | "ref"
  >;
  /**
   * The props to pass to the FormControlLabel component.
   */
  formControlLabelProps?: Omit<
    FormControlLabelProps,
    "key" | "value" | "control" | "label" | "onChange"
  >;
  /**
   * The props to pass to the FormLabel component.
   */
  formLabelProps?: Omit<
    FormLabelProps,
    "children" | "error" | "required" | "disabled"
  >;
  /**
   * The props to pass to the FormHelperText component.
   */
  formHelperTextProps?: Omit<
    FormHelperTextProps,
    "error" | "required" | "children"
  >;
};
