import * as React from 'react';
import {makeStyles} from "@material-ui/styles";
import cx from "classnames";
import { connect } from 'react-redux';

import { startIntroductionViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { MarkdownElement } from '../../components'

const useStyles = makeStyles(style);

const sampleText = `
Marked - Markdown Parser
========================

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

\`\`\` typescript
// BEGIN_OF_AL_CLI_COMPONENTS
export {default as NewOne } from './sample-app/NewOne/NewOne'
export {default as NewTwo } from './sample-app/NewTwo/NewTwo'
// END_OF_AL_CLI_COMPONENTS
\`\`\`

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/

`

const StartIntroductionView:React.FunctionComponent<{}> = (
    {}
) => {

    const classes = useStyles();

    return(
        <React.Fragment>
            <MarkdownElement text={sampleText}/>
        </React.Fragment>
    );
}

export default StartIntroductionView;