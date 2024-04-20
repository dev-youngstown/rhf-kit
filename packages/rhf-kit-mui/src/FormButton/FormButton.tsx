import { Button, CircularProgress } from "@mui/material";
import { FormButtonProps } from "./FormButton.types";

/**
 * The `FormButton` component extends the `Button` component from MUI.
 *
 * It provides the `Button` component with the ability to display a loading state.
 *
 * ## Advanced Configuration
 * The `FormButton` component can be configured with the props of the `Button` component.
 *
 * The component is implemented using:
 * - [MUI Button](https://mui.com/material-ui/react-button/)
 * - [MUI CircularProgress](https://mui.com/material-ui/react-progress/)
 *
 * TODO: Add example usage link to Storybook docs
 */
const FormButton = ({
  type,
  loading = false,
  loadingIndicator = <CircularProgress color="inherit" size={16} />,
  loadingPosition = "center",
  children,
  endIcon,
  startIcon,
  size,
  ...other
}: FormButtonProps) => {
  return (
    <Button
      type={type}
      {...other}
      disabled={loading}
      size={size}
      endIcon={
        loadingPosition === "end" && loading ? loadingIndicator : endIcon
      }
      startIcon={
        loadingPosition === "start" && loading ? loadingIndicator : startIcon
      }
    >
      {loadingPosition === "center" && loading ? (
        <span
          style={{
            height: size === "medium" ? "24.5px" : "22.75px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loadingIndicator}
        </span>
      ) : (
        children
      )}
    </Button>
  );
};

export { FormButton };
