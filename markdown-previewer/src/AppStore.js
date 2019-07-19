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

  async componentDidMount() {
    const response = await fetch(
      'https://kashapov.github.io/freeCodeCamp/markdown-previewer/example.md'
    );
    if (this.state.editorContent === '') {
      this.setState({ editorContent: await response.text() });
    }
  }

  render() {
    const { state, actions } = this;
    return this.props.children({ state, actions });
  }
}

AppStore.propsTypes = {
  children: PropTypes.element.isRequired,
};
