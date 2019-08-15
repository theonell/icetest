/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Input, Checkbox, Grid, Form, Field } from '@alifd/next';
import { injectIntl, FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import { compose } from 'redux';

const Icon = FoundationSymbol;
const { Row } = Grid;
const FormItem = Form.Item;

@injectIntl
class UserLogin extends Component {
  static displayName = 'UserLogin';
  field = new Field(this);

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        account_name: '',
        account_password: '',
        checkbox: false,
      },
    };
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.field.validate((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
    })
  };

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    const { init, getError } = this.field;
    return (
      <div className="user-login">
        <div className="formContainer">
          <Form value={this.state.value} onChange={this.formChange} onSubmit={this.handleSubmit}>
            <FormItem required className="formItem">
              <Input
                innerBefore={
                  <Icon type="person" size="small" className="inputIcon" />
                }
                name="account_name"
                maxLength={20}
                placeholder={'app.user.login.username.placeholder'}
                {
                  ...init('account_name',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'app.user.login.username.required'
                        }
                      ]

                    },
                  )
                }
              />
              <span style={styles.formError}>{getError('account_name')}</span>
            </FormItem>
            <FormItem required requiredMessage="必填" className="formItem">
              <Input
                innerBefore={
                  <Icon type="lock" size="small" className="inputIcon" />
                }
                name="account_password"
                htmlType="password"
                placeholder={'app.user.login.password.placeholder'}
                {
                  ...init('account_password',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'app.user.login.password.required'
                        }
                      ]

                    },
                  )
                }
              />
              <span style={styles.formError}>{getError('account_password')}</span>
            </FormItem>
            <FormItem>
              <Checkbox name="checkbox" className="checkbox">
                记住账号
              </Checkbox>
            </FormItem>
            <Row className="formItem">
              <Form.Submit
                htmlType="submit"
                validate
                className="submitBtn"
              >
                登 录
              </Form.Submit>
            </Row>

            <Row className="tips">
              <Link to="/user/register" className="tips-text">
                立即注册
              </Link>
            </Row>
          </Form>
        </div>
      </div>
    );
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


export default compose(
  withConnect
)(UserLogin);

const styles = {
  formError: {
    display: 'inline-block',
    marginTop: '10px',
    color: 'red',
  },
};
