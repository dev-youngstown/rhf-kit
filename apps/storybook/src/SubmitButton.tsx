import { Button, Stack } from "@mui/material";
import ResetButton from "./ResetButton";

export const SubmitButton = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} my={2}>
      <ResetButton />
      <Button type={"submit"} color={"primary"}>
        Submit
      </Button>
    </Stack>
  );
};
