function randomStr() {
  // eslint-disable-next-line
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

export function generateUUID(length = 32, join = '') {
  const sec = join.length + 4;
  const num = Math.ceil(length / sec);
  return Array.from({ length: num })
    .map(randomStr)
    .join(join)
    .slice(0, length);
}
