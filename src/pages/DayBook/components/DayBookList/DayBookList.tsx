import { FC } from "react";
import { DayBook } from "../../../../models/day-book.model";

type DayBookListType = {
  items: DayBook[];
};

const DayBookList: FC<DayBookListType> = ({ items = [] }) => {
  return (
    <ul>
      {items.map((db) => {
        return <li key={db.id}>{db.date}</li>;
      })}
    </ul>
  );
};

export default DayBookList;
