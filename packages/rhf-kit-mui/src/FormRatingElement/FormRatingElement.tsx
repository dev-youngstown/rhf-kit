import { Box, Rating, Stack, Typography } from "@mui/material";
import { Ref, RefAttributes, forwardRef, useState } from "react";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormRatingElementProps } from "./FormRatingElement.types";

type FormRatingElementComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = (
  props: FormRatingElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element;

/**
 * The `FormRatingElement` component serves as a wrapper around the MUI `Rating`.
 * This component that serves as a layer of abstraction form any `react-hook-form` form control functions.
 * This component combines many of the examples from the MUI Rating documentation into a single component.
 *
 *
 * ## Advanced Configuration
 * This component accepts all the props that the MUI `Rating` component accepts.
 *
 * The component is implemented using:
 * - [MUI Rating](https://mui.com/material-ui/react-rating/)
 * - [React Hook Form Controller](https://react-hook-form.com/docs/usecontroller)
 *
 * TODO: Add example usage link to Storybook docs
 */
const FormRatingElement = forwardRef(function FormRatingElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormRatingElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const [hover, setHover] = useState<number>(-1);
  const {
    name,
    control,
    label,
    width,
    feedbackLabels,
    ...ratingProps
  } = props;

  const {
    field: { value, onChange, ...field },
  } = useController({
    name,
    control,
  });

  return (
    <Box ref={ref} width={width}>
      {label && <Typography component={"legend"}>{label}</Typography>}
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        width={"fit-content"}
      >
        <Rating
          value={value}
          onChange={(_, newValue) => onChange(newValue)}
          onChangeActive={(_, newHover) => {
            if (!feedbackLabels) {
              return;
            }
            setHover(newHover);
          }}
          {...field}
          {...ratingProps}
        />
        {feedbackLabels && (
          <Typography>
            {feedbackLabels[hover !== -1 ? hover - 1 : value - 1]}
          </Typography>
        )}
      </Stack>
    </Box>
  );
}) as FormRatingElementComponent;

export { FormRatingElement };
