export const strToDateFomat = str =>
  str.replace(
    /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g,
    `$1/$2/$3 $4:$5:$6`,
  );
export default strToDateFomat;
