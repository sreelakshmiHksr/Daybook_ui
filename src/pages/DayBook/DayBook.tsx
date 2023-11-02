import { useState } from "react";
import { DayBook } from "../../models/day-book";

import "./DayBook.scss";
import FirstDayBook from "./components/FirstDayBook/FirstDayBook";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import DayBookModal from "./components/DayBookModal/DayBookModal";
import { getFormattedDate } from "../../common/utils/date";
import { OpeningBalanceInvalid } from "../../common/consts/validation";
import DayBookList from "./components/DayBookList/DayBookList";
import { Button } from "primereact/button";

const DayBooks = () => {
  const [dayBooks, setDayBooks] = useState<DayBook[]>([]);
  const [showAddDayBook, setShowAddDayBook] = useState<boolean>(false);

  const [openingBalance, setOpeningBalance] = useState<number>(0);
  const [dayBookDate, setDayBookDate] = useState<string>(
    getFormattedDate(new Date())
  );
  const [dayBookTitle, setDayBookTitle] = useState<string>(
    `daybook-${getFormattedDate(new Date())}`
  );
  const [dayBookValidationMessage, setDayBookValidationMessage] =
    useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const showEmptyDayBookContent = dayBooks.length == 0;

  const onDayBookCreate = () => {
    setShowAddDayBook(true);
  };

  const handleDayBookModalClose = () => {
    setShowAddDayBook(false);
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

  const handleSubmitDayBook = () => {
    setHasSubmitted(true);
    const isInvalid = openingBalance <= 0;
    setDayBookValidationMessage(
      openingBalance <= 0 ? OpeningBalanceInvalid : ""
    );

    if (!isInvalid) {
      addNewDayBook();
      setShowAddDayBook(false);
    }
  };

  const addNewDayBook = () => {
    const newDayBook: DayBook = {
      date: dayBookDate,
      id: `${Date.now()}`,
      title: dayBookTitle,
      openingBalance: openingBalance,
      updatedDate: new Date().toISOString(),
    };
    setDayBooks((prev) => [...prev, newDayBook]);
  };

  const handleAddNewDayBook = () => {
    setShowAddDayBook(true);
  };

  return (
    <div className="day-books">
      {showEmptyDayBookContent && (
        <FirstDayBook
          onDayBookCreate={onDayBookCreate}
          className="day-books__empty"
        ></FirstDayBook>
      )}
      {!showEmptyDayBookContent && (
        <div>
          <div>
            <Button
              label="Add new daybook"
              type="button"
              onClick={handleAddNewDayBook}
            />
          </div>
          <DayBookList items={dayBooks} />
        </div>
      )}
      {showAddDayBook && (
        <DayBookModal
          date={dayBookDate}
          title={dayBookTitle}
          errorMessage={dayBookValidationMessage}
          openingBalance={openingBalance}
          onDateChange={handleDayBookDateChange}
          onOpeningBalanceChange={handleOpeningBalanceChange}
          onTitleChange={handleTitleChange}
          onClose={handleDayBookModalClose}
          onSubmit={handleSubmitDayBook}
        />
      )}
    </div>
  );
};

export default DayBooks;
