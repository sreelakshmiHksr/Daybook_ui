import { PAYMENT_MODE } from "../enums/day-book.enum";

export type DayBook = {
  id: string;
  title: string;
  openingBalance: number;
  date: string;
  updatedDate: string;
};

export type DayBookEntry = {
  id: string;
  dayBookId: string;
  dateTime: string;
  name: string;
  place: string;
  contactNumber: string;
  productName: string;
  productValue: number;
  description: string;
  payments: PaymentEntry[];
};

export type PaymentEntry = {
  paymentId: string;
  dayBookEntryId: string;
  mode: PAYMENT_MODE;
  amount: number;
};

export type PaymentMode = {
    [key in PAYMENT_MODE]: string
}
