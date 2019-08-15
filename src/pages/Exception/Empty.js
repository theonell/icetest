import React from 'react';
import { injectIntl } from 'react-intl';
import Exception from '../../components/Exception';

const Empty = ({ intl }) => {
  return (
    <Exception
      statusCode="204"
      image={require("./image/204.png")}
      description={intl.formatMessage({ id: 'app.exception.description.204' })}
      backText={intl.formatMessage({ id: 'app.exception.backtext' })}
    />
  );
};

export default injectIntl(Empty);
