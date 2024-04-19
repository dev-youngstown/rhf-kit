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
   */
  required?: boolean;
  /**
   * The helper text to display.
   */
  helperText?: string;
  /**
   * The label to display.
   */
  label?: string;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The rules to apply for validation.
   */
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
};
