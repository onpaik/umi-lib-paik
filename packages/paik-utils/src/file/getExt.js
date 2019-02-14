export const getExt = name =>
  name.substring(name.lastIndexOf('.') + 1, name.length).toLowerCase();

export default getExt;
