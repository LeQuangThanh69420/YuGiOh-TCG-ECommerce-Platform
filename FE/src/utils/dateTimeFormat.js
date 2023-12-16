export default function dateTimeFormat(dateTime) {
    console.log(dateTime)
    if (dateTime) {
        const date = dateTime.substring(0, 10).split('-').reverse().join('-');
        const time = dateTime.substring(11);
        return { date, time }
    }
}