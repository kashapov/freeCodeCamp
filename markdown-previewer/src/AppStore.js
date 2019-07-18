import React from 'react';
import PropTypes from 'prop-types';

export default class AppStore extends React.Component {
  state = {
    editorContent: '',
  };

  actions = {
    changeEditorContent: (newValue) => {
      this.setState({ editorContent: newValue });
    },
  };

  render() {
    const { state, actions } = this;
    return this.props.children({ state, actions });
  }
}

AppStore.propsTypes = {
  children: PropTypes.element.isRequired,
};
