const isRegex = (string) => {
    try {
        new RegExp(string);
        return true;
    } catch(error) {
        return false;
    }
}

export default isRegex