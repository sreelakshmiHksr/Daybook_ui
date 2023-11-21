import { Dialog } from "primereact/dialog";
import { FC } from "react";
import { DayBookEntryFormValue } from "../../../../models/day-book.model";
import { Formik, FormikValues } from "formik";
import DayBookEntryForm from "../DayBookEntryForm/DayBookEntryForm";
import { dayBookEntryFormSchema } from "../../../../consts/validation-schema";

const initialValues: DayBookEntryFormValue = {
  productName: "",
  productValue: 0,
};

type DayBookEntryModalProps = {
  onClose?: () => void;
};

const DayBookEntryModal: FC<DayBookEntryModalProps> = ({ onClose }) => {
  const handleClose = () => {
    onClose?.();
  };

  const handleSubmit = (values: DayBookEntryFormValue) => {
    console.log("Daybook entry form", values);
  };

  return (
    <Dialog header="Day book entry" visible onHide={handleClose}>
      <Formik initialValues={initialValues} validationSchema={dayBookEntryFormSchema} onSubmit={handleSubmit}>
        <DayBookEntryForm />
      </Formik>
    </Dialog>
  );
};

export default DayBookEntryModal;
