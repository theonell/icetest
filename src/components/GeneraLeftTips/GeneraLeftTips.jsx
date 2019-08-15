/**
 * 提示组件
 * 用来展示提示信息
 */

import React, { Component } from 'react';
import { Balloon, Icon } from '@alifd/next';
import './index.scss'
const Tooltip = Balloon.Tooltip;

export default class GeneraLeftTips extends Component {
  static displayName = 'GeneraLeftTips';

  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, tips } = this.props;
    return (
      <span className={'tips'}>
        {title}
        <Tooltip trigger={
          <Icon
            type="help"
            size="small"
            style={{ marginLeft: 4, marginBottom: 4 }}
          />} align="t"> {tips}</Tooltip>
      </span>
    )
  }

}
