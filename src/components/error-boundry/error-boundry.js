import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator/error-indicator';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false,
    error: null
  };

  componentDidCatch(error, errorInfo) {

    this.setState({
      hasError: true,
      // error: errorInfo.componentStack
    });
  }

  render() {

    if (this.state.hasError) {
      return (
        <>
          {/* {this.state.error} */}
          <ErrorIndicator />
        </>
      )
    }

    return this.props.children;
  }
}
