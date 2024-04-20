import { AutocompleteProps, TextFieldProps } from "@mui/material";
import { ReactNode } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

export type AutoDefault = {
  id: string | number;
  label: string;
};

export type FormAutoCompleteElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  Value = AutoDefault | string | any,
  Multiple extends boolean | undefined = boolean | undefined,
  DisableClearable extends boolean | undefined = boolean | undefined,
  FreeSolo extends boolean | undefined = boolean | undefined,
> = {
  /**
   * The name of the field in the form.
   */
  name: TName;
  /**
   * The React Hook Form control object.
   */
  control?: Control<TFieldValues>;
  /**
   * The options for the Autocomplete component.
   */
  options: Value[];
  /**
   * If `true`, this allows for multiple selected options.
   */
  multiple?: Multiple;
  /**
   * If `true`, the clear button is disabled.
   */
  disableClearable?: DisableClearable;
  /**
   * If `true`, the submission will be the `id` of the selected option.
   *
   * @default false
   */
  matchId?: boolean;
  /**
   * If `true`, the user input is not restricted to the options.
   */
  freeSolo?: FreeSolo;
  /**
   * If `true`, shows a loading indicator.
   *
   * @default false
   */
  loading?: boolean;
  /**
   * The loading indicator to display.
   */
  loadingIndicator?: ReactNode;
  /**
   * The rules for the field.
   */
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  /**
   * If `true`, the field is required.
   *
   * @default false
   */
  required?: boolean;
  /**
   * The label for the field.
   */
  label?: TextFieldProps["label"];
  /**
   * If `true`, shows a checkbox for each option.
   *
   * @default false
   */
  showCheckbox?: boolean;
  /**
   * The props for the Autocomplete component.
   */
  autocompleteProps?: Omit<
    AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
    "name" | "options" | "loading" | "renderInput"
  >;
  /**
   * The props for the TextField component.
   */
  textFieldProps?: Omit<TextFieldProps, "name" | "required" | "label">;
};
