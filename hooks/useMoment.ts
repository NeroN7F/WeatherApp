const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const useMoment = (date: Date | string) => {

    if (typeof date === "string") {

        let dateParts = date.split('-')
        let currentYear = new Date().getFullYear()

        let year = Number(dateParts[0]) < currentYear ? dateParts[0] : ''
        let month = dateParts[1]
        let unformattedDay = dateParts[2]

        let day = unformattedDay.split('T')

        return parseInt(day[0]) + ' ' + months[Number(month) - 1] + ' ' + year
    }
}

export {useMoment}