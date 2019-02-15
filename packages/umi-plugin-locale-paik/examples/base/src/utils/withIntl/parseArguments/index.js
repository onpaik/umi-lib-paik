const type = obj =>
  Object.prototype.toString
    .call(obj)
    .replace(/^\[object ([a-zA-Z0-9]+)\]$/, '$1');

export default function parseArguments(arg){
  console.log(arguments);
  const len = arg.length;
  let component = undefined;
  let options = {};
  if(len === 1 && type(arg[0]) === 'String') component = arg[0];
  if(len === 1 && type(arg[0]) === 'Object') options = arg[0];
  if(len === 2){
    component = arg[0];
    options = arg[1];
  }
  return {
    component,
    options,
  }
}