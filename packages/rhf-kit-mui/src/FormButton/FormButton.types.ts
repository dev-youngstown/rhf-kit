import { ButtonProps } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";

export type FormButtonProps = PropsWithChildren<
  ButtonProps & {
    /**
     * The type of the button element.
     *
     */
    type?: "submit" | "reset" | "button";
    /**
     * If `true`, the button will display a loading state.
     * @default false
     */
    loading?: boolean;
    /**
     * The loading indicator to display.
     * @default <CircularProgress color="inherit" size={16} />
     */
    loadingIndicator?: ReactNode;
    /**
     * The loading indicator can be positioned on the start, end, or the center of the button.
     * @default "center"
     */
    loadingPosition?: "start" | "end" | "center";
  }
>;
