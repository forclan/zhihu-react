import React, { Component, PropTypes } from 'react';
import MinView from './MinView';
import { loadNews } from '../util/fetchNews';
import DateInfo from './DateInfo';

const clickHandler = (e) => {
  console.log(e.target.id);
};

const MinNewsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};

const newsStyle = {
  // maxWidth: '500px',
  // minWidth: '200px',
};

class MinNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: null,
    };
  }

  componentWillMount() {
    const { url } = this.props;
    this.setState({ url, stories: this.state.stories });
  }

  componentDidMount() {
    loadNews(this.state.url)
      .then((resolve) => {
        const stories = resolve.stories;
        this.setState({ stories });
      });
  }

  render() {
    const sto = this.state.stories || null;
    if (sto) {
      // let news = <MinView img={sto[0].images[0]}
      //                     text={sto[0].title}
      //                     alt={'fdf'}
      //             />
      const news = sto.map((val) =>
        <div style={newsStyle} key={val.id.toString()}>
          <MinView
            img={val.images[0]}
            text={val.title}
            id={val.id.toString()}
            key={val.id.toString()}
            width={400}
            height={130}
          />
        </div>
      );
      const display = (
        <div onClick={clickHandler}>
          <div id="date">
            <DateInfo date={new Date()} />
          </div>
          <div style={MinNewsStyle} >
            {news}
          </div>
        </div>
      );
      return (
        display
      );
    }
    return (<div></div>);
  }
}

MinNews.propTypes = {
  url: PropTypes.string,
};

export default MinNews;
