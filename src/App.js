import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import MinNews from './components/MinNews';
import NewsDetail from './components/NewsDetail';
import { Router, IndexRoute, browserHistory } from 'react-router';
import { getDate } from './util/DateToString';

const ZHIHU_URL = 'http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/';
const ZHIHU_NEWS = ZHIHU_URL + 'before/';
const App = (props) => (
  <div>
    <h1>Daily</h1>
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

const Index = () =>
  (<MinNews
    url={ZHIHU_NEWS + getDate(new Date())}
    date={new Date()}
  />);


render(
  // <MinNews url={"http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/before/20160613"} />
  // <NewsDetail url={'http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/8427344'} />
  <Router history={browserHistory}>
    <Router path="/" component={App}>
      <IndexRoute component={Index} />
      <Router path="news/:id" component={News} />
    </Router>
  </Router>
  , document.getElementById('root')
);
