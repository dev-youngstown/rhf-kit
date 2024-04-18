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
  name: TName;
  control?: Control<TFieldValues>;
  options: Value[];
  multiple?: Multiple;
  disableClearable?: DisableClearable;
  matchId?: boolean;
  freeSolo?: FreeSolo;
  loading?: boolean;
  loadingIndicator?: ReactNode;
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  required?: boolean;
  label?: TextFieldProps["label"];
  showCheckbox?: boolean;
  autocompleteProps?: Omit<
    AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
    "name" | "options" | "loading" | "renderInput"
  >;
  textFieldProps?: Omit<TextFieldProps, "name" | "required" | "label">;
};
