import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import React, { MouseEvent, Ref, RefAttributes, forwardRef, useState } from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import { FormPasswordElementProps } from ".";
import { FormTextFieldElement } from "../FormTextFieldElement";

type FormPasswordElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormPasswordElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

const FormPasswordElement = forwardRef(function PasswordElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormPasswordElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    iconColor,
    renderIcon = (password : boolean) => (password ? <Visibility /> : <VisibilityOff />),
    ...rest
  } = props;
  const [password, setPassword] = useState<boolean>(true);
  return (
    <FormTextFieldElement
      {...rest}
      ref={ref}
      InputProps={{
        endAdornment: (
          <InputAdornment position={"end"}>
            <IconButton
              onMouseDown={(e: MouseEvent<HTMLButtonElement>) =>
                e.preventDefault()
              }
              onClick={() => setPassword(!password)}
              tabIndex={-1}
              color={iconColor ?? "default"}
            >
              {renderIcon(password)}
            </IconButton>
          </InputAdornment>
        ),
      }}
      type={password ? "password" : "text"}
    />
  );
}) as FormPasswordElementComponent;

export { FormPasswordElement };
