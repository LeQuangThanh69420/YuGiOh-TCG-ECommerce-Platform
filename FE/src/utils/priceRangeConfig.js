export default function priceRangeConfig (stringRange = '') {
    const arr = stringRange.split('+')
    if(arr.length === 1) {
        const arr1 = stringRange.split('-');
        return {valueFrom: arr1[0], valueTo: arr1[1]};
    } else if (arr.length === 2) {
        return {valueFrom: arr[0], valueTo: arr[1]};
    }
}