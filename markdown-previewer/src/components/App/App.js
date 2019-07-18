import React from 'react';
import PropTypes from 'prop-types';

import Editor from '../Editor';
import Preview from '../Preview';

import './App.css'

export default function App({ state, actions }) {
  return (
    <div className="app">
      <div className="app__layout">
        <Preview {...state} {...actions} />
        <Editor {...state} {...actions} />
      </div>
    </div>
  );
}

App.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
