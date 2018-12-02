import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./common/Header";
import HomePage from "./home/HomePage.js";
import AboutPage from "./about/AboutPage.js";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}
export default hot(module)(connect(mapStateToProps)(App));
