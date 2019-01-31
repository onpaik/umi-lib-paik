// import { withIntl } from 'umi/withIntl';
import React from 'react';
import { getLocale, FormattedMessage } from 'umi/locale';
import msg from '../messages/';
import withIntl from '../utils/withIntl';

// console.log(getLocale());

@withIntl('RW',{
  withRef: true,
  intlUrl:'demo/intl'
})
class Demo extends React.Component {
  render(){
    const { formatMessage } = this.props.intl;
    return <><span>
    {formatMessage({
      id: 'ssss-3434',
    })}
    <br/>
    {formatMessage({
      id: 'sssssssss',
    })}
    </span></>
  }
}
export default Demo;
