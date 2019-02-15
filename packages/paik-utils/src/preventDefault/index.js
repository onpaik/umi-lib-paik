export const preventDefault = e => {
  const _e = e || window.event;
  _e.preventDefault ? _e.preventDefault() : (_e.returnValue = false);
  _e.stopPropagation ? _e.stopPropagation() : (_e.cancelBubble = true);
};

export default preventDefault;
