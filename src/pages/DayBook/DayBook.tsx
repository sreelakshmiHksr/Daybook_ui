
import { useState } from 'react';
import { DayBook } from '../../models/day-book';

import './DayBook.scss';
import FirstDayBook from './components/FirstDayBook/FirstDayBook';
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';


const DayBooks = () => {

    const [dayBooks, setDayBooks] = useState<DayBook[]>([]);
    const [showAddDayBook, setShowAssDayBook] = useState<boolean>(false);

    const [openingBalance, setOpeningBalance] = useState<number>(0);

    const showEmptyDayBookContent = dayBooks.length == 0;


    const onDayBookCreate = () => {
        setShowAssDayBook(true);
    }

    return <div className='day-books'>
        {
            showEmptyDayBookContent && <FirstDayBook onDayBookCreate={onDayBookCreate} className='day-books__empty'></FirstDayBook>
        }
        {
            showAddDayBook && <Dialog header="Add new daybook" visible style={{ width: '50vw' }} onHide={() => setShowAssDayBook(false)}>
                <label htmlFor="openingBalance">Opening balance.</label>
                <InputNumber inputId='openingBalance' value={openingBalance} onValueChange={(e) => setOpeningBalance(Number(e.value))} useGrouping={false} />
            </Dialog>
        }
    </div>;
}

export default DayBooks;