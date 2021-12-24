const { spawnSync } = require('child_process');
console.log(require('os').homedir(), 'dd');
console.log(spawnSync('npm', ['view', '@feiyan-cli/cli', '--registry']));
