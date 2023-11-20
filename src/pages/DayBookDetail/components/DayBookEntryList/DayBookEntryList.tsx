import { FC } from "react";
import { DayBookEntry } from "../../../../models/day-book.model";

type DayBookEntryListProps = {
  items: DayBookEntry[];
};

const DayBookEntryList: FC<DayBookEntryListProps> = ({ items }) => {
  return <>"Day book entry list"</>;
};

export default DayBookEntryList;
