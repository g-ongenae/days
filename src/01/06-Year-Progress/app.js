const nbDaysInMonth = (date) => {
    const month = date.getMonth();
    if (month === 1) {
        const year = date.getFullYear();
        const isLeapYear = new Date(year, 1, 29)
            .getDate() === 29;
        return isLeapYear ? 29 : 28;
    } else {
        const days = [
            31, 28, 31, 30, 31, 30,
            31, 31, 30, 31, 30, 31
        ];
        return days[month];
    }
};

const getPercentDate = () => {
    const date = new Date();
  
    return Math.floor(
        (date.getMonth() * 100 / 12) +
        (date.getDate() * 100 / (
                12 * nbDaysInMonth(date)
            )
        )
    );
};

document
    .getElementById('percent')
    .innerHTML = getPercentDate();