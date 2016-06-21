import React, { Component, PropTypes } from 'react';
import { loadNewsAndSaveDate } from '../util/fetchNews';
import style from './NewsDetailStyle';
import Circular from './Circular';


const removeImagTag = (str) => {
  const matchReg = /<img\s[^>]*?src\s*=\s*['"]([^'"]*?)['"][^>]*?>/g;
  const replacement = '';
  return str.replace(matchReg, replacement);
};

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
    };
  }

  componentWillMount() {
    const { url } = this.props;
    this.setState({
      url,
      info: this.state.info,
    });
  }

  componentDidMount() {
    if (localStorage.getItem(this.state.url)) {
      this.setState({
        url: this.state.url,
        info: JSON.parse(localStorage.getItem(this.state.url)).body,
      });
    } else {
      loadNewsAndSaveDate(this.state.url, this.state.url)
        .then(resolve => {
          this.setState({
            url: this.state.url,
            info: resolve.body,
          });
        })
        .catch(reject => Error(reject));
    }
  }

  render() {
    const response = this.state.info || null;
    // const imgSrc = response.image;
    // const css = response.css[0];
    let result = <Circular />;
    if (response) {
      result = (
        <article className="newsItem">
          <div
            className="news-content"
            dangerouslySetInnerHTML={{ __html: removeImagTag(response) }}
          >
          </div>
        </article>
      );
    }
    return result;
  }
}

NewsDetail.propTypes = {
  url: PropTypes.string.isRequired,
};


export default NewsDetail;
