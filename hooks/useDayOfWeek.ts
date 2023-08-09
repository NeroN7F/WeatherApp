const useDayOfWeek = (year: string, month: string, day: string) => {

    const date = new Date(Number(year), Number(Number(month) - 1), Number(day));
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();

    return dayNames[dayIndex]
}

export {useDayOfWeek}
