import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import { InputAdornment } from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import { FormTextFieldElement } from "../FormTextFieldElement";
import { FormEmailElementProps } from "./FormEmailElement.types";

type FormEmailElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormEmailElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => React.JSX.Element;

/**
 * The `FormEmailElement` component builds off of rhf-kit's `FormTextFieldElement`.
 * This component automatically handles email validation and provides an email icon in the input adornment.
 *
 * ## Advanced Configuration
 * This component accepts all the props that the rhf-kit `FormTextFieldElement` component accepts.
 *
 * TODO: Add example usage link to Storybook docs
 */
const FormEmailElement = forwardRef(function FormEmailElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormEmailElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): React.JSX.Element {
  const {
    iconColor,
    renderIcon = true,
    icon = <AlternateEmailRoundedIcon color={iconColor} />,
    rules = {
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Please enter a valid email address.",
      },
    },
    ...rest
  } = props;
  return (
    <FormTextFieldElement
      {...rest}
      rules={rules}
      ref={ref}
      InputProps={{
        startAdornment: renderIcon && (
          <InputAdornment position={"start"}>{icon}</InputAdornment>
        ),
      }}
      type={"email"}
    />
  );
}) as FormEmailElementComponent;

export { FormEmailElement };
