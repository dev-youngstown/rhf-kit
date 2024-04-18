import { FormTextFieldElementProps } from "@/FormTextFieldElement";
import { IconButtonProps } from "@mui/material";
import { ReactNode } from "react";
import { FieldPath, FieldValues } from "react-hook-form";

export type FormPasswordElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = FormTextFieldElementProps<TFieldValues, TName> & {
  iconColor?: IconButtonProps["color"];
  renderIcon?: (password: boolean) => ReactNode;
};
