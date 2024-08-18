(function ($) {

  "use strict";
  $(window).load(function () {
    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');

    searchBannerAPI();
    searchBestProductsAPI();
    searchCategoryAPI();
    searchReviewAPI();
    searchProductsAPI();
  });




  function displayBannerDetails(data) {
    let bannerMainDiv = document.getElementById("banner_main");

    if (bannerMainDiv != null) {
      for (var i = 0; i < data.length; i++) {
        let information = data[i];
        var newDiv = document.createElement("div");
        newDiv.className = 'swiper-slide';
        newDiv.innerHTML =
          `
    <div class="container">
    <div class="row d-flex flex-column-reverse flex-md-row align-items-center">
      <div class="col-md-12 text-center">
        <div class="image-holder">
          <img src="`+ information.imagem + `" class="img-fluid" style="width:80%"  alt="banner">
        </div>
      </div>
    </div>
  </div>

    `;
        bannerMainDiv.appendChild(newDiv);
      }

    }


  }

  
  async function searchBannerAPI() {

    let res = await fetch(
      API_URL +`/banner`
    );


    let data = await res.json();

    displayBannerDetails(data);



  }


  function displayBestProductsDetails(data) {
    let bannerMainDiv = document.getElementById("best-products-slider");

    if (bannerMainDiv != null) {

      for (var i = 0; i < data.length; i++) {
        let information = data[i];
        var newDiv = document.createElement("div");
        newDiv.className = 'swiper-slide';
        var html = `<div class="card position-relative p-4 border rounded-3">`;
        if (information.desconto != null && information.desconto > 0) {
          html += `<div class="position-absolute"><p class="bg-primary py-1 px-3 fs-6 text-white rounded-2">` + information.desconto + `% off</p> </div>`;
        }
        html += `<img src="` + information.imagem + `" class="img-fluid shadow-sm" alt="product item">
      <h6 class="mt-4 mb-0 fw-bold"><a href="single-product.html">`+ information.nome + `</a></h6>
      <span class="price text-primary fw-bold mb-2 fs-5">R$ `+ information.valor + `</span>
      <div class="card-concern position-absolute start-0 end-0 d-flex gap-2">
        <button type="button" href="#" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top"
          data-bs-title="Tooltip on top">
          <svg class="cart">
            <use xlink:href="#cart"></use>
          </svg>
        </button>
        <a href="#" class="btn btn-dark">
          <span>
            <svg class="wishlist">
              <use xlink:href="#heart"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>`;
        newDiv.innerHTML = html;

        bannerMainDiv.appendChild(newDiv);
      }
    }




  }


  async function searchBestProductsAPI() {

    let res = await fetch(
      API_URL + `/produto`
    );


    let data = await res.json();

    displayBestProductsDetails(data);



  }


  function displayCategoryDetails(data) {
    let categoryMainDiv = document.getElementById("main_category");

    if (categoryMainDiv != null) {

      for (var i = 0; i < data.length; i++) {
        let information = data[i];        
        var newDiv = document.createElement("div");
        newDiv.className = 'col-md-4';
        var html = `     
        <div class="card mb-4 border-0 rounded-3 position-relative">
          <a href="`+ information.url + `">
            <img src="`+ information.imagem + `" class="img-fluid rounded-3" alt="cart item">
            <h6 class=" position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3"><a href="`+ information.url + `"
                class="text-white">`+ information.nome + `</a></h6>
          </a>
        </div>`;

        newDiv.innerHTML = html;

        categoryMainDiv.appendChild(newDiv);
      }

    }



  }


  async function searchCategoryAPI() {

    let res = await fetch(
      API_URL + `/categoria`
    );


    let data = await res.json();

    displayCategoryDetails(data);



  }



  function displayReviewDetails(data) {
    let reviewMainDiv = document.getElementById("main_review");

    if (reviewMainDiv != null) {

      for (var i = 0; i < data.length; i++) {
        let information = data[i];

        var newDiv = document.createElement("div");
        newDiv.className = 'swiper-slide';
        var html = `     
      <div class="card position-relative text-left p-5 border rounded-3">
      <blockquote>"`+ information.review + `"</blockquote>
      
      <h5 class="mt-1 fw-normal">`+ information.cliente + `</h5>
      </div>`;

        newDiv.innerHTML = html;

        reviewMainDiv.appendChild(newDiv);
      }

    }




  }


  async function searchReviewAPI() {

    let res = await fetch(
      API_URL +`/review`
    );


    let data = await res.json();

    displayReviewDetails(data);



  }


  function displayProductsDetails(data) {
    let storePorductsMainDiv = document.getElementById("store-products");

    if (storePorductsMainDiv != null) {
      for (var i = 0; i < data.length; i++) {
        let information = data[i];
        var newDiv = document.createElement("div");
        newDiv.className = 'col-lg-3 col-md-4 mb-4';


        var html = `<div class="card position-relative p-4 border rounded-3">`;
        if (information.desconto != null && information.desconto > 0) {
          html += `<div class="position-absolute"><p class="bg-primary py-1 px-3 fs-6 text-white rounded-2">` + information.desconto + `% off</p></div>`;
        }
        html += ` <img src="` + information.imagem + `" class="img-fluid shadow-sm" alt="product item">
      <h6 class="mt-4 mb-0 fw-bold"><a href="single-product.html">"`+ information.nome + `"</a></h6>          

      <span class="price text-primary fw-bold mb-2 fs-5">R$ "`+ information.valor + `"</span>
      <div class="card-concern position-absolute start-0 end-0 d-flex gap-2">
        <button type="button" href="#" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top"
          data-bs-title="Tooltip on top">
          <svg class="cart">
            <use xlink:href="#cart"></use>
          </svg>
        </button>
        <a href="#" class="btn btn-dark">
          <span>
            <svg class="wishlist">
              <use xlink:href="#heart"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>`;
        newDiv.innerHTML = html;

        storePorductsMainDiv.appendChild(newDiv);
      }

    }



  }


  async function searchProductsAPI() {

    let res = await fetch(
      API_URL + `/produto`
    );


    let data = await res.json();

    displayProductsDetails(data);



  }





  var searchPopup = function () {
    // open search box
    $('#header-nav').on('click', '.search-button', function (e) {
      $('.search-popup').toggleClass('is-visible');
    });

    $('#header-nav').on('click', '.btn-close-search', function (e) {
      $('.search-popup').toggleClass('is-visible');
    });

    $(".search-popup-trigger").on("click", function (b) {
      b.preventDefault();
      $(".search-popup").addClass("is-visible"),
        setTimeout(function () {
          $(".search-popup").find("#search-popup").focus()
        }, 350)
    }),
      $(".search-popup").on("click", function (b) {
        ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
          $(this).removeClass("is-visible"))
      }),
      $(document).keyup(function (b) {
        "27" === b.which && $(".search-popup").removeClass("is-visible")
      })
  }

  var countdownTimer = function () {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }

    function initializeClock(id, endtime) {
      const clock = document.getElementById(id);
      const daysSpan = clock.querySelector('.days');
      const hoursSpan = clock.querySelector('.hours');
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        const t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }

    $('#countdown-clock').each(function () {
      const deadline = new Date(Date.parse(new Date()) + 28 * 24 * 60 * 60 * 1000);
      initializeClock('countdown-clock', deadline);
    });
  }

  var initProductQty = function () {

    $('.product-qty').each(function () {

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('#quantity').val());
        $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('#quantity').val());
        if (quantity > 0) {
          $el_product.find('#quantity').val(quantity - 1);
        }
      });

    });

  }




  const form = document.querySelector("#contactinfo");

  async function sendData() {
    const formData = new URLSearchParams(new FormData(form));

    try {
      fetch(API_URL +"/contato", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      form.reset();
      $('#responseMessage').text("Mensagem enviada com sucesso");
    } catch (e) {
      form.reset();
      $('#responseMessage').text("Erro ao enviar mensagem");
    }




  }

  if(form!=null){
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
    });

  }

  $(document).ready(function () {

    searchPopup();
    initProductQty();
    countdownTimer();
 
 
    var mainSwiper = new Swiper(".main-swiper", {
      speed: 500,
      navigation: {
        nextEl: ".main-slider-button-next",
        prevEl: ".main-slider-button-prev",
      },
    });

    var productSwiper = new Swiper(".product-swiper", {
      spaceBetween: 20,
      navigation: {
        nextEl: ".product-slider-button-next",
        prevEl: ".product-slider-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        660: {
          slidesPerView: 3,
        },
        980: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 5,
        }
      },
    });

    var testimonialSwiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
      },
    });

    var thumb_slider = new Swiper(".thumb-swiper", {
      slidesPerView: 1,
    });
    var large_slider = new Swiper(".large-swiper", {
      spaceBetween: 10,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
    });

  }); 


})(jQuery);