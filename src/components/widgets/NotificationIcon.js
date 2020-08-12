import React from 'react';
import PropTypes from 'prop-types';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const NotificationIcon = ({ count }) => {
  return (
    <div className="header__notification">
      <span>{count}</span>
      <NotificationsNoneIcon fontSize="large" />
    </div>
  );
};

NotificationIcon.propTypes = {
  count: PropTypes.number,
};

export default NotificationIcon;
