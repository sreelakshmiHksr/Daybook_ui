import { FC } from "react";
import { useParams } from "react-router-dom";

import './DayBookDetail.scss';

const DayBookDetail: FC = () => {
  const { dayBookId } = useParams<"dayBookId">();

  return <section className="day-book-detail">{dayBookId}</section>;
};

export default DayBookDetail;