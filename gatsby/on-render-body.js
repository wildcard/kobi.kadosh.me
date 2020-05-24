'use strict';

const React = require('react');
const siteConfig = require('../config.js');

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const katexStylesheet = require('!css-loader!../static/css/katex/katex.min.css');

const onRenderBody = ({setHeadComponents, setPostBodyComponents}) => {
    const {useKatex} = siteConfig;

    if (useKatex) {
        setHeadComponents([
            React.createElement('style', {
                key: 'katex-inline-stylesheet',
                dangerouslySetInnerHTML: {__html: katexStylesheet.toString()},
            }),
        ]);
    }

    setPostBodyComponents([
        React.createElement('script', {
            key: 'comments.app-script',
            src: 'https://comments.app/js/widget.js?2',
            async: true,
            'data-comments-app-website': 'TZJcMQ1J',
            'data-limit': 5,
        }),
    ]);
};

module.exports = onRenderBody;
