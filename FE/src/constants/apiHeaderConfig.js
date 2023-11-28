const TOKEN = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).token : '';

export const HEADER = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer' + TOKEN,
}