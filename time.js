// function getDayWithSuffix(day) {
//     if (day > 3 && day < 21) return ${day}th; // catch 11th-19th
//     switch (day % 10) {
//         case 1: return0 ${day}st;
//         case 2: return ${day}nd;
//         case 3: return ${day}rd;
//         default: return ${day}th;
//     }
// }

// function updateTime() {
//     const now = new Date();

//     const day = getDayWithSuffix(now.getDate());
//     const month = now.toLocaleString('en-US', { month: 'long' });
//     const year = now.getFullYear();
//     const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');

//     const time = ${hours}:${minutes}:${seconds};
//     const fullDate = ${dayOfWeek} ${day} ${month} ${year} ${time};

//     document.getElementById('datetime').textContent = fullDate;
// }

// setInterval(updateTime, 1000);
// updateTime();  // Initial call to display immediately