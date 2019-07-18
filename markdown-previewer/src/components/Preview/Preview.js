import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import * as prism from 'prismjs';

import './Preview.css';

const highlight = (code, lang) => {
  const language = prism.languages[lang] || prism.languages['js'];
  return prism.highlight(code, language);
};

marked.setOptions({
  gfm: true,
  tables: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight,
  breaks: true,
});

export default function Preview({ editorContent }) {
  const content = marked(editorContent);
  return (
    <section className="preview split">
      <header className="preview__heading">
        <h3 className="preview__title">Document Preview</h3>
      </header>
      <article className="preview__document">
        <div
          id="preview"
          className="preview__body markdown"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </section>
  );
}

Preview.propTypes = {
  editorContent: PropTypes.string.isRequired,
};
