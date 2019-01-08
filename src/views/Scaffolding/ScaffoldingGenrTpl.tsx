import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { scaffoldingGenrTplViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

import newCompOneStyleCode from '!raw-loader!./samples/newOneComp.style_ts';
import newCompTwoStyleCode from '!raw-loader!./samples/newTwoComp.style_ts';
import newCompStyleIndexCode from '!raw-loader!./samples/newCompStyleIndex_ts';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

const newCompOneOutput=
`
        _ _               _             _ _ 
   __ _| | |__   ___ _ __| |_       ___| (_)
  / _\` | | '_ \\ / _ \\ '__| __|____ / __| | |
 | (_| | | |_) |  __/ |  | ||_____| (__| | |
  \\__,_|_|_.__/ \\___|_|   \\__|     \\___|_|_|
                                            
  v0.30.4-beta
prompt: new component name?:  (NewOne) 
prompt: new jss style name?:  (newOne) 
prompt: current working space name?:  (sample-app) 
prompt: comp jss directory?:  (./src/assets/jss/sample-app/comp) 
prompt: app jss index file?:  (./src/assets/jss/sample-app/index.ts) 
prompt: new component directory?:  (./src/components/sample-app/NewOne) 
prompt: component index file?:  (./src/components/index.ts) 
`;

const newCompStruct=
`
src/
├── assets
│   └── jss
│       └── sample-app
│           ├── comp
│           │   ├── newOneComp.style.ts
│           │   └── newTwoComp.style.ts
│           └── index.ts
└── components
    ├── index.ts
    └── sample-app
        ├── NewOne
        │   └── NewOne.tsx
        └── NewTwo
            └── NewTwo.tsx

`;

class ScaffoldingGenrTplView extends React.Component<IProps,{}>{
    render(){
        return (
            <React.Fragment>
                <Typography variant='h3' gutterBottom>
                    Generate templates
                </Typography>

                <Typography variant='h5' gutterBottom>
                    Component template
                </Typography>

                <Typography variant='body1' gutterBottom>
                    change directory into your project folder of your working space, like /home/User/Workspaces/sample-app
                </Typography>
                <Typography variant='body1' gutterBottom>
                    then type in
                </Typography>
                <Code withMargin text="al-cli comp NewOne"/>
                <Typography variant='body1' gutterBottom>
                    the client should pop up to confirm all the component name, style name and their paths.
                    Suggest not to change for now, we could press enter all the way down to use default values.
                    After knowing the default values, we could modify if needed.
                </Typography>
                <Code language='vim' withMargin text={newCompOneOutput}/>
                <Typography variant='body1' gutterBottom>
                    To fully explain the structure of the components template, let's create an another component called NewTwo
                </Typography>
                <Code withMargin text="al-cli comp NewTwo"/>
                <Typography variant='body1' gutterBottom>
                    Once done, al-cli will create all the files in a structure like these.
                </Typography>
                <Code language='bash' withMargin text={newCompStruct}/>
                <Typography variant='body1' gutterBottom>
                    styles of NewOne and NewTwo are like
                </Typography>
                <Typography variant='caption' gutterBottom>
                    src/assets/jss/sample-app/comp/newOneComp.style.ts
                </Typography>
                <Code withMargin text={newCompOneStyleCode} />
                <Typography variant='caption' gutterBottom>
                    src/assets/jss/sample-app/comp/newTwoComp.style.ts
                </Typography>
                <Code withMargin text={newCompTwoStyleCode} />
                <Typography variant='body1' gutterBottom>
                    and the two styles are exported via a router index.ts
                </Typography>
                <Typography variant='caption' gutterBottom>
                    src/assets/jss/sample-app/index.ts
                </Typography>
                <Code withMargin text={newCompStyleIndexCode} />






                <Typography variant='h5' gutterBottom>
                    View template
                </Typography>

                <Typography variant='h5' gutterBottom>
                    Layout template
                </Typography>

                <Typography variant='h5' gutterBottom>
                    Diff between Layout, View and Component
                </Typography>


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
    withStyles(style)(ScaffoldingGenrTplView)
);

