import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const linkStyle = {
  textDecoration: 'none',
  color: 'rgb(32, 18, 36)',
};

const proxyServerUrl = `http://zhihu.bood.in/readapi?`;

let containerStyle = {
  margin: '0px',
  display: 'flex',
  borderRadius: '1rem',
  border: '1px solid rgba(35, 40, 32, 0.31)',
  background: 'rgba(208, 233, 233, 0.07)',
  flexWrap: 'wrap',
  flexDirection: 'row',
  maxWidth: '500px',
  // minWidth: '200px',
  // maxHeight: '150px',
  flexBasis: 'auto',
  // maxHeight: '100px',
  flex: 1,
};

const wrapStyle = {
  width: '100%',
  height: '100%',
};

const textAndImgStyle = {
  // width: '100%',
  // height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  // flex: '1',
  // margin: '1rem',
};

const textStyle = {
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  flex: '2',
  padding: '1rem',
  fontSize: '1.3rem',
};

const wrapImageStyle = {
  flex: 1,
};
const imageStyle = {
  width: '100px',
  height: '100px',
};


const MinView = (props) => {
  const { img, id, text, width, height } = props;
  containerStyle.width = width;
  containerStyle.height = height;
  const linkTo = `/news/${id}`;
  return (
    <Link to={linkTo} style={linkStyle}>
      <div style={containerStyle} id={id}>
        <div style={wrapStyle} id={id}>
          <div style={textAndImgStyle} id={id}>
            <div style={textStyle} id={id}>
              {text}
            </div>
            <div style={wrapImageStyle} id={id}>
              <img src={img} alt={id} style={imageStyle} id={id} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

MinView.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default MinView;
