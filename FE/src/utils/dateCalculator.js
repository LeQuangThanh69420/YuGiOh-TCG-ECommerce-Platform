export default function dateCalculator(timeOffset) {
    const now = Date.now();
    const currentDate = new Date(now);
    const past = now + timeOffset;
    const pastDate = new Date(past)
    return `${pastDate.getFullYear()}-${pastDate.getMonth() + 1}-${pastDate.getDate()}/${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
}