/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Grid, Form, Field } from '@alifd/next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl, FormattedMessage } from 'react-intl';
import FoundationSymbol from '@icedesign/foundation-symbol';

const Icon = FoundationSymbol;
const { Row } = Grid;
const FormItem = Form.Item;

@withRouter
@injectIntl
class UserRegister extends Component {
  static displayName = 'UserRegister';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        account_name: '',
        account_password: '',
      },
    };
  }

  checkPasswd = (rule, values, callback) => {
    const {
      intl: { formatMessage },
    } = this.props;
    if (!values) {
      callback('app.user.register.username.required');
    }  else {
      callback();
    }
  };

  checkPasswd2 = (rule, values, callback, stateValues) => {
    const {
      intl: { formatMessage },
    } = this.props;
    if (!values) {
      callback('app.user.register.password.required');
    } else if (values && values !== stateValues.account_password) {
      callback('app.user.register.repassword.message');
    } else {
      callback();
    }
  };

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (values, errors) => {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    delete values.rePasswd;
    this.props.userRegister(values);
  };

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    return (
      <div className="user-register">
        <div className="formContainer">
          <Form value={this.state.value} onChange={this.formChange}>
            <FormItem
              required
              requiredMessage={'app.user.register.username.required'}
              className="formItem"
            >
              <Input
                innerBefore={
                  <Icon type="person" size="small" className="inputIcon" />
                }
                name="account_name"
                maxLength={20}
                placeholder={'app.user.register.username.placeholder'}
              />
            </FormItem>
            <FormItem
              required
              requiredMessage={'app.user.register.password.required'}
              className="formItem"
            >
              <Input
                innerBefore={
                  <Icon
                    type="key"
                    size="small"
                    todo="lock"
                    className="inputIcon"
                  />
                }
                name="account_password"
                htmlType="password"
                placeholder={'app.user.register.password.placeholder'}
              />
            </FormItem>

            <FormItem
              required
              validator={(rule, values, callback) =>
                this.checkPasswd2(rule, values, callback, this.state.value)
              }
              className="formItem"
            >
              <Input
                innerBefore={
                  <Icon
                    type="lock"
                    size="small"
                    todo="lock"
                    className="inputIcon"
                  />
                }
                name="rePasswd"
                htmlType="password"
                placeholder={'app.user.register.repassword.placeholder'}
              />
            </FormItem>
            <Row className="formItem">
              <Form.Submit
                type="primary"
                validate
                onClick={this.handleSubmit}
                className="submitBtn"
              >
                {'app.user.register'}
              </Form.Submit>
            </Row>

            <Row className="tips">
              <Link to="/user/login" className="tips-text">
                {'app.user.register.useExistedName'}
              </Link>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state) => {
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);


export default compose(
  withConnect
)(UserRegister);
