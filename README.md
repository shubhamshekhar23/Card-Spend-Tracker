## How to run this app

- First do `npm install`
- Then run the command `npm run dev`
- Then go to http://localhost:3000 and use mobile view
- Make sure you are using node version > 18 (if you are unable to run this app)

## Features

- In the home screen, Two credit cards are shown
- Dashboard has 4 tabs; Card list, Debt catalogue, Transaction history and Expense-overview
- After clicking on a card, User can see the Card details and the trensaction history of that particularcard
- A smooth rotating animation has been provided for the navigation
- Footer fixed nav has the buttons to navigate to different tabs
- Debt catalogue has listing of the debts of user with categories
- Transaction history has teh listing of all the transaction including manual added data
- Add transaction button is present at bottom right, Clicking of which shows a form to save the transaction
- After saving, newly added data is shown afterwards in the transation history listing

## About Application

- This application has been named as card-spend-tracker and is based on react.js and next.js
- It is based on the design https://tinyurl.com/58jbavat
- It has a responsive design and is suitable for all screen sizes (width > 320px and height > 660px)
- It uses typescript and sass modules
- It uses mockdata present in `src/data/mockdata` and is returned from api service and is consumed by components
- File and folder naming is followed as kebab-case
- common.scss stores the variables that are used by other css files
- Routing is taken care by next.js and thus making use of pages folder
- Expense-Overview screen is just using a mock texts for expenditure
- For user image, it makes use of a random image fetch

## Code and architecture features

- It follows a scalable folder structure (`modular apporach`) and has small reusable components
- Every function and files are kept small(files less than 200 lines of code)
- Every component is a folder which include component file, module.scss and test file
- It juses Jest for testing

## Special features

- alias imports are updated in tsconfig.json
- next-env.d.ts is updated for fixing import error for .scss files and other lib
- plop used for creating components - plopfile.js, plop-templates folder

```
npx plop component my-component
```

- .prettierignore file is added to exclude auto formating for .hbs plop template file
- .prettierrc.js is added for config for prettier
- eslint fix has been made to run when file is saved, its configured in settings.json in .vscode
- settings.json updated with autoformat true which uses prettier
- extensions.json is added for vscode for the recommended extension
- eslint-plugin-simple-import-sort has been added to sort-imports and add a line break; It has been configured in .eslintrs.json
- A sample precommit hook has been added usingh `husky and lint-staged` to run lint before commit.
- A `pre-push git hook` also has been added for running unit tests, it just echos tests for now.

## Future improvemnts

- Due to next.js, this app can follow combination of CSR and SSR
- Writing unit tests
- Redux can be used for state management
- storybook can be integrated for better showcasing component
