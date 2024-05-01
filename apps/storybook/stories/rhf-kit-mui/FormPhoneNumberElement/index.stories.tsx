import { SubmitButton } from "@/SubmitButton";
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import { Box } from "@mui/material";
import { FormContainer, FormPhoneNumberElement } from "@rhf-kit/mui";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormPhoneNumberElement> = {
    title: "@rhf-kit-mui/Form Phone Number Element",
    component: FormPhoneNumberElement,
    decorators: [FormWrapper],
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

function FormWrapper(Story) {
    return (
        <FormContainer
            defaultValues={{
                phoneNumber: "",
                phoneNumberPreDefined: "1234567890",
            }}
            onSuccess={action("submit")}
        >
            <Box width={"300px"}>
                <Story />
                <SubmitButton />
            </Box>
        </FormContainer>
    );
}

export const Default: Story = {
    args: {
        label: "Phone Number",
        name: "phoneNumber",
        fullWidth: true,
    },
};

export const Required: Story = {
    args: {
        label: "Phone Number",
        name: "phoneNumber",
        fullWidth: true,
        required: true,
    },
};

export const WithoutIcon: Story = {
    args: {
        label: "Phone Number",
        name: "phoneNumber",
        fullWidth: true,
        renderIcon: false,
    },
};

export const CustomIcon: Story = {
    args: {
        label: "Phone Number",
        name: "phoneNumber",
        fullWidth: true,
        icon: <SmartphoneRoundedIcon />,
    },
};

export const PreDefinedValue: Story = {
    args: {
        label: "Phone Number",
        name: "phoneNumberPreDefined",
        fullWidth: true,
        required: true,
    },
}
