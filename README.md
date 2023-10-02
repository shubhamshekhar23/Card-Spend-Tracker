## How to run this app

- First do "npm install"
- Then run the command "npm run dev"
- Then go to http://localhost:3000 and use mobile view
- Make sure you are using node version > 18 (if you are unable to run this app)

## About Application

- This application has been named as card-spend-tracker and is based on react.js and next.js
- It is based on the design https://tinyurl.com/58jbavat
- It has a responsive design and is suitable for all screen sizes (width > 320px and height > 660px)
- It uses javascript, sass modules and prop-types for the type checking
- It uses mockdata (card.mockdata.js) and is returned from api service and is consumed by components
- File and folder naming is followed as kebab-case
- common.scss stores the variables that are used by other css files
- Routing is taken care by next.js and thus making use of pages folder
- Menu screen has been left empty (as absent in design)
- For user image, it makes use of a random image fetch

## Code and architecture features

- It follows a scalable folder structure and has small reusable components
- Every function and files are kept small(files less than 200 lines of code)
- Every component is a folder which include component file and module.scss
- Testing files if added in future can be added in respective component folder

## Special features

- Integrated with typescript
- alias imports are updated in tsconfig.json
- next-env.d.ts is updated for fixing import error for .scss files and other lib
- plop used for creating components - plopfile.js, plop-templates folder

```
npx plop component my-component
```

- .prettierignore file is added to exclude auto formating for .hbs plop template file
- eslint fix has been made to run when file is saved, its configured in settings.json in .vscode
- settings.json updated with autoformat true which uses prettier
- extensions.json is added for vscode for the recommended extension
- A sample precommit hook has been added for a message that says to integrate tests
- eslint-plugin-simple-import-sort has been added to sort-imports and add a line break; It has been configured in .eslintrs.json

## Future improvemnts

- Due to next.js, this app can follow combination of CSR and SSR
- Writing unit tests
- Typescript integration for typings
- Redux can be used for state management
- plop.js can be used for fast and consistent component creation
- storybook can be integrated for better showcasing component
