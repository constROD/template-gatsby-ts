/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const windowGlobal: any = typeof window !== 'undefined' && window;

class LocalStorageUtil {
  static set(key: string, value: any): void {
    if (windowGlobal.localStorage) {
      windowGlobal.localStorage[key] = value;
    }
  }

  static get(key: string): string {
    if (windowGlobal.localStorage) {
      if (!windowGlobal.localStorage[key]) return '';
      return windowGlobal.localStorage[key] as string;
    }
    return '';
  }

  static getAll(): { [key: string]: unknown } {
    if (windowGlobal.localStorage) {
      return windowGlobal.localStorage as { [key: string]: unknown };
    }

    return {};
  }

  static clear(): void {
    if (windowGlobal.localStorage) {
      windowGlobal.localStorage.clear();
    }
  }
}

export default LocalStorageUtil;
