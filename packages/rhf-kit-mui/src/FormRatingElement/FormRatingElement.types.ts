import { RatingProps } from "@mui/material";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export type FormRatingElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<RatingProps, "name"> & {
  /**
   * Field name in the form
   */
  name: TName;
  /**
   * React Hook Form control
   */
  control?: Control<TFieldValues>;
  /**
   * Field label.
   */
  label?: string;
  /**
   * Labels to display when hovering over the rating element.
   */
  feedbackLabels?: string[];
  /**
   * The width of the rating element.
   */
  width?: number;
};
