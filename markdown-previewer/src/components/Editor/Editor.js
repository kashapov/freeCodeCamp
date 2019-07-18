import React from 'react';
import PropTypes from 'prop-types';
import './Editor.css';

export default class Editor extends React.Component {
  handleChange = (event) => {
    const value = event.target.value;
    this.props.changeEditorContent(value);
  };

  render() {
    const { value } = this.props;
    return (
      <section className="editor split">
        <textarea
          className="editor__textarea"
          id="editor"
          value={value}
          onChange={this.handleChange}
        />
      </section>
    );
  }
}

Editor.propTypes = {
  editorContent: PropTypes.string.isRequired,
  changeEditorContent: PropTypes.func.isRequired,
};
