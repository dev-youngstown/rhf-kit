<div align="center">

# ![@rhf-kit/mui](https://github.com/dev-youngstown/rhf-kit/blob/fa900a23713467d40ddaf92008e7a0c7a2f61bd3/.github/banner.png)

[![NPM Version](https://flat.badgen.net/npm/v/@rhf-kit/mui)](https://www.npmjs.com/package/@rhf-kit/mui)
[![NPM Downloads](https://flat.badgen.net/npm/dm/@rhf-kit/mui)](https://www.npmjs.com/package/@rhf-kit/mui)
[![NPM Dependents](https://flat.badgen.net/npm/dependents/@rhf-kit/mui)](https://www.npmjs.com/package/@rhf-kit/mui)
[![Build](https://img.shields.io/github/actions/workflow/status/dev-youngstown/rhf-kit/npm-publish.yml?branch=main&style=flat-square)](https://github.com/dev-youngstown/rhf-kit/actions)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Types](https://flat.badgen.net/npm/types/@rhf-kit/mui)](https://www.npmjs.com/package/@rhf-kit/mui)

× **[DOCS](https://dev-youngstown.github.io/rhf-kit)** ×

</div>

---

`@rhf-kit/mui` is a library of [Material-UI](https://material-ui.com/) components integrated with [React Hook Form](https://react-hook-form.com/) to provide seamless form control to your React apps.

## Install

```shell
npm i @rhf-kit/mui
```

`@rhf-kit/mui` requires the following peer dependencies:

- `react` ^18.2.0
- `react-hook-form` ^7.51.3
- `@mui/icons-material` ^5.15.15
- `@mui/material` ^5.15.15
- `@mui/x-date-pickers` ^7.2.0

## Components

- Form Containers

  - [FormContainer](https://dev-youngstown.github.io/rhf-kit/?path=/docs/rhf-kit-mui-form-container--docs) - A container for form elements that utilizes [React Hook Form Context](https://react-hook-form.com/api#useFormContext) to manage form state.

- Form Buttons

  - [FormButton](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-button--docs) - A button element that can be used to submit a form.

- Inputs

  - [FormAutoCompleteElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-auto-complete-element--docs) - serves as a form wrapper around the [MUI Autocomplete](https://mui.com/material-ui/react-autocomplete/) component.
  - [FormCheckboxElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-checkbox-element--docs) - serves as a form wrapper around the [MUI Checkbox](https://mui.com/material-ui/react-checkbox/) component.
  - [FormCheckboxGroup](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-checkbox-group--docs) - serves as a form wrapper around multiple [MUI Checkbox](https://mui.com/material-ui/react-checkbox/) components.
  - [FormPasswordElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-password-element--docs) - automatically handles password functionality by adding a toggle button to show/hide the password.
  - [FormRadioElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-radio--docs) - serves as a form wrapper around the [MUI Radio](https://mui.com/material-ui/api/radio/) component.
  - [FormRadioGroup](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-radio-group--docs) - serves as a form group wrapper around the [MUI RadioGroup](https://mui.com/material-ui/react-radio-button/) component.
  - [FormRatingElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-rating-element--docs) - serves as a wrapper around the [MUI Rating](https://mui.com/material-ui/react-rating/) component.
  - [FormSelectElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-select-element--docs) - serves as a form wrapper around the [MUI Select](https://mui.com/material-ui/react-select/) component.
  - [FormSliderElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-slider-element--docs) - serves as a wrapper around the [MUI Slider](https://mui.com/material-ui/react-slider/) component.
  - [FormSwitchElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-switch-element--docs) - serves as a form wrapper around the [MUI Switch](https://mui.com/material-ui/react-switch/) component.
  - [FormTextFieldElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-text-field-element--docs) - serves as a form wrapper around the [MUI TextField](https://mui.com/material-ui/react-text-field/) component.

- Date and Time Pickers

  - [FormDatePickerElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-date-picker-element--docs) - serves as a form wrapper around the [MUI DatePicker](https://mui.com/x/react-date-pickers/date-picker/) component.
  - [FormDateTimePickerElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-date-time-picker-element--docs) - serves as a form wrapper around the [MUI DateTimePicker](https://mui.com/x/react-date-pickers/date-time-picker/) component
  - [FormTimePickerElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-form-time-picker-element--docs) - serves as a form wrapper around the [MUI TimePicker](https://mui.com/x/react-date-pickers/time-picker/) component.

- Mobile Inputs

  - [MobileFormSelectElement](https://dev-youngstown.github.io/rhf-kit/?path=/docs/react-hook-form-kit-material-ui-mobile-form-select-element--docs) - serves as a form wrapper around the [MUI NativeSelect](https://mui.com/material-ui/api/native-select/) component.

## Usage

```tsx
import { FormContainer, FormButton, FormTextFieldElement } from "@rhf-kit/mui";

interface IFormData {
  firstName: string;
}

const Example = () => {
  const onSubmit = (data: IFormData) => console.log(data);
  const defaultValues: IFormData = {
    firstName: "",
  };

  return (
    <FormContainer defaultValue={defaultValues} onSubmit={onSubmit}>
      <FormTextFieldElement name="firstName" label="First Name" />
      <FormButton>Submit</FormButton>
    </FormContainer>
  );
};
```
