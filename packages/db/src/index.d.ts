declare const db: {
    ls: {
        get(key: any): any;
        set(key: any, value: any): void;
        remove(key: any): void;
        clear(): void;
    };
    ss: {
        get(key: any): any;
        set(key: any, value: any): void;
        remove(key: any): void;
        clear(): void;
    };
};
export default db;
