import { FC } from "react";
import { DayBook } from "../../../../models/day-book";

type DayBookListType = {
  items: DayBook[];
};

const DayBookList: FC<DayBookListType> = ({ items = [] }) => {
  return (
    <ul>
      {items.map((db) => {
        return <li key={db.id}>{db.title}</li>;
      })}
    </ul>
  );
};

export default DayBookList;
