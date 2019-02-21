/**
 * 计算timestamp时间间隔
 * @param from 开始时间
 * @param to 结束时间，默认值当前日期的时间戳
 * @param options 设置年、月、日、时、分、秒、负数的显示
 */
export function timeInterval(
  from = 0,
  to = new Date().getTime(),
  options = {
    year: '年',
    month: '月',
    day: '日',
    hour: '时',
    minute: '分',
    second: '秒',
    negative: '之后',
  },
) {
  const yearLevelValue = 365 * 24 * 60 * 60 * 1000;
  const monthLevelValue = 30 * 24 * 60 * 60 * 1000;
  const dayLevelValue = 24 * 60 * 60 * 1000;
  const hourLevelValue = 60 * 60 * 1000;
  const minuteLevelValue = 60 * 1000;
  const secondLevelValue = 1000;

  const getYear = period => parseInt(period, 0) / yearLevelValue;
  const getMonth = period => parseInt(period, 0) / monthLevelValue;
  const getDay = period => parseInt(period, 0) / dayLevelValue;
  const getHour = period => parseInt(period, 0) / hourLevelValue;
  const getMinute = period => parseInt(period, 0) / minuteLevelValue;
  const getSecond = period => parseInt(period, 0) / secondLevelValue;

  const _from = new Date(from).getTime();
  const _to = new Date(to).getTime();
  if (Number.isNaN(_from) || Number.isNaN(_to)) {
    /* eslint-disable-next-line */
    console.error(`accept InValid Date, please check ${arguments}`);
    return false;
  }
  let period = _to - _from;
  const isNegative = String(period).startsWith('-');
  if (isNegative) period = Math.abs(period);
  const year = parseInt(getYear(period), 0);
  const month = parseInt(getMonth(period - year * yearLevelValue), 0);
  const day = parseInt(
    getDay(period - year * yearLevelValue - month * monthLevelValue),
    0,
  );
  const hour = parseInt(
    getHour(
      period -
        year * yearLevelValue -
        month * monthLevelValue -
        day * dayLevelValue,
    ),
    0,
  );
  const minute = parseInt(
    getMinute(
      period -
        year * yearLevelValue -
        month * monthLevelValue -
        day * dayLevelValue -
        hour * hourLevelValue,
    ),
    0,
  );
  const second = parseInt(
    getSecond(
      period -
        year * yearLevelValue -
        month * monthLevelValue -
        day * dayLevelValue -
        hour * hourLevelValue -
        minute * minuteLevelValue,
    ),
    0,
  );
  let result = '';
  if (year !== 0) result = `${result + year}${options.year}`;
  if (month !== 0) result = `${result + month}${options.month}`;
  if (day !== 0) result = `${result + day}${options.day}`;
  result = `${result + hour}${options.hour}${minute}${options.minute}${second}${
    options.second
  } ${isNegative ? options.negative : ''}`;

  return result;
}

export default timeInterval;
