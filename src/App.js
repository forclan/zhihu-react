import React from 'react';
import { render } from 'react-dom';
import MinNews from './components/MinNews';
import NewsDetail from './components/NewsDetail';

render(
  // <MinNews url={"http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/before/20160613"} />
  <NewsDetail url={'http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/8427344'} />
  , document.getElementById('root')
);
