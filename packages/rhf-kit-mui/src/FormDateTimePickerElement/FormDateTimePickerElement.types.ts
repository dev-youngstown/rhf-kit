import { TextFieldProps } from "@mui/material";
import {
  DateTimePickerProps,
  DateTimePickerSlotProps,
} from "@mui/x-date-pickers";
import {
  Control,
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerProps,
} from "react-hook-form";

export type FormDateTimePickerElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TDate extends never = PathValue<TFieldValues, TName>,
> = Omit<DateTimePickerProps<TDate>, "slotProps" | "value"> & {
  /**
   * The name of the field in the form.
   */
  name: TName;
  /**
   * The React Hook Form control object.
   */
  control?: Control<TFieldValues>;
  /**
   * If `true`, the field is required.
   *
   * @default false
   */
  required?: boolean;
  /**
   * Validation rules for the field.
   */
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  /**
   * The input props for the MUI TextField component.
   */
  inputProps?: TextFieldProps;
  /**
   * If `true`, the text field is read-only.
   *
   * @default false
   */
  textReadOnly?: boolean;
  /**
   * The props to pass to the `DatePickerSlotProps`.
   */
  slotProps?: Omit<DateTimePickerSlotProps<TDate, boolean>, "textField">;
};
