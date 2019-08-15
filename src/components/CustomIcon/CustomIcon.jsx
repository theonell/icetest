import React, { Component } from 'react'
import PropTypes from 'prop-types';
import DynamicIcon from '@icedesign/dynamic-icon';

const Icon = DynamicIcon.create({
  fontFamily: 'ark_control',
  prefix: 'icon',//at.alicdn.com/t/font_1229400_yvyz6xi7hm8.css
  css: 'https://at.alicdn.com/t/font_1229400_oqlolmbvmeb.css'
});

export default class CustomIcon extends Component {
  static displayName = 'CustomIcon'
  static propTypes = {
    type: PropTypes.string.isRequired
  };

  static defaultProps = {};

  render() {

    return (
      <Icon {...this.props} />
    )
  }
}
