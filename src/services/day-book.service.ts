import { StorageKeys } from "../consts/day-book";
import { DayBook, DayBookEntry } from "../models/day-book.model";
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

  public static async getDayBook(dayBookId: string): Promise<DayBook | null> {
    const existingDayBooks = LocalStorageService.getData<DayBook[]>(
      StorageKeys.DayBooks
    );

    const result = existingDayBooks?.find((d) => d.id == dayBookId);
    return result || null;
  }

  public static async getDayBookEntries(
    dayBookId: string
  ): Promise<DayBookEntry[]> {
    const existingDayBookEntries = LocalStorageService.getData<DayBookEntry[]>(
      StorageKeys.DayBookEntries
    );

    const result = existingDayBookEntries?.filter(
      (d) => d.dayBookId == dayBookId
    );
    return result || [];
  }
}
