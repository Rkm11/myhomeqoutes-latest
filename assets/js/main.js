var allDetails = {
	"footerDesc":"This Website is an advertising marketplace for individuals and companies who are seeking consumer referrals for services or products. We are not a provider, manufacturer, or installer. The information provided by you to us will be sent to a manufacturer and/or installer in your area. We do not endorse, warrant, or guarantee any service or products of any individual or company you choose. While any information shared with you is believed to be accurate and reliable, the owners/operators of this Website specifically disclaim all warranties, express, implied or statutory, regarding the accuracy, timeliness, and/or completeness of the information provided. The content of any information or service contained thereon (the “Content”) are provided on an as is basis. Federal and State tax credits or incentives are not available in all locations and not available to all individuals.",
	"bathroomService":"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
	"windowService":"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
	"roofingService":"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
	"mainSlider": {
		"slider1":{
			"service":"roofing",
			"stars":"5-stars.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
		"slider2":{
			"service":"bathroom",
			"stars":"4s-stars.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
		"slider3":{
			"service":"windows",
			"stars":"4s-stars.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
	},
	
	"roofing": {
		"slider1":{
			"service":"roofing",
			"stars":"5-stars.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
		"slider2":{
			"service":"roofing",
			"stars":"4s-stars.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
		"slider3":{
			"service":"roofing",
			"stars":"4s-stars.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
	},
	
	"windows": {
		"slider1":{
			"service":"windows",
			"stars":"5-stars.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
		"slider2":{
			"service":"windows",
			"stars":"4s-stars.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
		"slider3":{
			"service":"windows",
			"stars":"4s-stars.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
	},
	
	"bathroom": {
		"slider1":{
			"service":"bathroom",
			"stars":"5-starss.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
		"slider2":{
			"service":"bathroom",
			"stars":"4s-stars.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
		"slider3":{
			"service":"bathroom",
			"stars":"4s-stars.svg",
			"author":"Willie Browning, San Antonio, TX",
			"title":"I found my window contractor here",
			"description":"I lacked time looking for window replacement companies myself, so a contractor-matching website seemed an excellent way to go. As soon as I left my request, I got an email with offers from local contractors."
		},
	},
}

$(".window-featured").click(function(){
	console.log('sadas')
		redirectService('windows');
		
});

$(".roofing-featured").click(function(){
		redirectService('roofing');
		
});

$(".bathroom-featured").click(function(){
		redirectService('bathroom');
		
});

function redirectService(selectedService) {
	urlS=window.location.href
		urlS=urlS.replace("index.html",'')
		urlS=urlS.replace("#",'')
	window.location.assign(urlS+ selectedService+'.html')
}
$("#unsubscribe").click(function(){
	let unsubscribeEmail=$("#unsubscribe-email").val();	
	$(".validate__text").hide();
	$("#unsubscribe-email").removeClass("no-valid");
	if(unsubscribeEmail!=''){
		if( /(.+)@(.+){2,}\.(.+){2,}/.test(unsubscribeEmail) ){
			$("#unsubscribe-email").val('')
			$(".alert-message").show();
		} else {
		  $(".validate__text").show();
		$("#unsubscribe-email").addClass("no-valid");
		}
	}else {
		$(".validate__text").show();
		$("#unsubscribe-email").addClass("no-valid");
	}
});

$('#get-service').click(function(){
    let selectedService=$("#selected-Service").val();	
	if(selectedService!=''){
		urlS=window.location.href
		urlS=urlS.replace("index.html",'')
		urlS=urlS.replace("#",'')
		 window.location.assign(urlS+ selectedService+'.html')
	}
});

$("#footer-description").append(allDetails.footerDesc)
$("#bathroom-service").text(allDetails.bathroomService)
$("#roofing-service").text(allDetails.roofingService)
$("#window-service").text(allDetails.windowService)

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
    	selectHeader.classList.add('sticked');
    	$(".main-logo").addClass('sticky-logo');    	
    } else {
    	selectHeader.classList.remove('sticked');
    	$(".main-logo").removeClass('sticky-logo');
    	
    }
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar .scrollto');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY;
      if (navbarlink.hash != '#header') position += 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Function to scroll to an element with top ofset
   */
  function scrollto(el) {
    const selectHeader = document.querySelector('#header');
    let offset = 0;

    if (selectHeader.classList.contains('sticked')) {
      offset = document.querySelector('#header.sticked').offsetHeight;
    } else if (selectHeader.hasAttribute('data-scrollto-offset')) {
      offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute('data-scrollto-offset'));
    }
    window.scrollTo({
      top: document.querySelector(el).offsetTop - offset,
      behavior: 'smooth'
    });
  }

  /**
   * Fires the scrollto function on click to links .scrollto
   */
  let selectScrollto = document.querySelectorAll('.scrollto');
  selectScrollto.forEach(el => el.addEventListener('click', function(event) {
    if (document.querySelector(this.hash)) {
      event.preventDefault();

      let mobileNavActive = document.querySelector('.mobile-nav-active');
      if (mobileNavActive) {
        mobileNavActive.classList.remove('mobile-nav-active');

        let navbarToggle = document.querySelector('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      scrollto(this.hash);
    }
  }));

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Mobile nav toggle
   */
  const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
  if (mobileNavToogle) {
    mobileNavToogle.addEventListener('click', function(event) {
      event.preventDefault();

      document.querySelector('body').classList.toggle('mobile-nav-active');

      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Auto generate the hero carousel indicators
   */
  let heroCarouselIndicators = document.querySelector('#hero .carousel-indicators');
  if (heroCarouselIndicators) {
    let heroCarouselItems = document.querySelectorAll('#hero .carousel-item')

    heroCarouselItems.forEach((item, index) => {
      if (index === 0) {
        heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}"></li>`;
      }
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Testimonials Slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials Slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

$(document).ready(function(){
//  $(document).bind("contextmenu",function(e){
  //   e.preventDefault();//or return false;
 //});
 
  // Optimalisation: Store the references outside the event handler:
  const selectHeader1 = document.querySelector('#header');
    var $window = $(window);
    var $pane = $('#pane1');
	
    function checkWidth() {
        var windowsize = $window.width();
		console.log(windowsize);
		if(windowsize <= 500){
			//$(".laptop-slider").hide();
			//$(".mobile-slider").show();
			$(".main-logo").addClass("mobile-logo");
			$("#hero-animated").addClass("mobile-margin");
			$(".form").addClass("mobile-screen");
			$("#hero-animated").removeClass("laptop-screen");
			$(".inner-page .form").attr("Style","grid-template-columns: 295px 0px 0px;");
			console.log('mobile');			
		}else{
		$("#hero-animated").removeClass("mobile-margin");
		$(".form").addClass("laptop-screen");
		$(".form").attr("Style","grid-template-columns: 295px 0px 241px;");
		$(".main-logo").addClass('moblie-logo');
		//$(".laptop-slider").show();
		//$(".mobile-slider").hide();
		$(".form").removeClass("mobile-screen");
	}
    }
	checkWidth();
	
	 $(document).ready(function(){
	
new Swiper('.reviews__inner > .reviews__slider', {
  slidesPerView: 'auto',
  spaceBetween: 13,
  watchOverflow: true,
  pagination: {
      el: '.reviews__slider_pagination',
      clickable: true
  },
  navigation: {
      prevEl: '.reviews__slider_prev',
      nextEl: '.reviews__slider_next'
  },
  breakpoints: {
      500: {
          slidesPerColumn: 1,
          slidesPerView: 'auto'
      },
      320: {
          slidesPerColumn: 2,
          slidesPerView: 1
      }
  }
});

//reviews slider
const swiperReviews = new Swiper('.reviews__slider', {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  autoplay: {
      delay: 10000,
  },
  navigation: {
      nextEl: '.reb-button-next',
      prevEl: '.reb-button-prev',
      clickable: 'true'
  },
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true'
  },
  breakpoints: {
      // when window width is >= 320px
      320: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
          slidesPerView: 1,
          spaceBetween: 16
      },
      // when window width is >= 640px
      640: {
          slidesPerView: 2,
          spaceBetween: 10
      },
      920: {
          slidesPerView: 4,
          spaceBetween: 16
      }
  }
});
  
  });
 });