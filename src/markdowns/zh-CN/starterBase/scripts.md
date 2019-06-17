Scripts to Start/Serve/Package - react-openfin-scripts
------------------------------------------------------
_Configuration and scripts for Openfin React App._

Now, we have cleared all initialization, importing reusable components and populating constants, it is time to start
what we have so far.

> If encounter some problems to setup, donn't worry, please check [openfin-js-cli] in next section, it will help you 
> generated a sample project to start with. Or just checkout 
> [openfin-react-concise](https://github.com/openfin-js-app/openfin-react-concise) directly if it is easier.

Thanks to [react-openfin-scripts], which is similar to [react-scripts], it is much easier to start build serve and even
package openfin app. 

Please check the sample [package.json](https://github.com/openfin-js-app/openfin-react-concise/blob/master/package.json),
which contains the tasks like start webpack dev served front-end: `start` or start the openfin app along with webpack dev
served front-end: `start-openfin` 

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start-openfin` or `yarn start-openfin`

Runs the app in development mode.<br>
Meanwhile also start a openfin connection to loaded development codes.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

### `npm serve` or `yarn serve`

Servers the app from built folder.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

If the index.html were not found in the app build folder, 
an exception will be thrown and the whole process then exits with 1

### `npm serve-openfin` or `yarn serve-openfin`

Servers the app from built folder.<br>
Meanwhile also start a openfin connection to loaded built codes.

If the index.html were not found in the app build folder, 
an exception will be thrown and the whole process then exits with 1

### `npm package` or `yarn package`

Package the app into binary and put to package folder.<br>

### `REACT_APP_ENV` the profile environment variable

Instead of using `NODE_ENV`, react-openfin-scripts will use `REACT_APP_ENV` to load dot env profiles.

Moreover, even if `REACT_APP_ENV` is undefined, react-openfin-scripts will directly use production profile by default. 

### Start or Serve Openfin JS App

So, after replacing [react-scripts] with [react-openfin-scripts] and setup correctly, `react-openfin-scripts start.openfin`
should start a openfin app js app correctly.

If, having troubles setting up everything, do not worry, check [openfin-js-cli] section or 
[openfin-react-concise](https://github.com/openfin-js-app/openfin-react-concise) repository. Both could help.


[openfin-js-cli]: https://www.npmjs.com/package/openfin-js-cli   
[react-scripts]: https://www.npmjs.com/package/react-scripts
[react-openfin-scripts]: https://www.npmjs.com/package/react-openfin-scripts