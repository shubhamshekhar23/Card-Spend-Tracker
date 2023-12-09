## Feature of Manually adding transaction

### UI Feature details

- A button called `Add Transaction` has been added in the bottom right in the transaction history screen
- After clicking the button, it opens a form as a modal
  - Name and details are simple inputs for the transaction info
  - Date and time are pre-filled as current date and time for users convenience
  - Amount as input and Type of transaction as credit or debit as radio buttons are provided
  - All Fields are kept required; If any is empty, user wont be able to save
  - Date and time fields are used as native html element
  - Save and cancel buttons are provided
- After saving the form, `Loader is shown` and Transaction history will be updated with the newly added transaction.
- The `UI is responsive` and supported for `mobile devices` as well (all screen sizes > 320px;)

### Code and architecture features Improvement

- `features or modular approach` has been used newly for the architecture for the scalablity and maintainability
  - features folder has been added and components have been reorganised
  - e.g transaction, card, debtCatalogue etc.
- `Context api` has been used for the app level state
  - Multiple contexts have been created based on data they save
  - code quality and usage of context api has been improved
  - e.g cards, transaction, global etc.
- Now, Pages folder will only contain one container component and will make use of components in features and shared
- `interfaces folder` have been added for ts interfaces e.g card, transaction etc.
- Mocking api have been improved with some delay to replicate the real life scenario
  - Loader has been added when the data is being loaded in the ui
  - mockdata is improved as well.
- `Jest support` for unit testing has been added
- One Unit test has been added for componnet `src/components/ui/text-button/text-button.tsx`
- Initial Test files have been added for all the components
- Plop has been updated for the support of test files
- Now running `npx plop c my-component` will create test file as well
- husky pre-commit is updated to support running of tests before commiting the changes

### Further features and improvements

- To save the state Instead of context api, `React-redux state management` librarry should be used
- Suppport for choosing the card in the saving of manual transaction can be added
- Creating form related shared components and possibly using ui library for react like `Material ui` or `react bootstrap`.
- Writing unit, integration and e2e tests for components and saving transaction flow
- Settling the debt in the debt catalogue via pay can be added similar to the current new feature
- Analytics related to the expenditure can be added for 4th screen, Currently the details are mocked.
