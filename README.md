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

## Future improvemnts

- Due to next.js, this app can follow combination of CSR and SSR
- Writing unit tests
- Typescript integration for typings
- Redux can be used for state management
- plop.js can be used for fast and consistent component creation
- storybook can be integrated for better showcasing component
