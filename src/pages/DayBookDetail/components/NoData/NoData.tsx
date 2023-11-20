import { FC, MouseEvent } from "react";
import { Button } from "primereact/button";

type NoDataProps = {
  onGoHome?: () => void;
  className?: string;
};

const NoData: FC<NoDataProps> = ({ className = "", onGoHome }) => {
  const handleGoHome = (event: MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    onGoHome?.();
  };

  return (
    <div className={`no-data ${className}`}>
      <p>No data available for the day book.</p>
      <Button label="Go home" link onClick={handleGoHome} />
    </div>
  );
};

export default NoData;
