import { CheckboxProps } from "@mui/material";
import { ReactNode } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

export type CheckboxOption = {
  label: string;
  value: string | number;
};

export type FormCheckboxGroupProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  /**
   * Unique name of your input.
   */
  name: TName;
  /**
   * The Controller from react-hook-form using generic FieldValues.
   */
  control?: Control<TFieldValues>;
  /**
   * The options to display.
   */
  options: CheckboxOption[];
  /**
   * If `true`, the component is required.
   *
   * @default false
   */
  required?: boolean;
  /**
   * The helper text to display.
   */
  helperText?: ReactNode;
  /**
   * The label to display.
   */
  label?: string;
  /**
   * If `true`, the component will handle values as an object.
   *
   * @default false
   */
  returnObject?: boolean;
  /**
   * If `true`, the component will display checkboxes inline.
   *
   *  @default false
   */
  row?: boolean;
  /**
   * If `true`, the component is disabled.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The rules to apply for validation.
   */
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  /**
   * The props to pass to the Checkbox component.
   */
  checkboxProps?: CheckboxProps;
};
