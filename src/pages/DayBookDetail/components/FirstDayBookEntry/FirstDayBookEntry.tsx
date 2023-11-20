import { Button } from "primereact/button";
import { FC } from "react";

type FirstDayBookEntryProps = {
  onCreateEntry?: () => void;
  className?: string;
};

const FirstDayBookEntry: FC<FirstDayBookEntryProps> = ({
  className = "",
  onCreateEntry,
}) => {
  return (
    <section className={`first-day-book-entry ${className}`}>
      <p>You dont have any sale entry</p>
      <Button label="Create your first daybook entry" onClick={onCreateEntry} />
    </section>
  );
};


export default FirstDayBookEntry;