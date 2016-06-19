import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import MinNews from './components/MinNews';
import NewsDetail from './components/NewsDetail';
import { Router, Route, Link, IndexRoute, hasHistory } from 'react-router';

const App = (props) => (
  <div>
    <h1>App</h1>
    <ul>
      <li><Link to="/news/8427344">news</Link></li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.object,
};

const News = (props) => {
  const url = 'http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/';
  return (
    <NewsDetail
      url={url + props.params.id}
    />
  );
};

const Index = () =>
  (<MinNews url={"http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/latest"} />);

render(
  // <MinNews url={"http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/before/20160613"} />
  // <NewsDetail url={'http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/8427344'} />
  <Router history={hasHistory}>
    <Router path="/" component={App}>
      <IndexRoute component={Index} />
      <Router path="news/:id" component={News} />
    </Router>
  </Router>
  , document.getElementById('root')
);
