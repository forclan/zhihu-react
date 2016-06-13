const fetchUrl = (url, errorMessage) =>
  new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.withCredentials = true;
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
      .then((response) => {
        console.log(response);
        postMessage(JSON.parse(response));
      })
      .catch(reject => Error(reject));
  return news;
};

onmessage = (e) => {
  console.log('receive data' + e);
  loadNews(e.data[0]);
};
