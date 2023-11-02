

/**
 * 
 * @param date Date object
 * @returns Date in dd/mm/yyyy
 */
export function getFormattedDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}

/**
 * 
 * @param dateString Date string in dd/mm/yyyy
 * @returns Date
 */
export function getDateFromString(dateString: string) {
    var parts = dateString.split('/');
    return new Date(+parts[2], +parts[1] - 1, +parts[0]);
}
