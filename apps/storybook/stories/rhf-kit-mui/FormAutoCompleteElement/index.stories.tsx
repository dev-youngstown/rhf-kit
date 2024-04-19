import { SubmitButton } from "@/SubmitButton";
import { Box } from "@mui/material";
import { FormAutoCompleteElement, FormContainer } from "@rhf-kit/mui";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Auto Complete",
  component: FormAutoCompleteElement,
  decorators: [FormWrapper],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormAutoCompleteElement>;

export default meta;

type Story = StoryObj<typeof meta>;

function FormWrapper(Story) {
  return (
    <FormContainer
      defaultValues={{
        "default-text-field": "Test Data",
        "default-email-field": "john@example.com",
        "number-text-field": 6,
        "default-first-name-field": "John",
        "default-last-name-field": "Doe",
      }}
      onSuccess={action("submit")}
    >
      <Box width={"600px"}>
        <Story />
        <br />
        <SubmitButton />
      </Box>
    </FormContainer>
  );
}

const options = [
  { label: "The Shawshank Redemption", id: 1 },
  { label: "The Godfather", id: 2 },
  { label: "The Godfather: Part II", id: 3 },
  { label: "The Dark Knight", id: 4 },
  { label: "12 Angry Men", id: 5 },
  { label: "Schindler's List", id: 6 },
  { label: "Pulp Fiction", id: 7 },
  {
    label: "The Lord of the Rings: The Return of the King",
    id: 2003,
  },
  { label: "The Good, the Bad and the Ugly", id: 8 },
  { label: "Fight Club", id: 9 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    id: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    id: 1980,
  },
  { label: "Forrest Gump", id: 10 },
  { label: "Inception", id: 11 },
  {
    label: "The Lord of the Rings: The Two Towers",
    id: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", id: 12 },
  { label: "Goodfellas", id: 13 },
  { label: "The Matrix", id: 14 },
  { label: "Seven Samurai", id: 15 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    id: 1977,
  },
  { label: "City of God", id: 16 },
  { label: "Se7en", id: 17 },
  { label: "The Silence of the Lambs", id: 18 },
  { label: "It's a Wonderful Life", id: 19 },
  { label: "Life Is Beautiful", id: 20 },
  { label: "The Usual Suspects", id: 21 },
  { label: "Léon: The Professional", id: 22 },
  { label: "Spirited Away", id: 23 },
  { label: "Saving Private Ryan", id: 24 },
  { label: "Once Upon a Time in the West", id: 25 },
  { label: "American History X", id: 26 },
  { label: "Interstellar", id: 27 },
  { label: "Casablanca", id: 28 },
  { label: "City Lights", id: 29 },
  { label: "Psycho", id: 30 },
  { label: "The Green Mile", id: 31 },
  { label: "The Intouchables", id: 32 },
  { label: "Modern Times", id: 33 },
  { label: "Raiders of the Lost Ark", id: 34 },
  { label: "Rear Window", id: 35 },
  { label: "The Pianist", id: 36 },
  { label: "The Departed", id: 37 },
  { label: "Terminator 2: Judgment Day", id: 38 },
  { label: "Back to the Future", id: 39 },
  { label: "Whiplash", id: 40 },
  { label: "Gladiator", id: 41 },
  { label: "Memento", id: 42 },
  { label: "The Prestige", id: 43 },
  { label: "The Lion King", id: 44 },
  { label: "Apocalypse Now", id: 45 },
  { label: "Alien", id: 46 },
  { label: "Sunset Boulevard", id: 47 },
];

const indexedOptions = options.map((option) => {
  const firstLetter = option.label[0].toUpperCase();
  return {
    firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
    ...option,
  };
});

export const Default: Story = {
  args: {
    label: "Popular Movies",
    name: "core",
    options: indexedOptions,
  },
};

export const MatchId: Story = {
  args: {
    label: "Popular Movies",
    name: "core",
    options: indexedOptions,
    matchId: true,
  },
};

export const HelperText: Story = {
  args: {
    label: "Popular Movies",
    name: "core",
    options: indexedOptions,
    textFieldProps: {
      helperText: "Select a movie",
    },
  },
};

export const HelperTextRequired: Story = {
  args: {
    label: "Popular Movies",
    name: "core",
    options: indexedOptions,
    required: true,
    textFieldProps: {
      helperText: "Select a movie",
    },
  },
};

export const Grouped: Story = {
  args: {
    label: "Popular Movies",
    name: "grouped",
    options: indexedOptions.sort(
      (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
    ),
    autocompleteProps: {
      groupBy: (option) => option.firstLetter,
    },
  },
};

export const MultipleValues: Story = {
  args: {
    label: "Popular Movies",
    name: "multiple",
    options: indexedOptions,
    multiple: true,
    autocompleteProps: {
      getOptionLabel: (option) => option.label,
    },
  },
};

export const MultipleValuesRequired: Story = {
  args: {
    label: "Popular Movies",
    name: "multiple",
    options: indexedOptions,
    multiple: true,
    required: true,
    autocompleteProps: {
      getOptionLabel: (option) => option.label,
    },
  },
};

export const CheckBoxes: Story = {
  args: {
    label: "Popular Movies",
    name: "multiple",
    options: indexedOptions,
    showCheckbox: true,
    multiple: true,
    autocompleteProps: {
      getOptionLabel: (option) => option.label,
    },
  },
};

export const LoadingState: Story = {
  args: {
    label: "Popular Movies",
    name: "loading",
    options: [],
    loading: true,
  },
};
