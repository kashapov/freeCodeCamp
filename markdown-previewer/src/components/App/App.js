import React from 'react';
import PropTypes from 'prop-types';

import Editor from '../Editor';

export default function App({ state, actions }) {
  return (
    <div>
      <Editor value={state.editorContent} {...actions} />
    </div>
  );
}

App.propTypes = {
  state: PropTypes.shape({
    editorContent: PropTypes.string.isRequired,
  }),

  actions: {
    changeEditorContent: PropTypes.func.isRequired,
  },
};
