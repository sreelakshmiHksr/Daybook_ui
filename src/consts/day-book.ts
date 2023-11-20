import { PAYMENT_MODE } from "../enums/day-book.enum";
import { PaymentMode } from "../models/day-book.model";

export const StorageKeys = {
  DayBooks: "daybooks",
  DayBookEntries: "dayBookEntries"
};

export const PaymentModValues: PaymentMode = {
  [PAYMENT_MODE.UPI]: "UPI",
  [PAYMENT_MODE.EMI]: "EMI",
  [PAYMENT_MODE.ONLINE]: "Online",
};
