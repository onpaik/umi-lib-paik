#!/usr/bin/env node
const spawn = require('cross-spawn');
const args = process.argv.slice(2);
const supportedScripts = [
  'start',
];
const script = args[0];
const nodeArgs = []
  .concat(require.resolve('../scripts/' + script))
  .concat(args.slice(1));

if (supportedScripts.includes(script)) {
  const result = spawn.sync('node', nodeArgs, { stdio: 'inherit' });
  if (result.signal) {
    if (result.signal === 'SIGKILL' || result.signal === 'SIGTERM') {
      console.warn('process exit by some reason.');
    }
    process.exit(1);
  }
  process.exit(result.status);
} else {
  console.error(
    `only the following scripts supported: ${supportedScripts.join(',')}.`
  );
}
