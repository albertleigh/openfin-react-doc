import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

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


import newLytOneStyleCode from '!raw-loader!./samples/newOneLyt.style_ts';
import newLytTwoStyleCode from '!raw-loader!./samples/newTwoLyt.style_ts';
import newLytStyleIndexCode from '!raw-loader!./samples/newLytStyleIndex_ts';
import newLytOneCode from '!raw-loader!./samples/newOneLyt_ts';
import newLytTwoCode from '!raw-loader!./samples/newTwoLyt_ts';

interface IProps extends WithStyles<typeof style>, WithNamespaces{


}

import { IRootState } from '../../reduxs';

const newCompOneOutput=
`
        _ _               _             _ _ 
   __ _| | |__   ___ _ __| |_       ___| (_)
  / _\` | | '_ \\ / _ \\ '__| __|____ / __| | |
 | (_| | | |_) |  __/ |  | ||_____| (__| | |
  \\__,_|_|_.__/ \\___|_|   \\__|     \\___|_|_|
                                            
  v0.35.44
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
        const { classes, t } = this.props;
        return (
            <React.Fragment>

                <Typography variant='h3' gutterBottom>
                    {t('genrTpl.title')}
                </Typography>


                <Typography variant='h5' gutterBottom>
                    {t('genrTpl.diff.title')}
                </Typography>

                <Typography variant='body1' gutterBottom>
                    {t('genrTpl.diff.subtitle')}
                </Typography>

                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell align="right">{t('genrTpl.diff.table.col1')}</TableCell>
                                <TableCell align="right">{t('genrTpl.diff.table.col2')}</TableCell>
                                <TableCell align="right">{t('genrTpl.diff.table.col3')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {t('genrTpl.diff.table.row1')}
                                </TableCell>
                                <TableCell align="right">{t('common.no')}</TableCell>
                                <TableCell align="right">{t('common.no')}</TableCell>
                                <TableCell align="right">{t('common.yes')}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {t('genrTpl.diff.table.row2')}
                                </TableCell>
                                <TableCell align="right">{t('common.yes')}</TableCell>
                                <TableCell align="right">{t('common.no')}</TableCell>
                                <TableCell align="right">{t('common.yes')}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {t('genrTpl.diff.table.row3')}
                                </TableCell>
                                <TableCell align="right">{t('common.yes')}</TableCell>
                                <TableCell align="right">{t('common.yes')}</TableCell>
                                <TableCell align="right">{t('common.no')}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>

                <Typography variant='body1' gutterBottom>
                    {t('genrTpl.diff.desc')}
                </Typography>


                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    {t('genrTpl.comp.title')}
                </Typography>


                <Typography variant='body1' gutterBottom>
                    {t('genrTpl.comp.step1')}
                </Typography>
                <Typography variant='body1' gutterBottom>
                    {t('genrTpl.comp.step2')}
                </Typography>
                <Code withMargin text="al-cli comp NewOne"/>
                <Typography variant='body1' gutterBottom>
                    {t('genrTpl.comp.step3')}
                </Typography>
                <Code language='vim' withMargin text={newCompOneOutput}/>
                <Typography variant='body1' gutterBottom>
                    {t('genrTpl.comp.step4')}
                </Typography>
                <Code withMargin text="al-cli comp NewTwo"/>
                <Typography variant='body1' gutterBottom>
                    {t('genrTpl.comp.step5')}
                </Typography>
                <Code language='bash' withMargin text={newCompStruct}/>
                <Typography variant='body1' gutterBottom>
                    {t('genrTpl.comp.step6')}
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
                    {t('genrTpl.comp.step7')}。
                </Typography>
                <Typography variant='caption' gutterBottom>
                    src/assets/jss/sample-app/index.ts
                </Typography>
                <Code withMargin text={newCompStyleIndexCode} />

                <Typography variant='body1' gutterBottom>
                    {t('genrTpl.comp.step8')}
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
                    {t('genrTpl.comp.step9')}
                </Typography>
                <Typography variant='caption' gutterBottom>
                    src/components/index.ts
                </Typography>
                <Code withMargin text={newCompIndexCode} />

                <Typography variant='body1' gutterBottom>
                    {t('genrTpl.comp.step10')}
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
                <Code withMargin text="al-cli lyt NewTwo"/>
                <Typography variant='body1' gutterBottom>
                    Make no mistake, once done, al-cli will create all the files in a structure like these.
                </Typography>
                <Code language='bash' withMargin text={newLtyStruct}/>
                <Typography variant='body1' gutterBottom>
                    Lyts and their isolated styles
                </Typography>
                <Typography variant='caption' gutterBottom>
                    src/assets/jss/sample-app/index.ts
                </Typography>
                <Code withMargin text={newLytOneStyleCode} />
                <Typography variant='caption' gutterBottom>
                    src/assets/jss/sample-app/layout/newTwo.style.ts
                </Typography>
                <Code withMargin text={newLytTwoStyleCode} />
                <Typography variant='caption' gutterBottom>
                    src/assets/jss/sample-app/layout/newTwo.style.ts
                </Typography>
                <Code withMargin text={newLytStyleIndexCode} />

                <Typography variant='caption' gutterBottom>
                    src/views/NewOne/NewOne.tsx
                </Typography>
                <Code withMargin text={newLytOneCode} />
                <Typography variant='caption' gutterBottom>
                    src/views/NewTwo/NewTwo.tsx
                </Typography>
                <Code withMargin text={newLytTwoCode} />




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
    withStyles(style)(
        withNamespaces('scaffolding')(ScaffoldingGenrTplView)
    )
);

