export class LocalStorageService {
  public static saveData<TData>(key: string, data: TData): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }

  public static getData<TData>(key: string): TData | null {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error getting data from localStorage", error);
      return null;
    }
  }
}
