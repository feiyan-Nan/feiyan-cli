import chalk from 'chalk';
import { print, getNpmPackageInfo } from '@feiyan-cli/dev-utils';
const FEIYAN_CLi_PACKAGE_NAME = '@feiyan-cli/cli';
export function printLogo() {
  const { version } = require('../package.json');
  // const globalInfo = getGlobalInfo();
  // const envInfo = globalInfo?.env === 'private' ? '内部版 ' : '      ';
  print(
    chalk.hex('#165dff').bold(
      `
      ███████╗ ███████╗ ██╗ ██╗   ██╗  █████╗  ███╗   ██╗
      ██╔════╝ ██╔════╝ ██║ ╚██╗ ██╔╝ ██╔══██╗ ████╗  ██║
      █████╗   █████╗   ██║  ╚████╔╝  ███████║ ██╔██╗ ██║
      ██╔══╝   ██╔══╝   ██║   ╚██╔╝   ██╔══██║ ██║╚██╗██║
      ██║      ███████╗ ██║    ██║    ██║  ██║ ██║ ╚████║
      ╚═╝      ╚══════╝ ╚═╝    ╚═╝    ╚═╝  ╚═╝ ╚═╝  ╚═══╝

                                                   v${version}
    `
    )
  );
}

export async function fetchLatestVersion() {
  try {
    const info = getNpmPackageInfo(FEIYAN_CLi_PACKAGE_NAME);
    const { latest: lastVersion } = info['dist-tags'];
    console.log(lastVersion, 'HHH');
    return lastVersion;
  } catch (e) {}

  return null;
}
