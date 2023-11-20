import { FC } from "react";
import { DayBook } from "../../../../models/day-book.model";

import "./DayBookInfo.scss";

type DayBookInfoProps = {
  dayBook: DayBook;
  className?: string;
};

const DayBookInfo: FC<DayBookInfoProps> = ({ dayBook, className = "" }) => {
  return (
    <section className={`day-book-info ${className}`}>
      <h3>Date: {dayBook.date}</h3>
      <h6>Title: {dayBook.title}</h6>
      <p>Opening balance: {dayBook.openingBalance}</p>
    </section>
  );
};

export default DayBookInfo;
