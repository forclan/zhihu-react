import React, { PropTypes } from 'react';
import { getDate } from '../util/DateToString';

const dateStyle = {
  padding: '1rem',
};

const DateInfo = (props) => {
  const { date } = props;
  return (
    <div style={dateStyle}>
      {getDate(date)}
    </div>
  );
};

DateInfo.propTypes = {
  date: PropTypes.object.isRequired,
};

export default DateInfo;
