import * as React from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/styles';

import { codeCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import prism from '../../../utils/prism';

const useStyles = makeStyles(style);

interface IProps {
    language?:string,
    text:string,
    withMargin?:boolean,
}

const CodeComp:React.FunctionComponent<IProps> = (
    {
        language, text, withMargin,
    }
)=>{
    const classes = useStyles();

    const hightlightedCode = prism.highlight(text, prism.languages[language?language:'jsx']);

    return(
        <div className={cx(classes.root, { [classes.margin]: withMargin })}>
              <pre>
                <code dangerouslySetInnerHTML={{ __html: hightlightedCode }} />
              </pre>
        </div>
    )
}

export default CodeComp;