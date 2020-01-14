## Build Your Own Resume Website

To begin, ensure you have Node.JS and Visual Studio Code installed on your computer. Once you are sure you have this installed, proceed to the following steps:

  1) Clone the ResumeWebsiteTemplate repository onto your computer and navigate into the main directory
  2) Run `npm install` and wait for the installation of the packages to complete, you should see this in the terminal, then you can run `npm start` so you can see a live view of your website in a browser, it should automatically open, but you can find it at localhost:3000.
  3) Open 'App.js' which is where you will make a large majority of your edits for the page, here you will be able to fill out the following DEFAULT values:
      - fullName
      - aboutDescription
      - schoolName
      - schoolDescription
      - workName
      - workDescription
      - projectName
      - projectDescription
      - skillCategory
      - skillItems
    
  4) You will also be able to add (import) your profile image, which should be added under 'src/Components/Image/' as a jpeg file, named 'Profile'.
  5) You will also be able to add (import) social media icons, you can download more social media icons here: https://iconmonstr.com/
    - in order to add a social media icon: first, download the icon from iconmonstr (where you can configure the icon) as a PNG, place it under 'src/SocialMediaIcons/' as a simple name, next import the icon near the top of 'App.js' as I have done with GitHub. Finally, near the bottom of 'App.js' add it as I have with GitHub, changing only the url (href) and the src (src={importName}).

  6) Once you are completed with making changes, you can run `npm run build` which will then build your website as a single page application, and you can then host it on your preffered site (such as Firebase).


The following is the default 'create react app' ReadMe: 

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
