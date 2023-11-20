import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./DayBookDetail.scss";
import { DayBook, DayBookEntry } from "../../models/day-book.model";
import { DayBookService } from "../../services/day-book.service";
import NoData from "./components/NoData/NoData";
import DayBookEntryList from "./components/DayBookEntryList/DayBookEntryList";
import { AppRoutes } from "../../consts/routes";
import DayBookInfo from "./components/DayBookInfo/DayBookInfo";
import FirstDayBookEntry from "./components/FirstDayBookEntry/FirstDayBookEntry";

async function getDayBook(dayBookId: string) {
  return DayBookService.getDayBook(dayBookId);
}

async function getDayBookEntries(dayBookId: string) {
  return DayBookService.getDayBookEntries(dayBookId);
}

const DayBookDetail: FC = () => {
  const { dayBookId } = useParams<"dayBookId">();

  const navigate = useNavigate();

  const [dayBook, setDayBook] = useState<DayBook | null>(null);

  const [dayBookEntries, setDayBookEntries] = useState<DayBookEntry[]>([]);

  const [showDayBookEntryModal, setShowDayBookEntryModal] =
    useState<boolean>(false);

  const isDayBookEntryListEmpty = dayBookEntries.length == 0;

  useEffect(() => {
    if (!!dayBookId) {
      fetchDayBookDetails(dayBookId);
    }
  }, [dayBookId]);

  useEffect(() => {
    if (!!dayBookId) {
      fetchDayBookEntries(dayBookId);
    }
  }, [dayBookId]);

  const fetchDayBookDetails = async (id: string) => {
    const data = await getDayBook(id);
    setDayBook(data);
  };

  const fetchDayBookEntries = async (id: string) => {
    const data = await getDayBookEntries(id);
    setDayBookEntries(data);
  };

  const handleHome = () => {
    navigate(AppRoutes.Home);
  };

  const handleAddDayBookEntry = () => {
    setShowDayBookEntryModal(true);
  };

  return (
    <section className="day-book-detail">
      {!dayBook ? (
        <NoData className="day-book-detail__no-data" onGoHome={handleHome} />
      ) : (
        <>
          <DayBookInfo dayBook={dayBook} />
          {isDayBookEntryListEmpty && (
            <FirstDayBookEntry
              onCreateEntry={handleAddDayBookEntry}
              className="day-book-detail__welcome"
            />
          )}
          {!isDayBookEntryListEmpty && (
            <DayBookEntryList items={dayBookEntries} />
          )}
        </>
      )}
    </section>
  );
};

export default DayBookDetail;
