import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const BasicLayoutHoc = (WrappedComponent) => {
  class Container extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {

    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapDispatchToProps = {

  };

  const mapStateToProps = (state) => {

  };

  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  );


  return compose(
    withConnect
  )(Container);
};

export default BasicLayoutHoc;
