This is my Portfolio website, currently hosted on GitHub Pages, can be visited @ https://akverma26.github.io/.

## Development

Frontend is developed using ReactJS using following steps:

* Start with setting up the initial base and standard structure of the app by running the following command

```shell
npx create-react-app <directory>
```

* Clean up the project by removing not required files like `App.test.js`, `reportWebVitals.js` and changing some configurations
  
* Place all static text and data into `src/ProfileData.js` and use data from this file in React Components and Pages.

## Build

* First add `"homepage": "builld/"` key-value in `package.json`, now I just need to place `build/index.html` file to the root directory of this project and this site can be served from root `index.html` (no need to copy all file from `build` directory to root directory to be served from root directory). Simply it's appending `build/` to the path of all the files included in `index.html`. 

* Build the project using following command

```shell
npm run build
```
**and then don't forget to copy `build/index.html` to `index.html`**

## Learnings

### React router works as only client side router

React router urls won't directly means if your root url is `https://somedomain.com` then you can't access `https://somedomain.com/some-page` directly because React router works as client side router not as server side router.

For this simple hack is add "#" before all urls like this `https://somedomain.com/#/some-page`

> ref: https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually