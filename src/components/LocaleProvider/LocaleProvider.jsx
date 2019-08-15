/* eslint camelcase:0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';


// 引入基础组件的语言包
import enUS from '@alifd/next/lib/locale/en-us';
import zhCN from '@alifd/next/lib/locale/zh-cn';
import { ConfigProvider } from '@alifd/next';

// 引入 react-intl 多语言包
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

// 设置语言包
addLocaleData([...en, ...zh]);

export const localeInfo = {
  'zh-CN': {
    nextLocale: zhCN,
    appLocale: 'zh',
    appMessages: zhCN,
  },
  'en-US': {
    nextLocale: enUS,
    appLocale: 'en',
    appMessages: enUS,
  },
};

export default class LocaleProvider extends PureComponent {
  render() {
    const { locale, children } = this.props;

    return (
      <IntlProvider
        locale={localeInfo[locale].appLocale}
        messages={localeInfo[locale].appMessages}
      >
        <ConfigProvider locale={localeInfo[locale].nextLocale}>
          {React.Children.only(children)}
        </ConfigProvider>
      </IntlProvider>
    );
  }
}

LocaleProvider.propTypes = {
  locale: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
