import * as React from 'react';
import cx from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { codeCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import prism from '../../../utils/prism';

interface IProps extends WithStyles<typeof style>{
    language?:string,
    text:string,
    withMargin?:boolean,
}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class CodeComp extends React.Component<IProps, IState>{
    render(){

        const {
            classes, language, text, withMargin,
        } = this.props;

        const hightlightedCode = prism.highlight(text, prism.languages[language?language:'jsx']);

        return(
            <div className={cx(classes.root, { [classes.margin]: withMargin })}>
              <pre>
                <code dangerouslySetInnerHTML={{ __html: hightlightedCode }} />
              </pre>
            </div>
        )
    }
}

export default withStyles(style)(CodeComp);