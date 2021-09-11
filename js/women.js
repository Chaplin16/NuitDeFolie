function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += 
        `<div class="card-img"><img src="${d.attachment}" alt="${d.alt}" class=""></div>`;
    });
    $(element).slick({
        centerMode: true,
        centerPadding: '1.5rem',
        slidesToShow: 3,
        arrows: true,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '1rem',
                    slidesToShow: 3
                }
           },
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '1rem',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1.3
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '1rem',
                    slidesToShow: 1
                }
            }
         ]
    });
}

carousel(".firstCarousel", swimsuit);
carousel(".secondCarousel", underwear);
carousel(".thirdCarousel", sweat);
