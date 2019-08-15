import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

export default class Logo extends PureComponent {
  render() {
    const {collapse} = this.props;
    return (
      <div className="logo">
        <Link to="/" className="logo-text">
          {collapse ? <img
            src={require('./images/logo.png')}
            alt="arkcontrol"
          /> : <div className="logo-text logo-img"><img src={require('./images/logo.png')} alt="arkcontrol"  />数据库云管平台</div>}
        </Link>
      </div>
    );
  }
}
