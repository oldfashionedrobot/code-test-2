## Take Home Code Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This comes with a premade webpack config with all loaders/depencies.

## Scripts

`npm i` or `npm install`: Install the needed dependencies.

`npm start`: Run the app with the dev server at `localhost:3000`, should launch it in the browser for you.

`npm test`: Run the test files, using preconfigured jest that comes with `create react app`

## Components

There are 4 components:

- The `app.js` component is the main wrapper for the small app, and handles loading data from the API endpoints.
- The `dashboard.js` component controls the main dashboard view and the tab navigation functionality.
- The `dashboard-card.js` component is a simple UI component to render the cards with readable information based on the data provided.
- The `group-select.js` component is a small custom select UI element to allow for a `<select>` like interaction that is styled with a custom design.

There are also two utility files, `api-helpers.js` for wrapping some `fetch` requests, and a `url-helpers.js` for wrapping some browser URL query parameter functions.

## Styles

Webpack's `css-loader` allows for using the [CSS module](https://github.com/css-modules/css-modules) pattern. I've used that in each of the components to allow for writing component-scoped CSS.

## Tests

I've written some super basic tests for the components. I'm still learning the `@testing-library` functionality so I probably have written some of the tests in ways that could definilty be improved. I've left off tests for the `app.js` component, as I think I need to read up more on how to properly test React components with asynchronus data loading that changes the DOM.
