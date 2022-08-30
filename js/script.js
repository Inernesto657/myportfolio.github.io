let homeContact = document.querySelector('#home-contact');

document.querySelector('#home-contact-button').onclick = () => {
    homeContact.classList.toggle('active');
}

document.querySelector('#contact-btn').onclick = () => {
    homeContact.classList.toggle('active');
}

document.querySelector('#bottom-contact-btn').onclick = () => {
    homeContact.classList.toggle('active');
}

document.querySelector('#close-home-contact').onclick = () => {
    homeContact.classList.toggle('active');
}

window.onload = () => {
    fadeOut();
}

function loader(){
    document.querySelector('.home .row .image').classList.add('active')
}

function fadeOut(){
    setTimeout(loader, 1000);
}


/* google chart script code */
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
var data = new google.visualization.arrayToDataTable([
    ['skills', 'percentage'],
    ['html 5', 90],
    ["vue.js", 90],
    ['bootstrap', 85],
    ["php", 95],
    ["javascript", 95],
    ["c#", 70],
    ["typescript", 95],
    ["laravel", 90],
    ["c", 75],
    ["codeigniter", 90],
    ["c++", 70],
    ['css', 90],
    ["webpack", 70],
    ['node.js', 70],
    ["react.js", 90],
]);

var options = {
    title: 'skill ratings',
    // width: 900,
    legend: { position: 'none' },
    chart: { title: 'skill ratings',
            subtitle: 'in percent' },
    //bars: 'horizontal', // Required for Material Bar Charts.
    axes: {
    y: {
        0: { side: 'left', label: 'percentage'} // Top x-axis.
    }
    },
    bar: { groupWidth: "40%" }
};

var chart = new google.charts.Bar(document.getElementById('top_x_div'));
chart.draw(data, options);
};


/* featured swiper */
var swiper = new Swiper(".featured-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        450: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});