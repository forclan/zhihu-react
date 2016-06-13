import React, { PropTypes } from 'react';

const containerStyle = {
  display: 'flex',
  borderRadius: '1rem',
  border: '1px solid rgba(35, 40, 32, 0.31)',
  background: 'rgba(208, 233, 233, 0.07)',
  maxWidth: '500px',
  // maxHeight: '150px',
  flexBasis: 'auto',
  // maxHeight: '100px',
  flex: 1,
};

const textAndImgStyle = {
  display: 'flex',
  margin: '1rem',
};

const textStyle = {
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  padding: '1rem',
  fontSize: '1.5rem',
};

const MinView = (props) => {
  const { img, alt, text } = props;
  return (
    <div style={containerStyle} >
      <div style={textAndImgStyle}>
        <div style={textStyle} >
          {text}
        </div>
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};
MinView.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default MinView;
