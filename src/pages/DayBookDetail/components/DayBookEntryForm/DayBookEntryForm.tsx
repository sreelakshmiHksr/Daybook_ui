import { ErrorMessage, Form, useFormikContext } from "formik";
import { InputText } from "primereact/inputtext";
import { FC } from "react";
import { DayBookEntryFormValue } from "../../../../models/day-book.model";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

import "./DayBookEntryForm.scss";
import { Message } from "primereact/message";

type DayBookEntryFormProps = {
  disabled?: boolean;
};

const DayBookEntryForm: FC<DayBookEntryFormProps> = ({ disabled }) => {
  const { values, setFieldValue, errors, submitForm } =
    useFormikContext<DayBookEntryFormValue>();
  return (
    <Form className="day-book-entry-form">
      <div className="day-book-entry-form__container">
        <div className="data-field">
          <label htmlFor="name">Customer name(optional):</label>
          <InputText
            id="name"
            value={values.name || ""}
            disabled={disabled}
            onChange={(e) => setFieldValue("name", e.currentTarget.value)}
          />
        </div>
        <div className="data-field">
          <label htmlFor="place">Place(optional):</label>
          <InputText
            id="place"
            value={values.place || ""}
            disabled={disabled}
            onChange={(e) => setFieldValue("place", e.currentTarget.value)}
          />
        </div>
        <div className="data-field">
          <label htmlFor="contactNumber">Contact number(optional):</label>
          <InputText
            id="contactNumber"
            value={values.contactNumber || ""}
            disabled={disabled}
            onChange={(e) =>
              setFieldValue("contactNumber", e.currentTarget.value)
            }
          />
        </div>
        <div className="data-field">
          <label htmlFor="productName">Product name:</label>
          <InputText
            id="productName"
            value={values.productName || ""}
            disabled={disabled}
            className={`${!!errors.productName ? "p-invalid" : ""}`}
            onChange={(e) =>
              setFieldValue("productName", e.currentTarget.value)
            }
          />
          {errors.productName && (
            <Message severity="error" text={errors.productName} />
          )}
        </div>
        <div className="data-field">
          <label htmlFor="productValue">Product value:</label>
          <InputNumber
            id="productValue"
            value={values.productValue}
            disabled={disabled}
            className={`${!!errors.productValue ? "p-invalid" : ""}`}
            onChange={(e) => setFieldValue("productValue", e.value || 0)}
          />
          {errors.productValue && (
            <Message severity="error" text={errors.productValue} />
          )}
        </div>
        <div className="data-field">
          <label htmlFor="description">Product description:</label>
          <InputTextarea
            id="description"
            value={values.description}
            disabled={disabled}
            onChange={(e) =>
              setFieldValue("description", e.currentTarget.value)
            }
          />
        </div>
        <Button type="button" label="Submit" onClick={submitForm} />
      </div>
    </Form>
  );
};

export default DayBookEntryForm;
