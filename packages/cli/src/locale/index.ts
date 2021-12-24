import { getLocale } from '@feiyan-cli/dev-utils';
import zhCN from './zh-CN';
import enUS from './en-US';

// @ts-ignore
export default getLocale() === 'zh-CN' ? zhCN : enUS;
