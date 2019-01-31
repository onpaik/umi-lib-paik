// import { withIntl } from 'umi/withIntl';
import React from 'react';
import { getLocale, FormattedMessage } from 'umi/locale';
import withIntl from '../../utils/withIntl';

// console.log(getLocale());

@withIntl('RW')
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
