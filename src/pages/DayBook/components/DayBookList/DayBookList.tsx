import { FC } from "react";
import { DayBook } from "../../../../models/day-book.model";

import "./DayBookList.scss";

type DayBookListType = {
  items: DayBook[];
};

const DayBookList: FC<DayBookListType> = ({ items = [] }) => {
  return (
    <ul className="day-book-list">
      {items.map((db) => {
        return (
          <li key={db.id} className="day-book-list__item day-book-item">
            {db.title && (
              <span className="day-book-item__title">{db.title}</span>
            )}
            <div className="day-book-item__date">
              <span className="pi pi-calendar app-icon"></span>
              <span>{db.date}</span>
            </div>
            <span className="pi pi-angle-double-right day-book-item__goto-detail app-action-icon"></span>
          </li>
        );
      })}
    </ul>
  );
};

export default DayBookList;
