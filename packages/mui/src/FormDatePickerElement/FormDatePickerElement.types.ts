import { TextFieldProps } from "@mui/material";
import { DatePickerProps, DatePickerSlotProps } from "@mui/x-date-pickers";
import {
  Control,
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerProps,
} from "react-hook-form";

export type FormDatePickerElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TDate extends Date = PathValue<TFieldValues, TName>,
> = Omit<DatePickerProps<TDate>, "slotProps" | "value"> & {
  name: TName;
  control?: Control<TFieldValues>;
  required?: boolean;
  isDate?: boolean;
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  inputProps?: TextFieldProps;
  textReadOnly?: boolean;
  slotProps?: Omit<DatePickerSlotProps<TDate, boolean>, "textField">;
};
