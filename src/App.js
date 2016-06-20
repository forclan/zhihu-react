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
  <Router history={browserHistory}>
    /* react-router's default path is "/", which means if your App is servered
       at a subfolder like /React/, the default path should be /React/
    */
    <Router path="/" component={App}>
      <IndexRoute component={Index} />
      <Router path="news/:id" component={News} />
    </Router>
  </Router>
  , document.getElementById('root')
);
