import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import cx from "classnames";
import { connect } from 'react-redux';

import { scaffoldingGenrTplViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

import newCompOneStyleCode from '!raw-loader!./samples/newOneComp.style_ts';
import newCompTwoStyleCode from '!raw-loader!./samples/newTwoComp.style_ts';
import newCompStyleIndexCode from '!raw-loader!./samples/newCompStyleIndex_ts';
import newCompOneCode from '!raw-loader!./samples/newOneComp_tsx';
import newCompTwoCode from '!raw-loader!./samples/newTwoComp_tsx';
import newCompIndexCode from '!raw-loader!./samples/newCompIndex_ts';

import newViewOneStyleCode from '!raw-loader!./samples/newOneView.style_ts';
import newViewTwoStyleCode from '!raw-loader!./samples/newTwoView.style_ts';
import newViewStyleIndexCode from '!raw-loader!./samples/newViewStyleIndex_ts';
import newViewOneCode from '!raw-loader!./samples/newOneView_ts';
import newViewTwoCode from '!raw-loader!./samples/newTwoView_ts';


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
                                            
  v0.30.20
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

const newViewStruct=
`
src/
├── assets
│   └── jss
│       └── sample-app
│           ├── comp
│           │   ├── newOneComp.style.ts
│           │   └── newTwoComp.style.ts
│           ├── index.ts                    // modified
│           └── view
│               ├── newOneView.style.ts     // added
│               └── newTwoView.style.ts     // added
├── components
│   ├── index.ts
│   └── sample-app
│       ├── NewOne
│       │   └── NewOne.tsx
│       └── NewTwo
│           └── NewTwo.tsx
└── views
    ├── NewOne
    │   └── NewOne.tsx                      // added
    └── NewTwo
        └── NewTwo.tsx                      // added

`;

const newLtyStruct=
`
src/
├── assets
│   └── jss
│       └── sample-app
│           ├── comp
│           │   ├── newOneComp.style.ts
│           │   └── newTwoComp.style.ts
│           ├── index.ts                    // modified
│           ├── layout
│           │   ├── newOne.style.ts         // added
│           │   └── newTwo.style.ts         // added
│           └── view
│               ├── newOneView.style.ts
│               └── newTwoView.style.ts
├── components
│   ├── index.ts
│   └── sample-app
│       ├── NewOne
│       │   └── NewOne.tsx
│       └── NewTwo
│           └── NewTwo.tsx
├── layouts
│   ├── NewOne
│   │   └── NewOne.tsx                      // added
│   └── NewTwo
│       └── NewTwo.tsx                      // added
└── views
    ├── NewOne
    │   └── NewOne.tsx
    └── NewTwo
        └── NewTwo.tsx
`;

class ScaffoldingGenrTplView extends React.Component<IProps,{}>{
    render(){
        const { classes } = this.props;
        return (
            <React.Fragment>

                <Typography variant='h3' gutterBottom>
                    Generate templates
                </Typography>


                <Typography variant='h5' gutterBottom>
                    Diff between Layout, View and Component
                </Typography>

                <Typography variant='body1' gutterBottom>
                    The scaffolding tool support to generate three types of templates: Component, View and Layout
                </Typography>

                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell align="right">Connected to Redux</TableCell>
                                <TableCell align="right">Entry components</TableCell>
                                <TableCell align="right">Reusable components</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Component template (comp)
                                </TableCell>
                                <TableCell align="right">No</TableCell>
                                <TableCell align="right">No</TableCell>
                                <TableCell align="right">Yes</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    View template (view)
                                </TableCell>
                                <TableCell align="right">Yes</TableCell>
                                <TableCell align="right">No</TableCell>
                                <TableCell align="right">Yes</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Layout template (lyt)
                                </TableCell>
                                <TableCell align="right">Yes</TableCell>
                                <TableCell align="right">Yes</TableCell>
                                <TableCell align="right">No</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>

                <Typography variant='body1' gutterBottom>
                    All three templates are react component.
                    Generally speaking, both lyt and view connects to redux.
                    But lyt can act as the entry comp and view is the reusable unit inside lyt.
                    View comp's outermost container should be configured to take up all the space.
                    Comps are reusable non-redux-connectted units among view or lyt.
                </Typography>


                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    Generate component template
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

                <Typography variant='body1' gutterBottom>
                    And among the generated components, the isolated style are import via the router index
                </Typography>
                <Typography variant='caption' gutterBottom>
                    src/components/sample-app/NewOne/NewOne.tsx
                </Typography>
                <Code withMargin text={newCompOneCode} />

                <Typography variant='caption' gutterBottom>
                    src/components/sample-app/NewTwo/NewTwo.tsx
                </Typography>
                <Code withMargin text={newCompTwoCode} />

                <Typography variant='body1' gutterBottom>
                    Similarily, the generated components are exported via a comp router index
                </Typography>
                <Typography variant='caption' gutterBottom>
                    src/components/index.ts
                </Typography>
                <Code withMargin text={newCompIndexCode} />

                <Typography variant='body1' gutterBottom>
                    You might notice, we suggest put styles and comps under the folder of the project(sample-app),
                    it is b/c, sometimes, it's much more easy to directly copy&paste some internal comps or styles
                    beneath another meaningfull folder to reuse which is sibling to the project folder.
                    As it might be difficult to ask the author to export via pkg manager and maintain stable versions, or sometimes,
                    even they exported, the requirements on our sides force us to modify to adopt new specific features instead of directly using them.
                    In another word, if there were some not that general interal comps/styles we have to use, we can keep them separated from out codes.
                    And, this tiny structure can act as last life jacket to keep us out of troubles.
                </Typography>





                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    Generate view template
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Similarly, let's create two new view components based on the previous results.
                </Typography>
                <Code withMargin text="al-cli view NewOne"/>
                <Code withMargin text="al-cli view NewTwo"/>
                <Typography variant='body1' gutterBottom>
                    Once done, al-cli will add the files like these
                </Typography>
                <Code language='bash' withMargin text={newViewStruct}/>
                <Typography variant='body1' gutterBottom>
                    Similar we have the isolated style objects for two views
                </Typography>
                <Typography variant='caption' gutterBottom>
                    src/assets/jss/sample-app/view/newOneView.style.ts
                </Typography>
                <Code withMargin text={newViewOneStyleCode} />
                <Typography variant='caption' gutterBottom>
                    src/assets/jss/sample-app/view/newTwoView.style.ts
                </Typography>
                <Code withMargin text={newViewTwoStyleCode} />
                <Typography variant='body1' gutterBottom>
                    and the two styles are also exported via a router index.ts
                </Typography>
                <Typography variant='caption' gutterBottom>
                    src/assets/jss/sample-app/index.ts
                </Typography>
                <Code withMargin text={newViewStyleIndexCode} />
                <Typography variant='body1' gutterBottom>
                    then the styles will be injected into two views created.
                </Typography>
                <Typography variant='caption' gutterBottom>
                    src/views/NewOne/NewOne.tsx
                </Typography>
                <Code withMargin text={newViewOneCode} />

                <Typography variant='caption' gutterBottom>
                    src/views/NewTwo/NewTwo.tsx
                </Typography>
                <Code withMargin text={newViewTwoCode} />





                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    Generate layout template
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Similarly, we could also create two new lyt components based on the previous results.
                </Typography>
                <Code withMargin text="al-cli lyt NewOne"/>
                <Code withMargin text="al-cli lty NewTwo"/>
                <Typography variant='body1' gutterBottom>
                    Make no mistake, once done, al-cli will create all the files in a structure like these.
                </Typography>
                <Code language='bash' withMargin text={newLtyStruct}/>
                <Typography variant='body1' gutterBottom>
                    Lyts and their isolated styles
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

