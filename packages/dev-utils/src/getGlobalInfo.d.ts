export interface CliGlobalInfo {
    'x-arco-token'?: string;
    userInfo?: {
        accountType: 'github' | 'sso';
        username: string;
        name: string;
        email: string;
        avatarUrl: string;
    };
    host?: {
        npm: string;
        unpkg: string;
        arco: string;
    };
    env?: 'private' | 'public';
    locale?: 'zh-CN' | 'en-US' | 'system';
}
export default function getGlobalInfo(): CliGlobalInfo;
