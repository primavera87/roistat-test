import safeLocalStorage from 'safe-localstorage';

export default class LocalStorage {
  static setValue(key: string, value: any) {
    safeLocalStorage.set(key, JSON.stringify(value), () => {return});
  }

  static getValue(key: string) {
    const messages = safeLocalStorage.get(key);
    return JSON.parse(messages);
  }
}
