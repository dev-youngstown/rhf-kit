import { Button } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function ResetButton() {
  const { reset } = useFormContext();
  return (
    <Button
      onClick={() => {
        reset({});
      }}
    >
      Reset
    </Button>
  );
}
