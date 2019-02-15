// import { withIntl } from 'umi/withIntl';
import React from 'react';
import { getLocale, FormattedMessage } from 'umi/locale';
import { connect } from 'dva';
import msg from '../messages/';
import withIntl from '../utils/withIntl';
import { handleClick } from './actions/';

// console.log(getLocale());

@connect(({ globalModel }) => ({
  globalModel
}),{
  handleClick,
})
@withIntl('RW',{
  withRef: true,
  intlUrl:'demo/intl'
})
class Demo extends React.Component {
  render(){
    const { formatMessage } = this.props.intl;
    return <><span onClick={this.props.handleClick}>
    {formatMessage({
      id: 'ssss-3434',
    })}
    <br/>
    </span></>
  }
}
export default Demo;
