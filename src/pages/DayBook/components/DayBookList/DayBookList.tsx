import { FC } from "react";
import { DayBook } from "../../../../models/day-book.model";

import "./DayBookList.scss";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../consts/routes";

type DayBookListType = {
  items: DayBook[];
};

const DayBookList: FC<DayBookListType> = ({ items = [] }) => {

  const navigate  = useNavigate();


  const handleDetailClick = (dayBookId: string) => {
    return () => {
      navigate(`${AppRoutes.DayBooks}/${dayBookId}`);
    };
  };

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
            <span className="pi pi-angle-double-right day-book-item__goto-detail app-action-icon" onClick={handleDetailClick(db.id)}></span>
          </li>
        );
      })}
    </ul>
  );
};

export default DayBookList;
