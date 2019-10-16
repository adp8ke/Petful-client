## APSPCA

This app helps lonely fur babies find their furever homes. This app utilizes a queue system in which the pets are adoptable first in and first out, and adopters are first come first serve. This app's user is defaulted to "Arpan Patel", as in me. As a user, you can also see a list of pets that already have been adopted. 

### Created By
- Arpan Patel

## Links
- Live App: https://arpan-petful.now.sh
- Live Server: https://calm-basin-50709.herokuapp.com/
- Client Repo: https://github.com/adp8ke/Petful-client
- Server Repo: https://github.com/adp8ke/Petful-server

## API Documentation

`/api/dogs`
  - GET - GET request to recieve an array of available dogs in a queue format
  - DELETE - DELETE request to remove the adopted pet and queue them into the adopted queue

`/api/cats`
  - GET - GET request to recieve an array of available cats in a queue format
  - DELETE - DELETE request to remove the adopted pet and queue them into the adopted queue

`/api/adopted`
  - GET - GET request to recieve an array of adopted pets in a queue format

`/api/users`
  - GET - GET request to recieve an array of users in a queue format
  - PATCH - PATCH request to remove the current user and palce them to the end of the user queue

## Tech Stack:
- HTML
- CSS
- Javascript
- React
- Express
- Node
- Zeit
- Heroku
- Git
- GitHub

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
