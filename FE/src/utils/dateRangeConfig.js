import dateCalculator from "./dateCalculator";
import valueFromToFormat from "./valueFormToFormat";

export default function dateRangeConfig (stringDate) {
    let dateFromTo = ''
    switch (stringDate) {
        case 'Today':
            dateFromTo = dateCalculator(0);
            break;
        case 'This week':
            dateFromTo = dateCalculator(-6048e5);
            break;
        case 'These 2 weeks':
            dateFromTo = dateCalculator(-12096e5);
            break;
        case 'This month':
            dateFromTo = dateCalculator(-26298e5);
            break;
        case 'This year':
            dateFromTo = dateCalculator(-31557e6);
            break;
        default:
            break;
    }
    return valueFromToFormat(dateFromTo);
}