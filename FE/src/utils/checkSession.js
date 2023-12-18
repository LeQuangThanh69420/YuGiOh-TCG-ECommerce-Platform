
export const checkSession = () => {
    return (localStorage.getItem('userData') !== '{}') || !localStorage.getItem('userData');
}