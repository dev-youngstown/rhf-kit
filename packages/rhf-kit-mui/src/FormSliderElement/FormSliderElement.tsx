import { Box, Input, Slider, Stack, Typography } from "@mui/material";
import { Ref, RefAttributes, forwardRef } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormSliderElementProps } from "./FormSliderElement.types";

type FormSliderElementComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = (
  props: FormSliderElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => React.JSX.Element;

/**
 * The `FormSliderElement` component serves as a wrapper around the MUI `Slider`.
 * This component that serves as a layer of abstraction form any `react-hook-form` form control functions.
 * This component combines many of the examples from the MUI Slider documentation into a single component.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `Slider` component accepts.
 *
 * The component is implemented using:
 * - [MUI Slider](https://mui.com/material-ui/react-slider/)
 * - [MUI Input](https://mui.com/material-ui/api/input/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * TODO: Add example usage link to Storybook docs
 */
const FormSliderElement = forwardRef(function FormSliderElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormSliderElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): React.JSX.Element {
  const {
    name,
    control,
    label,
    valueInLabel = false,
    startIcon = undefined,
    endIcon = undefined,
    minDistance = undefined,
    input = false,
    inputProps,
    ...other
  } = props;

  const {
    field: { onChange, value, ...field },
  } = useController({
    name,
    control,
  });

  const handleSliderChange = (
    _: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    // handles the case when the slider does not have a minDistance attribute
    if (!minDistance) {
      onChange(newValue);
      return;
    }

    // handles the case when the slider is not a range slider to ensure the value is an array
    if (!Array.isArray(value)) {
      return;
    }

    // handles the case when the user tries to move the thumb closer than the minDistance between two values
    if (Array.isArray(newValue) && newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        onChange([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        onChange([clamped - minDistance, clamped]);
      }
    } else {
      onChange(newValue as number[]);
    }
  };

  // handle input change from the input element
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === "" ? 0 : Number(event.target.value));
  };

  // handles the case when the user tries to input a value outside the range of the slider
  const handleInputBlur = () => {
    if (value < 0) {
      onChange(0);
    } else if (value > 100) {
      onChange(100);
    }
  };

  return (
    <Box ref={ref}>
      {label && (
        <Typography gutterBottom>
          {`${label}${valueInLabel ? ":" : ""}`} {valueInLabel && value}
        </Typography>
      )}

      <Stack spacing={2} direction={"row"} alignItems={"center"}>
        {startIcon}
        <Slider
          onChange={handleSliderChange}
          value={value}
          {...field}
          {...other}
        />
        {endIcon}
        {input && !Array.isArray(value) && (
          <Input
            sx={{ width: 64 }}
            value={value}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            disabled={field.disabled}
            size="small"
            inputProps={{ type: "number", ...inputProps }}
          />
        )}
      </Stack>
    </Box>
  );
}) as FormSliderElementComponent;

export { FormSliderElement };
