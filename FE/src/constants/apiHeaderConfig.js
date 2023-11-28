const TOKEN = JSON.parse(localStorage.getItem('userData')).token;

export const HEADER = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer' + TOKEN,
}