import React from 'react';
import { injectIntl } from 'react-intl';
import Exception from '../../components/Exception';

const Forbidden = ({ intl }) => {
  return (
    <Exception
      statusCode="403"
      image={require("./image/403.png")}
      description={intl.formatMessage({ id: 'app.exception.description.403' })}
      backText={intl.formatMessage({ id: 'app.exception.backtext' })}
    />
  );
};

export default injectIntl(Forbidden);
