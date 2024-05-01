import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import { InputAdornment } from "@mui/material";
import  { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import { FormTextFieldElement } from "../FormTextFieldElement";
import { FormPhoneNumberElementProps } from ".";
import {IMaskInput} from "react-imask";

interface PhoneTextMaskProps {
    onChange: (event: any[]) => void;
    name: string;
}

const PhoneTextMask =forwardRef<HTMLInputElement, PhoneTextMaskProps>(
    function TextMaskCustom(props, ref): React.JSX.Element {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="(#00) 000-0000"
                definitions={{
                    '#': /[1-9]/,
                }}
                inputRef={ref}
                unmask={true}
                onAccept={onChange}
                overwrite
            />
        );
    },
);


type FormPhoneNumberElementComponent = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
    props: FormPhoneNumberElementProps<TFieldValues, TName> &
        RefAttributes<HTMLDivElement>
) => React.JSX.Element;

/**
 * The `FormPhoneNumberElement` component builds off of rhf-kit's `FormTextFieldElement`.
 * This component automatically handles phone number validation and provides a phone number icon in the input adornment.
 *
 * ## Advanced Configuration
 * This component accepts all the props that the rhf-kit `FormTextFieldElement` component accepts.
 *
 * TODO: Add example usage link to Storybook docs
 */
const FormPhoneNumberElement = forwardRef(function FormPhoneNumberElement<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
    props: FormPhoneNumberElementProps<TFieldValues, TName>,
    ref: Ref<HTMLDivElement>
): React.JSX.Element {
    const {
        iconColor,
        renderIcon = true,
        icon = <PhoneRoundedIcon color={iconColor} />,
        rules,
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
                inputComponent: PhoneTextMask as any,
            }}
        />
    );
}) as FormPhoneNumberElementComponent;

export { FormPhoneNumberElement };
