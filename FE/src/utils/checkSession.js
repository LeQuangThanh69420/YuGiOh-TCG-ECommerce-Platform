
export const checkSession = () => {
    return localStorage.getItem('userData') !== '{}';
}