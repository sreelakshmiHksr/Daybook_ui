import { useEffect, useState } from "react";
import { DayBook } from "../../models/day-book.model";

import "./DayBook.scss";
import FirstDayBook from "./components/FirstDayBook/FirstDayBook";
import DayBookModal from "./components/DayBookModal/DayBookModal";
import { getFormattedDate } from "../../common/utils/date";
import DayBookList from "./components/DayBookList/DayBookList";
import { Button } from "primereact/button";
import {
  DayBookExistForSameDate,
  OpeningBalanceInvalid,
} from "../../consts/validation";
import { DayBookService } from "../../services/day-book.service";

const getDayBookTitle = () => {
  return `daybook-${Date.now()}`;
};

const DayBooks = () => {
  const [dayBooks, setDayBooks] = useState<DayBook[]>([]);
  const [showAddDayBook, setShowAddDayBook] = useState<boolean>(false);

  const [openingBalance, setOpeningBalance] = useState<number>(0);
  const [dayBookDate, setDayBookDate] = useState<string>(
    getFormattedDate(new Date())
  );
  const [dayBookTitle, setDayBookTitle] = useState<string>(getDayBookTitle());

  const [dayBookValidationMessage, setDayBookValidationMessage] =
    useState<string>("");

  const showEmptyDayBookContent = dayBooks.length == 0;

  useEffect(() => {
    fetchDayBooks();
  }, []);

  const fetchDayBooks = async () => {
    const dayBookList = await DayBookService.getDayBooks();
    setDayBooks(dayBookList);
  };

  const onDayBookCreate = () => {
    setShowAddDayBook(true);
  };

  const handleDayBookModalClose = () => {
    setShowAddDayBook(false);
    resetFormData();
  };

  const handleOpeningBalanceChange = (value: number) => {
    setOpeningBalance(value);
  };

  const handleDayBookDateChange = (value: string) => {
    setDayBookDate(value);
  };

  const handleTitleChange = (value: string) => {
    setDayBookTitle(value);
  };

  const handleSubmitDayBook = async () => {
    let message = "";

    if (openingBalance <= 0) {
      message = OpeningBalanceInvalid;
    } else if (await DayBookService.isExistingDayBook(dayBookDate)) {
      message = DayBookExistForSameDate;
    }

    const isInvalid = !!message;

    setDayBookValidationMessage(message);

    if (!isInvalid) {
      addNewDayBook();
      setShowAddDayBook(false);
      resetFormData();
    }
  };

  const addNewDayBook = async () => {
    const newDayBook: DayBook = {
      date: dayBookDate,
      id: `${Date.now()}`,
      title: dayBookTitle,
      openingBalance: openingBalance,
      updatedDate: new Date().toISOString(),
    };
    await DayBookService.AddDayBook(newDayBook);

    //TODO: Will be removed when actual service call is implemented
    refreshData();
  };

  const handleAddNewDayBook = () => {
    setShowAddDayBook(true);
  };

  const refreshData = () => {
    fetchDayBooks();
  };

  const resetFormData = () => {
    setDayBookValidationMessage("");
    setOpeningBalance(0);
    setDayBookTitle(getDayBookTitle());
  };

  return (
    <section className="day-books">
      {showEmptyDayBookContent && (
        <FirstDayBook
          onDayBookCreate={onDayBookCreate}
          className="day-books__empty"
        ></FirstDayBook>
      )}
      {!showEmptyDayBookContent && (
        <>
          <div className="day-books__action">
            <Button
              label="Add new daybook"
              type="button"
              onClick={handleAddNewDayBook}
            />
          </div>
          <DayBookList items={dayBooks} />
        </>
      )}
      {showAddDayBook && (
        <DayBookModal
          date={dayBookDate}
          title={dayBookTitle}
          errorMessage={dayBookValidationMessage}
          openingBalance={openingBalance}
          canChangeDate
          onDateChange={handleDayBookDateChange}
          onOpeningBalanceChange={handleOpeningBalanceChange}
          onTitleChange={handleTitleChange}
          onClose={handleDayBookModalClose}
          onSubmit={handleSubmitDayBook}
        />
      )}
    </section>
  );
};

export default DayBooks;
