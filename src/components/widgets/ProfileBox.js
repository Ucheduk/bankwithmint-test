import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

const ProfileBox = ({ avatar, name }) => {
  return (
    <div className="header__profile">
      <span>
        <p className="txt-sm">Hello</p>
        <p>{name}</p>
      </span>
      <Avatar src={avatar} alt={name} />
    </div>
  );
};

ProfileBox.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default ProfileBox;
