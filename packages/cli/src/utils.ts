import chalk from 'chalk';
import { print } from '@feiyan-cli/dev-utils';

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
