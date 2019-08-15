import React from 'react';
import { injectIntl } from 'react-intl';
import Exception from '../../components/Exception';

const NotFound = ({ intl }) => {
  return (
    <Exception
      statusCode="404"
      image={require("./image/404.png")}
      description={intl.formatMessage({ id: 'app.exception.description.404' })}
      backText={intl.formatMessage({ id: 'app.exception.backtext' })}
    />
  );
};

export default injectIntl(NotFound);
