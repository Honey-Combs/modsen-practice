export const localStorageManager = {
  setItem: <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: <T>(key: string, defaultValue?: T): T => {
    const value = localStorage.getItem(key);
    return (value ? JSON.parse(value) : defaultValue) as T;
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};
