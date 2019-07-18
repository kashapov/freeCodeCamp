import React from 'react';
import PropTypes from 'prop-types';

export default class Editor extends React.Component {
  handleChange = (event) => {};

  render() {
    return <textarea id="editor" />;
  }
}

Editor.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeEditorContent: PropTypes.func.isRequired,
};
