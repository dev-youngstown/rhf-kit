import { InputBaseComponentProps, SliderProps } from "@mui/material";
import { ReactNode } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export type FormSliderElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<SliderProps, "name"> & {
  /**
   * Name of the field value in the form.
   */
  name: TName;
  /**
   * The Controller from react-hook-form using generic FieldValues.
   */
  control?: Control<TFieldValues>;
  /**
   * Label to display above the slider.
   *
   * @default undefined
   */
  label?: string;
  /**
   * If `true`, the value of the slider will be displayed with the label.
   * Only visible when the label is set.
   *
   * @default false
   */
  valueInLabel?: boolean;
  /**
   * Icon to display at the start of the slider
   *
   * @default undefined
   */
  startIcon?: ReactNode;
  /**
   * Icon to display at the end of the slider
   *
   * @default undefined
   */
  endIcon?: ReactNode;
  /**
   * Specify the minimum distance between the thumbs.
   * This is only applicable when the slider is a range slider.
   *
   * @default undefined
   */
  minDistance?: number;
  /**
   * If `true`, an input will be displayed to the right of the slider to allow a discrete value to be set.
   * Does not work with range sliders.
   *
   * @default false
   */
  input?: boolean;
  /**
   * Props to pass to the inputProps in the Input element.
   */
  inputProps?: Omit<InputBaseComponentProps, "type">;
};
