export default function valueFromToFormat (range = '') {
    const arr = range.split('/')
    return {valueFrom : arr[0], valueTo : arr[1]}
}