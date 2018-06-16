import React from 'react';
import PropTypes from 'prop-types';

import SecondaryButton from '../Common/Button/SecondaryButton';
import i18n from '../../locales/i18n.js';

const SupportButton = ({ active, isUserLoggedIn, onRegisterSupporter }) => {
  return isUserLoggedIn ? (
    <SecondaryButton
      onClick={() => onRegisterSupporter()}
      disable={active ? 'active' : 'inactive'}
    >
      {i18n.t('label.support')}
      {/* <span className="support-button-caption">{caption}</span> */}
    </SecondaryButton>
  ) : (
    <SecondaryButton onClick={() => onRegisterSupporter()} disable={true}>
      {i18n.t('label.support')}
      {/* <span className="support-button-caption">{caption}</span> */}
    </SecondaryButton>
  );
};

SupportButton.propTypes = {
  active: PropTypes.bool.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
  onRegisterSupporter: PropTypes.func
};
export default SupportButton;
