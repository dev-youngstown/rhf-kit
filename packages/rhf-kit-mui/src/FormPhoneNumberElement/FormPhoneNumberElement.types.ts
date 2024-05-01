import { IconProps } from "@mui/material";
import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import { FormTextFieldElementProps } from "../FormTextFieldElement";

export type FormPhoneNumberElementProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<FormTextFieldElementProps<TFieldValues, TName>, "rules"> & {
    /**
     * The color of the icon.
     * @default "default"
     */
    iconColor?: IconProps["color"];
    /**
     * Controls whether the icon is rendered.
     * @default true
     */
    renderIcon?: boolean;
    /**
     * Validation rules for the field.
     *
     *
     */
    rules?: UseControllerProps<TFieldValues, TName>["rules"];
    /**
     * The icon to render in the input adornment.
     *
     * @ default `<PhoneRoundedIcon />`
     */
    icon?: React.ReactNode;
};
