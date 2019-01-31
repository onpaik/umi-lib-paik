import importPolyfill from '../importPolyfill';

export default function fetchLocaleIntl(arg){
  const [ locale, page ] = arg;
  const url = `lang/${locale}/${page}.json`;
  try{
    Function('import("")');
    return import(url);
  }catch(err){
    return importPolyfill(url);
  };
}