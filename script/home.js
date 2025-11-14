document.getElementById("menu-icon").addEventListener("click", function() {
    var navbar = document.getElementById("navbar");
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(!expanded){
        navbar.classList.add('open');
    } else {
        navbar.classList.remove('open');
    }
});
const events = [
    {
        title: 'Intake is Ongoing',
        date: '01/01/2024',
        location: 'Njoro-Mau Road',
        img: 'images/image (19).jpg'
    },
    {
        title: 'Gain Confidence Here',
        date: '02/02/2024',
        location: 'Rural and Urban Roads',
        img: 'images/image (20).jpg'
    },
    {
        title: 'Be a community health worker',
        date: '03/03/2024',
        location: 'Class',
        img: 'images/image (14).jpg'
    },
    {
        title: 'Be a Salonist',
        date: '04/04/2024',
        location: 'School Salon',
        img: 'images/image (11).jpg'
    }
];

let currentIndex = 0;

function updateCard() {
    const card = document.getElementById('eventCard');
    card.classList.add('move-left');
    setTimeout(() => {
        card.querySelector('h2').textContent = events[currentIndex].title;
        card.querySelector('p:nth-child(3)').textContent = `Date: ${events[currentIndex].date}`;
        card.querySelector('p:nth-child(4)').textContent = `Location: ${events[currentIndex].location}`;
        card.querySelector('img').src = events[currentIndex].img;
        currentIndex = (currentIndex + 1) % events.length;
        card.classList.remove('move-left');
    }, 1000); // The duration of the moveLeft animation
}

setInterval(updateCard, 5000); // Change information every 5 seconds

document.addEventListener('DOMContentLoaded', updateCard);