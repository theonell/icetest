import React from 'react';
import { injectIntl } from 'react-intl';
import Exception from '../../components/Exception';

const ServerError = ({ intl }) => {
  return (
    <Exception
      statusCode="500"
      image={require("./image/500.png")}
      description={intl.formatMessage({ id: 'app.exception.description.500' })}
      backText={intl.formatMessage({ id: 'app.exception.backtext' })}
    />
  );
};

export default injectIntl(ServerError);
