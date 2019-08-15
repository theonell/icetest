/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Icon, Field } from '@alifd/next';
import {cloneDeep} from 'lodash';
import { injectIntl, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import CustomForm from '../CustomForm';

@injectIntl
export default class SearchFilter extends Component {
  static displayName = 'SearchFilter';

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initFields: PropTypes.any.isRequired,
    config: PropTypes.array.isRequired,
  };

  static defaultProps = {};

  field = new Field(this);

  state = {
    showAdvancedFields: false,
    value: cloneDeep(this.props.initFields),
  };


  /**
   * 高级搜索
   */
  handleAdvancedSearch = () => {
    const { showAdvancedFields } = this.state;
    this.setState({
      showAdvancedFields: !showAdvancedFields,
    });
  };

  /**
   * 渲染按钮
   */
  renderExtraContent = () => {
    return (
      <div style={styles.extraContent} onClick={this.handleAdvancedSearch}>
        <FormattedMessage id="app.general.form.advanced.search" />{' '}
        <Icon
          size="xs"
          type={this.state.showAdvancedFields ? 'arrow-up' : 'arrow-down'}
        />
      </div>
    );
  };

  /**
   * 获取渲染表单的字段
   */
  getFormFiled = (initConfig) => {
    const { showAdvancedFields } = this.state;
    const { initFields } = this.props;
    if (showAdvancedFields) {
      return {
        config: initConfig,
        fields: Object.assign({}, initFields.base, initFields.advanced),
      };
    }
    const config = initConfig.filter((item) => {
      const keys = Object.keys(initFields.base);
      return keys.includes(item.formBinderProps.name);
    });

    return {
      config,
      fields: initFields.base,
    };
  };

  render() {
    const { handleSubmit, handleReset } = this.props;

    const getFormFiled = this.getFormFiled(this.props.config);
    return (
      <CustomForm
        value={this.state.value}
        config={getFormFiled.config}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        {...this.props}
      />
    );
  }
}

const styles = {
  extraContent: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    color: 'rgba(49, 128, 253, 0.65)',
    cursor: 'pointer',
  },
};
