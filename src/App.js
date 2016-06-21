import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';
import MinNews from './components/MinNews';
import NewsDetail from './components/NewsDetail';
import { Router, IndexRoute, browserHistory } from 'react-router';
import { getDate } from './util/DateToString';

const ZHIHU_URL = 'http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/';
const ZHIHU_NEWS = `${ZHIHU_URL}before/`;

const App = (props) => (
  <div>
    <h1 className="lighten-4">Daily</h1>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.object,
};

const News = (props) => {
  const url = ZHIHU_URL;
  return (
    <NewsDetail
      url={url + props.params.id}
    />
  );
};

News.propTypes = {
  params: PropTypes.array,
};


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      dateArr: [new Date()],
    };
    this.viewMoreHandler = this.viewMoreHandler.bind(this);
  }
  viewMoreHandler() {
    // clone the origin array
    const arr = this.state.dateArr.slice(0);
    // 复制一个Date对象，先将其转换为string，再由string转换为Object对象，再使用new Date新建一个Date对象
    const preDate = new Date(JSON.parse(JSON.stringify(arr[arr.length - 1])));
    preDate.setDate(preDate.getDate() - 1);
    arr.push(preDate);
    this.setState({
      currentDate: new Date(),
      dateArr: arr,
    });
  }
  render() {
    const dateNews = this.state.dateArr.map(date =>
      <div className="one-day-min-news" key={date}>
        <MinNews
          url={ZHIHU_NEWS + getDate(date)}
          date={date}
        />
        <hr></hr>
      </div>
    );
    return (
      <div>
        <div>
          {dateNews}
        </div>
        <nav>
          <div className="nav-wrapper blue lighten-1">
            <a
              className="brand-logo center"
              href="##"
              onClick={this.viewMoreHandler}
            >
              viewMore
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

// const Index = () =>
//   (<MinNews
//     url={ZHIHU_NEWS + getDate(new Date())}
//     date={new Date()}
//   />);


render(
  <Router history={browserHistory}>
    {/* react-router's default path is "/", which means if your App is servered
       at a subfolder like /React/, the default path should be /React/
    */}
    <Router path="/" component={App}>
      <IndexRoute component={Index} />
      <Router path="news/:id" component={News} />
    </Router>
  </Router>
  , document.getElementById('root')
);
