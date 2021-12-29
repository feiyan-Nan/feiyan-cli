import fs from 'fs-extra';
import { spawnSync } from 'child_process';

export default (packageName = '') => {
  if (!packageName) {
    try {
      // hack, It doesn't work in some users' environments without parameter packageName
      packageName = fs.readJsonSync('./package.json').name;
    } catch (error) {
      return { error };
    }
  }
  // const hostNPM = getGlobalInfo().host.npm;
  const hostNPM = 'https://registry.npmjs.org/';
  const isWin32 = process.platform === 'win32';
  const npmCommander = isWin32 ? 'npm.cmd' : 'npm';
  const { stdout } = spawnSync(npmCommander, [
    'view',
    packageName,
    '--registry',
    hostNPM,
    '--json',
  ]);

  let info;
  try {
    info = JSON.parse(stdout.toString());
  } catch (error) {
    return { error };
  }
  return info;
};
