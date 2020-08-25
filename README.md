# App to search for Chuck Norris Facts

`HTTPS (SSL) Link:` [react-chuck-facts.surge.sh](https://react-chuck-facts.surge.sh/)

## Applied Technologies

The project was implemented using ES6.

For secure communication used HTTPS (SSL).

`Used Webpack to automate the list below:`
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

`Animation and effects:`
- Bounce animation when hovering Logo, the animation was made with CSS only.
- Transition effect when hovering the buttons of cycle and plans, the animation was made with CSS only.
- Animation to the loading component that appears while the data request is in progress, the animation was made with CSS only.

`Performance Optimization:`

![Lighthouse score:](https://github.com/tavaresrafa/react-challenge-hostgator/blob/master/src/assets/img/lighthouse-score.png)

I've implemented everything to get the highest score possible based on the feedback of Lighthouse performance tool.
Also, the bundle for production includes minified JS and CSS.

## Technologies
List of main languages and libraries used in this project:
- Styles-Components
- ReactJS
- Jest / React Testing Library
- Storybook
- Context Api
- Webpack
- Babel
- Axios

## Methodology
- Mobile First
- CSS in JS

## How to run

`npm install` (You need to have installed latest version of `NodeJS` to run this)

`npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### How to test

`npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br />

### How to run storybook

`npm run storybook` or `yarn storybook`

Runs the storybook<br>
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## How to build

`npm run build` or `yarn build`

In order to see the build you need to deploy or run in a local server.

To run in a local server run this:

```
yarn global add serve
serve -s build
```
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
