import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getQuote } from "../actions/index";

import "./Quote.css";

const Error = ({ errorMessage }) => {
  return <span>{errorMessage}</span>;
};

const Spinner = () => {
  return <div className="loader">Loading...</div>;
};

const Button = ({ id, onClick, title, backgroundColor }) => {
  return (
    <button
      id={id}
      className="box__btn btn__new-quote"
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      {title}
    </button>
  );
};

const TwitterShare = ({ quote, author }) => {
  return (
    <React.Fragment>
      <a
        href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`}
        target="_blank"
        title="Post this quote on twitter!"
        id="tweet-quote"
        className="box__btn"
        rel="noopener noreferrer"
        style={{ backgroundColor: "#00ACEE" }}
      >
        <i className="fab fa-twitter twitter-icon" /> Tweet
      </a>
    </React.Fragment>
  );
};

const QuoteBox = ({ quote, author, randomColor, getNewQuote }) => {
  return (
    <React.Fragment>
      <div className="box__quote-text">
        <i className="fa fa-quote-left" style={{ color: randomColor }} />
        <span id="text" style={{ color: randomColor }}>
          {quote}
        </span>
        <i className="fa fa-quote-right" style={{ color: randomColor }} />
      </div>
      <div className="box__quote-author" style={{ color: randomColor }}>
        -<span id="author"> {author}</span>
      </div>
      <div className="box__buttons-block">
        <TwitterShare quote={quote} author={author} />
        <Button
          id="new-quote"
          onClick={getNewQuote}
          title="NEW QUOTE"
          backgroundColor={randomColor}
        />
      </div>
    </React.Fragment>
  );
};

class Quote extends PureComponent {
  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = () => {
    this.props.getQuote();
  };

  render() {
    const {
      isFetching,
      errorMessage,
      randomColors,
      quote: { content, author }
    } = this.props;

    const randomColor = randomColors[Math.floor(Math.random() * 11)];

    const hasData = !(isFetching || errorMessage);

    const error = errorMessage ? <Error errorMessage={errorMessage} /> : null;
    const spinner = isFetching ? <Spinner /> : null;
    const quoteBox = hasData ? (
      <QuoteBox
        quote={content}
        author={author}
        randomColor={randomColor}
        getNewQuote={this.getNewQuote}
      />
    ) : null;

    return (
      <div className="wrapper" style={{ backgroundColor: randomColor }}>
        <div id="quote-box" className="box">
          {error}
          {spinner}
          {quoteBox}
        </div>
      </div>
    );
  }
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  randomColors: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isFetching: state.quotes.isFetching,
  errorMessage: state.quotes.errorMessage,
  randomColors: state.quotes.colors,
  quote: state.quotes.quote
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getQuote
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote);
