import { setLocalData } from '../util/setLocalStorage';
// const zhihuAPI = 'http://news-at.zhihu.com/api/';
// const zhihuAPIVersion = '4';
// const zhihuBaseUrl = zhihuAPI + zhihuAPIVersion + '/news/';

const fetchUrl = (url, errorMessage) =>
  new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    // req.withCredentials = true;
    req.open('GET', url);
    req.onload = () => {
      if (req.status >= 200 && req.status < 300 || req.status === 304) {
        // If successful, resolve the promise by passing back the request response
        resolve(req.response);
      } else {
        // If it fails, reject the promise with a error message
        reject(Error(errorMessage + req.statusText));
      }
    };
    req.onerror = () => {
      reject(Error('Network error'));
    };
    req.send();
  });

const loadNews = (url) => {
  const news =
    fetchUrl(url)
      .then((response) => JSON.parse(response))
      .catch(reject => Error(reject));
  return news;
};

const loadNewsAndSaveDate = (url, name = null) => {
  if (name && localStorage.getItem(name)) {
    console.log('get data from localStorage');
    return localStorage.getItem(name);
  }
  const result =
   loadNews(url)
     .then(response => {
       if (name) {
         setLocalData(name, JSON.stringify(response));
       }
       return response;
     });
  return result;
};

export default fetchUrl;
export { loadNews, loadNewsAndSaveDate };
