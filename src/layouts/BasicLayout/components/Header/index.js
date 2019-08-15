/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React, { Component } from 'react';
import { Balloon, Nav, Switch, Dialog } from '@alifd/next';
import Layout from '@icedesign/layout';
import FoundationSymbol from '@icedesign/foundation-symbol';
import cx from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { headerMenuConfig } from '../../../../menuConfig';

import './index.scss';
import Logo from '../Logo';

@injectIntl
@withRouter
export default class Header extends Component {

  state = {
    visible: false
  }

  handleSetting = () => {
    const {
      profile,
    } = this.props;

    this.props.history.push(`/userCenter/setting/${profile.id}/${profile.account_name}`);
  };

  getLocaleKey = (item) => {
    return `app.header.${item.name}`;
  };

  onChange = (checked) => {
    console.log(`switch to ${checked}`);
    this.setState({
      visible: true
    })
  }

  handleChange = () => {
    this.setState({
      visible: false
    })
    this.props.history.push('/workOrder/mysql')
  }

  onClose = () =>{
    this.setState({
      visible: false
    })
  }

  render() {
    const {
      isMobile,
      className,
      style,
      intl: { formatMessage },
      profile,
    } = this.props;
    let { visible } = this.state
    let bool = false
    return (
      <Layout.Header
        theme="dark"
        className={cx('ice-design-layout-header', className)}
        style={{ ...style }}
      >
        <Logo />
        <div className="ice-design-layout-header-menu">
          {/* Header 菜单项 begin */}
          {headerMenuConfig && headerMenuConfig.length > 0 ? (
            <Nav direction="hoz" type="secondary" selectedKeys={[]}>
              {headerMenuConfig.map((nav, idx) => {
                const linkProps = {};
                if (nav.newWindow) {
                  linkProps.href =`#${nav.path}`;
                } else if (nav.external) {

                  linkProps.href = `#${nav.path}/${profile.id}`;
                } else {
                  linkProps.to = `#${nav.path}`;
                }
                const name = formatMessage({ id: this.getLocaleKey(nav) });
                return (
                  <Nav.Item key={idx}>
                    {linkProps.to ? (
                      <Link {...linkProps}>
                        {nav.icon ? (
                          <FoundationSymbol type={nav.icon} size="small" />
                        ) : null}{' '}
                        {!isMobile ? name : null}
                      </Link>
                    ) : (
                      <a {...linkProps}>
                        {nav.icon ? (
                          <FoundationSymbol type={nav.icon} size="small" />
                        ) : null}{' '}
                        {!isMobile ? name : null}
                      </a>
                    )}
                  </Nav.Item>
                );
              })}
            </Nav>
          ) : null}
          {/* Header 菜单项 end */}

          {/* 多语言选择 */}
          {/* <SelectLang /> */}

          {/* Header 右侧内容块 */}
          <Balloon
            trigger={
              <div className="ice-design-header-userpannel">
                <div className="user-profile">
                  <span className="user-name">
                  </span>
                </div>
                <FoundationSymbol
                  type="angle-down"
                  size="small"
                  className="icon-down"
                />
              </div>
            }
            closable={false}
            className="user-profile-menu"
          >
            <ul>
              <li
                className="user-profile-menu-item"
                onClick={this.handleSetting}
              >
                <FoundationSymbol type="repair" size="small" />
                <FormattedMessage id="app.header.user.setting" />
              </li>
              <li
                className="user-profile-menu-item"
                onClick={this.props.handleLogout}
              >
                <FoundationSymbol type="person" size="small" />
                <FormattedMessage id="app.header.user.logout" />
              </li>
            </ul>
          </Balloon>
          { profile && profile.is_super_admin ? <Switch style={{marginLeft: '20px', width: '78px'}} size="small" checkedChildren="管理员" onChange={this.onChange} unCheckedChildren="普通用户" checked={bool}/> : null }
        </div>
        <Dialog
          title={'切换用户角色'}
          visible={visible}
          onOk={this.handleChange}
          onCancel={this.onClose}
          onClose={this.onClose}
          style={styles.dialog}
        >
          确认切换成<span style={styles.span}>{bool ? '普通用户' : '管理员'}</span> ？
        </Dialog>
      </Layout.Header>
    );
  }
}

const styles = {
  dialog: {
    width: '50%'
  },
  span: {
    color: '#3080FE',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 6
  }
}
