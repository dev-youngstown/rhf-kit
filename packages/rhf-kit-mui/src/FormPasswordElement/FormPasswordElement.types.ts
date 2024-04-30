import { IconButtonProps } from "@mui/material";
import { ReactNode } from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import { FormTextFieldElementProps } from "../FormTextFieldElement";

export type FormPasswordElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = FormTextFieldElementProps<TFieldValues, TName> & {
  /**
   * The color of the icon button.
   * @default "default"
   */
  iconColor?: IconButtonProps["color"];
  /**
   * Controls the icon that is rendered based on if password visibility is toggled.
   */
  renderIcon?: (password: boolean) => ReactNode;
};
