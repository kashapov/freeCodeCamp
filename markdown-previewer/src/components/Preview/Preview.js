import React from 'react';
import PropTypes from 'prop-types';

export default function Preview(props) {
  return <section id="preview">{props.markdown}</section>;
}

Preview.propTypes = {
  markdown: PropTypes.string.isRequired,
};
