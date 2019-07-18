import React from 'react';
import PropTypes from 'prop-types';

export default function App({ state, actions }) {
  return <div>App stub</div>;
}

App.propTypes = {
  state: PropTypes.shape({
    editorContent: PropTypes.string.isRequired,
  }),

  actions: {
    changeEditorContent: PropTypes.func.isRequired,
  },
};
