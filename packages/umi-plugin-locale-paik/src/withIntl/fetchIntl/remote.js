import 'whatwg-fetch';

const apiUrl = (host,intlUrl) => {
  return `${host.replace(/\/+$/,'')}/${intlUrl.replace(/^\/+/,'').replace(/\/+$/,'')}`
}

export default function fetchRemoteIntl(host, intlUrl, requestOptions){
  const url = apiUrl(host,intlUrl);
  const request = new Request(apiUrl(host,intlUrl),requestOptions);
  return window.fetch(request);
}