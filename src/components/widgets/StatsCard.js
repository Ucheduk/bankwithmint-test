import React from 'react';
import PropTypes from 'prop-types';

const StatsCard = ({
  className, text, value, stats,
}) => {
  return (
    <div className={className}>
      <div className="stat-value">
        <p>{text}</p>
        <h3>{value}</h3>
      </div>
      <div className="stat-chart"></div>
    </div>
  );
};

StatsCard.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  stats: PropTypes.array,
};

export default StatsCard;
