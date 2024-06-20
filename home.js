function updateTime() {
    const now = new Date();
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = days[now.getDay()];
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;
    const month = 
    const date = now.toLocaleDateString();

    document.getElementById('day').textContent = `Day: ${dayOfWeek}`;
    document.getElementById('time').textContent = `Time: ${time}`;
    document.getElementById('date').textContent = `Date: ${date}`;
}

setInterval(updateTime, 1000);
updateTime();