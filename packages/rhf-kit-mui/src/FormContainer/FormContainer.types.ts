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
      /**
       * The function to call when the form validation is successful.
       */
      onSuccess?: SubmitHandler<T>;
      /**
       * The function to call when the form validation fails.
       */
      onError?: SubmitErrorHandler<T>;
    }
  >;
