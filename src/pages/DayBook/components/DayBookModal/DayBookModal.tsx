import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";

import { Calendar } from "primereact/calendar";

import { FC, SyntheticEvent } from "react";

import {
  getDateFromString,
  getFormattedDate,
} from "../../../../common/utils/date";
import { FormEvent } from "primereact/ts-helpers";

import { Button } from "primereact/button";

import "./DayBookModal.scss";

type DayBookModalType = {
  openingBalance: number;
  date: string;
  title?: string;
  canChangeDate?: boolean;
  isReadOnly?: boolean;
  errorMessage?: string;
  onDateChange?: (date: string) => void;
  onOpeningBalanceChange?: (value: number) => void;
  onTitleChange?: (value: string) => void;
  onClose?: () => void;
  onSubmit?: () => void;
};

const DayBookModal: FC<DayBookModalType> = ({
  openingBalance,
  date,
  title,
  canChangeDate = false,
  isReadOnly,
  errorMessage,
  onOpeningBalanceChange,
  onDateChange,
  onTitleChange,
  onClose,
  onSubmit,
}) => {
  const handleDateChange = (
    e: FormEvent<Date, SyntheticEvent<Element, Event>>
  ) => {
    if (e.value) {
      onDateChange?.(getFormattedDate(e.value));
    }
  };

  return (
    <Dialog
      header="Add new daybook"
      visible
      onHide={() => onClose?.()}
      contentClassName="day-book-modal-content"
    >
      <div>
        <div className="data-field">
          <label htmlFor="openingBalance">Date:</label>
          <Calendar
            disabled={!canChangeDate || isReadOnly}
            value={getDateFromString(date)}
            onChange={handleDateChange}
          />
        </div>
        <div className="data-field">
          <label htmlFor="openingBalance">Opening balance:</label>
          <InputNumber
            inputId="openingBalance"
            value={openingBalance}
            disabled={isReadOnly}
            onValueChange={(e) => onOpeningBalanceChange?.(Number(e.value))}
            useGrouping={false}
          />
        </div>
        <div className="data-field">
          <label htmlFor="dayBookTitle">Daybook title (optional):</label>
          <InputText
            value={title}
            disabled={isReadOnly}
            onChange={(e) => onTitleChange?.(e.currentTarget.value)}
          />
        </div>
        {errorMessage && (
          <span className="inline-block top-spacer bottom-spacer p-inline-message p-inline-message-error">
            {errorMessage}
          </span>
        )}
      </div>
      <Button type="button" label="Submit" onClick={onSubmit} />
    </Dialog>
  );
};

export default DayBookModal;
