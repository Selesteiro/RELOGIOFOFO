function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');

    hourElement.textContent = hours;
    minuteElement.textContent = minutes;
    secondElement.textContent = seconds;
}

setInterval(updateClock, 1000);
