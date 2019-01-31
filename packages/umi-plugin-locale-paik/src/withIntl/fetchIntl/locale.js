import importPolyfill from '../importPolyfill';

export default function fetchLocaleIntl(...arg){
  const [ locale, page ] = arg;
  try{
    Function('import("")');
    return import(`lang/${locale}/${page}.json`);
  }catch(err){
    return importPolyfill(`lang/${locale}/${page}.json`);
  };
}