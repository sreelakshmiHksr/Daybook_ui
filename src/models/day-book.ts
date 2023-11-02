import { PAYMENT_MODE } from "../enums/day-book";

export type DayBook  = {
    id: string;
    title: string;
    openingBalance: number;
    date: string;
    updatedDate: string;
}


export type DayBookEntry = {
    id: string;
    dayBookId: string;
    name: string;
    place: string;
    contactNumber: string;
    productName: string;
    productValue: number;
    description: string;
    payments: PaymentEntry[];
}


export type PaymentEntry = {
    mode: PAYMENT_MODE;
    amount: number;
}