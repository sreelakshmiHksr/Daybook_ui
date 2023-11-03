import { StorageKeys } from "../consts/day-book";
import { DayBook } from "../models/day-book.model";
import { LocalStorageService } from "./localstorage.service";

export class DayBookService {
  public static async AddDayBook(dayBook: DayBook) {
    let existingDayBooks = LocalStorageService.getData<DayBook[]>(
      StorageKeys.DayBooks
    );
    existingDayBooks = existingDayBooks || [];

    const newDayBooks = [dayBook, ...existingDayBooks];
    LocalStorageService.saveData(StorageKeys.DayBooks, newDayBooks);
  }

  public static async getDayBooks(): Promise<DayBook[]> {
    const existingDayBooks = LocalStorageService.getData<DayBook[]>(
      StorageKeys.DayBooks
    );
    return existingDayBooks || [];
  }

  public static async isExistingDayBook(date: string) {
    const existingDayBooks = LocalStorageService.getData<DayBook[]>(
      StorageKeys.DayBooks
    );
    const data = existingDayBooks || [];

    return data.some((d) => d.date === date);
  }
}
