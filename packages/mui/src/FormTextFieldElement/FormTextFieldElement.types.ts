import { TextField, TextFieldProps } from "@mui/material";
import {
  Control,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

export type FormTextFieldElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<TextFieldProps, "name"> & {
  name: TName;
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  control?: Control<TFieldValues>;
  /**
   * You override the MUI's TextField component by passing a reference of the component you want to use.
   *
   * This is especially useful when you want to use a customized version of TextField.
   */
  component?: typeof TextField;
};
