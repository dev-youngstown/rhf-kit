import { PropsWithChildren } from "react";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormProps,
} from "react-hook-form";

export type FormContainerProps<T extends FieldValues = FieldValues> =
  PropsWithChildren<
    UseFormProps<T> & {
      onSuccess?: SubmitHandler<T>;
      onError?: SubmitErrorHandler<T>;
    }
  >;
