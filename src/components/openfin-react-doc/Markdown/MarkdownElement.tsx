import * as React from 'react';
import cx from 'classnames';
import marked from 'marked';

import {makeStyles} from "@material-ui/styles";

import { markdownElementCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import prism from '../../../utils/prism';

import textToHash from '../../../utils/textToHash';
import {useTranslation} from "react-i18next";

interface IProps {
    text?:string
    className?:string
}

declare const global:any;

marked.Lexer.prototype.lex = function lex(src) {
    src = src
        .replace(/\r\n|\r/g, '\n')
        .replace(/\t/g, '    ')
        .replace(/\u2424/g, '\n');

    return this.token(src, true);
};

const renderer = new marked.Renderer();
renderer.heading = (text, level) => {
    // Small title. No need for an anchor.
    // It's reducing the risk of duplicated id and it's fewer elements in the DOM.
    if (level >= 4) {
        return `<h${level}>${text}</h${level}>`;
    }

    // eslint-disable-next-line no-underscore-dangle
    const escapedText = textToHash(text, global.__MARKED_UNIQUE__);

    return (
        `
    <h${level}>
      <a class="anchor-link" id="${escapedText}"></a>${text}` +
        `<a class="anchor-link-style" aria-label="Anchor" href="#${escapedText}">
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M46.9 13.9c-.5-.6-1.2-.94-2.07-.94h-6.67l1.86-8.98c.17-.85 0-1.7-.52-2.3-.48-.6-1.2-.94-2.07-.94-1.6 0-3.2 1.27-3.54 2.93l-.5 2.42c0 .07-.07.13-.07.2l-1.37 6.62H20.7l1.88-8.96c.16-.85 0-1.7-.53-2.3-.48-.6-1.2-.94-2.07-.94-1.65 0-3.2 1.27-3.56 2.93l-.52 2.58v.08l-1.37 6.64H7.3c-1.67 0-3.22 1.3-3.58 2.96-.16.86 0 1.7.52 2.3.48.6 1.2.93 2.07.93h6.97l-2 9.65H4c-1.67 0-3.22 1.27-3.56 2.94-.2.8 0 1.67.5 2.27.5.6 1.2.93 2.08.93H10l-1.84 9.05c-.2.84 0 1.67.52 2.3.5.6 1.25.92 2.08.92 1.66 0 3.2-1.3 3.55-2.94l1.94-9.33h11.22l-1.87 9.05c-.15.84.03 1.67.53 2.3.5.6 1.2.92 2.07.92 1.65 0 3.22-1.3 3.56-2.94l1.9-9.33h7c1.6 0 3.2-1.28 3.53-2.93.2-.87 0-1.7-.52-2.3-.48-.62-1.2-.96-2.05-.96h-6.7l2.02-9.65h6.93c1.67 0 3.22-1.27 3.56-2.92.2-.85 0-1.7-.5-2.3l-.04.03zM17.53 28.77l1.95-9.65H30.7l-1.97 9.66H17.5h.03z"/></svg>
      </a></h${level}>
  `
    );
};

const externs = [
    'https://material.io/',
    'https://www.styled-components.com/',
    'https://emotion.sh/',
    'https://getbootstrap.com/',
];

renderer.link = (href, title, text) => {
    let more = '';

    if (externs.some(domain => href.indexOf(domain) !== -1)) {
        more = ' target="_blank" rel="noopener nofollow"';
    }

    // eslint-disable-next-line no-underscore-dangle
    const userLanguage = global.__MARKED_USER_LANGUAGE__;
    let finalHref = href;

    if (userLanguage !== 'en' && finalHref.indexOf('/') === 0) {
        finalHref = `/${userLanguage}${finalHref}`;
    }

    return `<a href="${finalHref}"${more}>${text}</a>`;
};

const markedOptions = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight(code, lang) {
        let language;
        switch (lang) {
            case 'ts':
                language = prism.languages.tsx;
                break;

            case 'js':
            case 'sh':
                language = prism.languages.jsx;
                break;

            default:
                language = prism.languages[lang];
                break;
        }

        if (!language) {
            if (lang) {
                throw new Error(`unsuppored language: "${lang}", "${code}"`);
            } else {
                language = prism.languages.jsx;
            }
        }

        return prism.highlight(code, language);
    },
    renderer,
};

const useStyles = makeStyles(style);

const MarkdownElementComp:React.FunctionComponent<IProps> = (
        props
)=>{

    const classes = useStyles();

    const { i18n } = useTranslation('landing', { useSuspense: false });

    const { className, text, ...other } = props;

    // eslint-disable-next-line no-underscore-dangle
    global.__MARKED_USER_LANGUAGE__ = i18n.language;

    /* eslint-disable react/no-danger */
    return (
        <div
            className={cx(classes.root, 'markdown-body', className)}
            dangerouslySetInnerHTML={{ __html: marked(text, markedOptions) }}
            {...other}
        />
    );
}

export default MarkdownElementComp;