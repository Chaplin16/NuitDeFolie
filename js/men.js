function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += 
        `<div class="card-img"><img src="${d.attachment}" alt="${d.alt}" class=""></div>`;
    });
    $(element).slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        arrows: true,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
        //    },
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             arrows: true,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 2.5
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: true,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1.5
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: true,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
             }
         ]
    });
}

carousel(".fourCarousel", teeshirt);
carousel(".fiveCarousel", shirt);
carousel(".sixCarousel", boxer);