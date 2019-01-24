import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { scaffoldingStandalonePkgViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';


const buildResult =
`yarn run v1.12.3
$ rimraf build && rimraf package && node scripts/build.js
Creating an optimized production build...
Starting type checking and linting service...
Using 1 worker with 2048MB memory limit
Compiled successfully.

File sizes after gzip:

  309.09 KB  build/static/js/1.0f7575be.chunk.js
  23.62 KB   build/static/js/main.fe2c0f8c.chunk.js
  760 B      build/static/js/runtime~main.02d611fa.js
  637 B      build/static/css/main.88b99d3c.chunk.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/CRA-deploy

Done in 18.74s.
`;

const packageResult=
`yarn run v1.12.3
$ node scripts/package.js
TARGET node10-linux-x64
PWD /home/superman90/Workspaces/OpenfinWorkspaces/openfin-react-starter
> pkg@4.3.5
Created package.json in /home/superman90/Workspaces/OpenfinWorkspaces/openfin-react-starter/package/package.json
> Warning Cannot resolve 'appPackageJson'
  /home/superman90/Workspaces/OpenfinWorkspaces/openfin-react-starter/config/paths.js
  Dynamic require may fail at run time, because the requested file
  is unknown at compilation time and not included into executable.
  Use a string literal as an argument for 'require', or leave it
  as is and specify the resolved file name in 'scripts' option.
> pkg@4.3.5
> Warning Cannot resolve 'appPackageJson'
  /home/superman90/Workspaces/OpenfinWorkspaces/openfin-react-starter/config/paths.js
  Dynamic require may fail at run time, because the requested file
  is unknown at compilation time and not included into executable.
  Use a string literal as an argument for 'require', or leave it
  as is and specify the resolved file name in 'scripts' option.
Done in 3.46s.
`;

const builtStructure=
`package
├── build
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── asset-manifest.json
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── img
│   │   └── sidebar-1.jpg
│   ├── index.html
│   ├── manifest.json
│   ├── mstile-144x144.png
│   ├── mstile-150x150.png
│   ├── mstile-310x150.png
│   ├── mstile-310x310.png
│   ├── mstile-70x70.png
│   ├── precache-manifest.417f4e2fabaff53e6257f07a5595c500.js
│   ├── safari-pinned-tab.svg
│   ├── service-worker.js
│   └── static
│       ├── css
│       │   ├── main.88b99d3c.chunk.css
│       │   └── main.88b99d3c.chunk.css.map
│       ├── js
│       │   ├── 1.0f7575be.chunk.js
│       │   ├── 1.0f7575be.chunk.js.map
│       │   ├── main.fe2c0f8c.chunk.js
│       │   ├── main.fe2c0f8c.chunk.js.map
│       │   ├── runtime~main.02d611fa.js
│       │   └── runtime~main.02d611fa.js.map
│       └── media
│           ├── app.0d505f17.svg
│           ├── company.a90c2776.svg
│           ├── controls_dark.f97860da.svg
│           ├── google-search.c851c580.svg
│           ├── information-dark.bf2ebd30.svg
│           ├── list-checked-dark.15ffb2b6.svg
│           ├── number-1.95dedabd.svg
│           └── number-2.f2844c33.svg
├── openfin_starter
├── openfin_starter_server
└── package.json

6 directories, 37 files
`;

const startingOpenfinBin =
`Connected to Hadouken version 9.61.37.46
connecting tot http://localhost:8080
GET /index.html 200 10.467 ms - 2553

GET /static/css/main.88b99d3c.chunk.css 200 1.453 ms - 2966

GET /static/js/main.fe2c0f8c.chunk.js 200 1.953 ms - 109487

GET /static/js/1.0f7575be.chunk.js 200 1.631 ms - 1247217

GET /static/media/app.0d505f17.svg 200 0.772 ms - 3723

GET /static/media/company.a90c2776.svg 200 0.906 ms - 11502

starting openfin success
success
GET /favicon.ico 200 0.360 ms - 15086

GET /favicon-16x16.png 200 0.494 ms - 973

GET /favicon.ico 304 1.913 ms - -

GET /favicon-16x16.png 304 0.945 ms - -

`;

class ScaffoldingStandalonePkgView extends React.Component<IProps,{}>{
    render(){

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography variant='h3' gutterBottom>
                    Standalone binary package
                </Typography>

                <Typography variant='h5' gutterBottom>
                    Build
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Before packaging, the static files should be built in advance, change directory into your project folder.
                </Typography>
                <Code withMargin text="yarn build or npm run build"/>
                <Typography variant='body1' gutterBottom>
                    Once done, you should got the summary of all the files built.
                </Typography>
                <Code language='bash' withMargin text={buildResult}/>





                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    Package
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Once static files built, we could generate packaged binary via
                </Typography>
                <Code withMargin text="yarn package or npm run package"/>
                <Code language='bash' withMargin text={packageResult}/>





                <Typography className={classes.hasMargin}  variant='h5' gutterBottom>
                    Output folder: package
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Make no mistake, a package folder will be created containing the binary depending on the platform you built.
                </Typography>
                <Code language='bash' withMargin text={builtStructure}/>
                <Typography variant='body1' gutterBottom>
                    To execute the binary, just execute openfin_starter at the package folder.
                </Typography>

                <Code withMargin text="./openfin_starter"/>
                <Code language='bash' withMargin text={startingOpenfinBin}/>

            </React.Fragment>
        )
    }
}

export default connect(
    (state:IRootState)=>({

    }),
    dispatch => ({
        actions:{

        }
    })

    )(
    withStyles(style)(ScaffoldingStandalonePkgView)
);

