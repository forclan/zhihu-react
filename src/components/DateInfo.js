import React, { PropTypes } from 'react';


const getDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  return '' + year + '-' + month + '-' + day;
};

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
