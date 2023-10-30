
import { Button } from 'primereact/button';
import { MouseEventHandler, FC } from 'react';

type FirstDayBookProps = {
    className?: string;
    onDayBookCreate?: MouseEventHandler<HTMLButtonElement>;
}

const FirstDayBook: FC<FirstDayBookProps> = ({ className = '', onDayBookCreate }) => {

    return <section className={className}>
        <p>You dont have any day books</p>
        <Button label="Create your first daybook" onClick={onDayBookCreate} />
    </section>
}

export default FirstDayBook;