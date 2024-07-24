/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

//-------------------------------Прелоадер и плавное появление блоков---------------------------------
if (document.readyState === "complete") {
   init();
} else {
   window.addEventListener("load", init);
}

function init() {
   //плавное появление
   function onEntry(entry) {
      entry.forEach(change => {
         if (change.isIntersecting) {
            change.target.classList.add('element-show');
         }
      });
   }
   let options = { threshold: [0.1] };
   let observer = new IntersectionObserver(onEntry, options);
   let elements = document.querySelectorAll('.element-animation');
   for (let elm of elements) {
      observer.observe(elm);
   };
}

/*------------------------------Fix шапки---------------------------*/
const headerTop = document.querySelector('.header__top');
function addFixedClass() {
   headerTop.classList.add('fixed');
}
function removeFixedClass() {
   headerTop.classList.remove('fixed');
}
function handleScroll() {
   if (window.pageYOffset > 100) {
      addFixedClass();
   } else {
      removeFixedClass();
   }
}

window.addEventListener('scroll', handleScroll);

/*------------------------------Бургер меню---------------------------*/
const menuIcon = document.querySelector('.menu__icon');
const mainMenu = document.querySelector('.main-menu');
const menuClose = document.querySelector('.main-menu__close');
const body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
   mainMenu.classList.toggle('show');
   body.classList.add('open-menu');
});

menuClose.addEventListener('click', () => {
   mainMenu.classList.remove('show');
   body.classList.remove('open-menu');

});

/*------------------------------Открытие попапов---------------------------*/
const openCallBackButtons = document.querySelectorAll('.open-callback-popup');
const CallBackPopup = document.getElementById('callback-popup');
const openCityButtons = document.querySelectorAll('button.open-city-popup');
const cityPopup = document.getElementById('city-popup');
const popupContent = document.querySelectorAll('.popup__content');
const closeButtons = document.querySelectorAll('.popup__close');

openCallBackButtons.forEach(button => {
   button.addEventListener('click', (e) => {
      e.preventDefault();
      CallBackPopup.classList.add('open');
      CallBackPopup.querySelector('.popup__content').classList.add('visible');
   });
});

openCityButtons.forEach(button => {
   button.addEventListener('click', () => {
      cityPopup.classList.add('open');
      cityPopup.querySelector('.popup__content').classList.add('visible');
   });
});

closeButtons.forEach(button => {
   button.addEventListener('click', () => {
      document.querySelectorAll('.popup').forEach(popup => {
         popup.classList.remove('open');
         popup.querySelector('.popup__content').classList.remove('visible');
      });
   });
});

/*------------------------------Маска номера---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const maskOptions = {
      mask: '+{7}(000)000-00-00'
   };

   const elements = document.querySelectorAll('.tel-mask');
   elements.forEach(function (element) {
      IMask(element, maskOptions);
   });
});

/*------------------------------Перенос элементов---------------------------*/
function moveElements() {
   const logo = document.getElementById('logo');
   const headerTopBody = document.getElementById('headerTopBody');
   const headerBottomBody = document.getElementById('headerBottomBody');
   const navigation = document.getElementById('header__navigation');
   const mainMenuAsideBody = document.getElementById('main-menu__aside-body');

   if (window.innerWidth < 800) {
      if (headerBottomBody.contains(logo)) {
         headerTopBody.appendChild(logo);
      }
      if (!mainMenuAsideBody.contains(navigation)) {
         mainMenuAsideBody.appendChild(navigation);
      }
   } else {
      if (headerTopBody.contains(logo)) {
         headerBottomBody.appendChild(logo);
      }
      if (mainMenuAsideBody.contains(navigation)) {
         headerBottomBody.appendChild(navigation);
      }
   }
}

window.addEventListener('resize', moveElements);
document.addEventListener('DOMContentLoaded', moveElements);

/*------------------------------Мобайл меню---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuTitles = document.querySelectorAll('.main-menu__title');

   menuTitles.forEach(function (title) {
      title.addEventListener("click", function (e) {
         if (window.innerWidth < 768) {
            e.preventDefault();

            const links = title.nextElementSibling;
            links.classList.toggle("show");
            title.classList.toggle("open");

            menuTitles.forEach(function (otherTitle) {
               if (otherTitle !== title) {
                  const otherLinks = otherTitle.nextElementSibling;
                  otherLinks.classList.remove("show");
                  otherTitle.classList.remove("open");
               }
            });
         }
      });
   });
});


/*------------------------------Home перенос карточек---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   function moveInfocards() {
      const infocards = document.querySelector('.infocards');
      const homeText = document.querySelector('.home__text');
      const homeBody = document.querySelector('.home__body');

      if (infocards && homeText && homeBody) {
         if (window.innerWidth < 768) {
            if (!homeText.contains(infocards)) {
               homeText.appendChild(infocards);
            }
         } else {
            if (!homeBody.contains(infocards)) {
               homeBody.parentElement.insertBefore(infocards, homeBody.nextSibling);
            }
         }
      }
   }
   window.addEventListener('resize', moveInfocards);
   moveInfocards();
});

/*------------------------------Video---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const videoButton = document.getElementById('video');

   if (videoButton) {
      videoButton.addEventListener('click', function () {
         const video = document.getElementById('videoPlayer');
         const cover = document.querySelector('.video__cover');
         const playButton = document.getElementById('playButton');
         if (video && cover && playButton) {
            video.style.display = 'block';
            video.style.visibility = 'visible';
            cover.style.display = 'none';
            playButton.style.display = 'none';
            video.play();
         }
      });
   }
});

/*------------------------------Слайдер галерея---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const gallerySliderElement = document.querySelector('.gallery__slider');
   if (gallerySliderElement) {
      const gallerySlider = new Swiper('.gallery__slider', {
         loop: true,
         navigation: {
            nextEl: '.gallery-btn-next',
            prevEl: '.gallery-btn-prev',
         },
         freeMode: true,
         spaceBetween: 20,
         watchOverflow: true,
         grabCursor: true,
         breakpoints: {
            320: {
               slidesPerView: 1.5,
            },
            992: {
               slidesPerView: 3.5,
            }
         },
      });
   }
});

const gsBgImgSelector2 = ".gallery__item img";
const sliderImgs2 = document.querySelectorAll(gsBgImgSelector2);

if (sliderImgs2.length > 0) {
   const dynamicEl = [...sliderImgs2].map((sliderImg) => {
      return {
         src: sliderImg.src,
         thumb: sliderImg.src,
         subHtml: ''
      };
   });

   const dynamicGallery = document.querySelector(".dynamic-gallery-button3");

   const popup = lightGallery(dynamicGallery, {
      dynamic: true,
      download: false,
      dynamicEl,
      mobileSettings: {
         showCloseIcon: true,
      },
   });

   dynamicGallery.addEventListener("click", () => {
      popup.openGallery(0);
   });

   [...document.querySelectorAll(".gallery__item")].map((slide, idx) => {
      slide.addEventListener("click", () => {
         popup.openGallery(idx);
      });
   });
}


/*------------------------------ + - ---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const plusButtons = document.querySelectorAll('.calculator__btn-plus');
   const minusButtons = document.querySelectorAll('.calculator__btn-minus');

   if (plusButtons.length > 0 && minusButtons.length > 0) {
      function increaseValue(event) {
         const input = event.target.closest('.calculator__item').querySelector('input');
         const currentValue = parseInt(input.value) || 0;
         input.value = currentValue + 1;
      }
      function decreaseValue(event) {
         const input = event.target.closest('.calculator__item').querySelector('input');
         const currentValue = parseInt(input.value) || 0;
         if (currentValue > 1) {
            input.value = currentValue - 1;
         }
      }
      plusButtons.forEach(function (button) {
         button.addEventListener('click', increaseValue);
      });
      minusButtons.forEach(function (button) {
         button.addEventListener('click', decreaseValue);
      });
   }
});

/*-------------------------Дополнительные услуги--------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const sections = document.querySelectorAll('.calculator__item');

   sections.forEach(function (section) {
      const groupSelectionTitle = section.querySelector('.calculator__group-selection-title');
      const groupSelectionItems = section.querySelector('.calculator__group-selection-items');
      const checkboxes = section.querySelectorAll('.calculator__group-selection-item input[type="checkbox"]');
      const infoSpan = section.querySelector('.calculator__info span');

      function updateSelectedCount() {
         const selectedCount = section.querySelectorAll('.calculator__group-selection-item input[type="checkbox"]:checked').length;
         infoSpan.textContent = selectedCount;
      }

      function handleClickOutside(event) {
         if (!section.contains(event.target)) {
            groupSelectionItems.classList.remove('active');
            document.removeEventListener('click', handleClickOutside);
         }
      }

      if (groupSelectionTitle && groupSelectionItems && infoSpan) {
         groupSelectionTitle.addEventListener('click', function (event) {
            event.stopPropagation();
            groupSelectionItems.classList.toggle('active');
            if (groupSelectionItems.classList.contains('active')) {
               document.addEventListener('click', handleClickOutside);
            } else {
               document.removeEventListener('click', handleClickOutside);
            }
         });

         if (checkboxes.length > 0) {
            checkboxes.forEach(function (checkbox) {
               checkbox.addEventListener('change', updateSelectedCount);
            });
         }
      }
   });
});


/*------------------------------Выбор даты---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const datepickerElements = document.querySelectorAll('.datepicker');

   datepickerElements.forEach(function (datepickerElement) {
      const today = new Date();
      const datepicker = new AirDatepicker(datepickerElement, {
         autoClose: true,
         dateFormat: 'dd/MM/yyyy',
         timepicker: true,
         minDate: today,
         minutesStep: 1,
         onSelect({ date, formattedDate, datepicker }) {
            const datePart = date.toLocaleDateString('en-GB');
            const timePart = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
            const customFormattedDate = `${datePart}, ${timePart}`;
         }
      });
   });
});




/*------------------------------Кастомный Dropdown---------------------------*/
document.addEventListener('DOMContentLoaded', function () {

   if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
         thisArg = thisArg || window;
         for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
         }
      };
   }

   document.querySelectorAll('.s-dropdown').forEach(function (dropDownWrapper) {
      const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
      const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
      const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
      const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

      dropDownBtn.addEventListener('click', function (e) {
         dropDownList.classList.toggle('dropdown__list--visible');
         this.classList.toggle('dropdown__button--active');
      });

      dropDownListItems.forEach(function (listItem) {
         listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown__list--visible');

            dropDownBtn.classList.remove('dropdown__button--active');
         });
      });

      document.addEventListener('click', function (e) {
         const isDropdownClick = dropDownWrapper.contains(e.target);
         const isDropdownListClick = dropDownList.contains(e.target);
         if (!isDropdownClick && !isDropdownListClick) {
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');
         }
      });

      document.addEventListener('keydown', function (e) {
         if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');
         }
      });
   });

});


/*------------------------------Калькулятор табы---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const tabs = document.querySelectorAll('.calculator__tab');
   const contents = document.querySelectorAll('.calculator__content');

   if (tabs.length > 0 && contents.length > 0) {
      tabs.forEach(tab => {
         tab.addEventListener('click', function () {
            const calcId = this.getAttribute('data-calc');
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            contents.forEach(content => {
               const contentId = content.getAttribute('data-calc');
               if (contentId === calcId) {
                  content.classList.add('open');
               } else {
                  content.classList.remove('open');
               }
            });
         });
      });
   }
});

/*------------------------------Отзывы галерея---------------------------*/


document.addEventListener('DOMContentLoaded', function () {
   const tabs = document.querySelectorAll('.testimonials__tab');
   const contents = document.querySelectorAll('.testimonials__content');

   function initializeSwiper(content) {
      const nextEl = content.querySelector('.testimonials-btn-next');
      const prevEl = content.querySelector('.testimonials-btn-prev');

      if (nextEl && prevEl) {
         content.swiper = new Swiper(content.querySelector('.testimonials__slider'), {
            loop: false,
            navigation: {
               nextEl: nextEl,
               prevEl: prevEl,
            },
            freeMode: false,
            initialSlide: 1,
            spaceBetween: 40,
            watchOverflow: true,
            grabCursor: true,
            centeredSlides: true,
            breakpoints: {
               320: {
                  slidesPerView: 1.5,
               },
               992: {
                  slidesPerView: 3,
               }
            },
         });
      }
   }

   tabs.forEach(tab => {
      tab.addEventListener('click', function () {
         const tabId = this.getAttribute('data-tab');

         tabs.forEach(t => t.classList.remove('active'));
         this.classList.add('active');

         contents.forEach(content => {
            if (content.getAttribute('data-content') === tabId) {
               content.classList.add('active');
            } else {
               content.classList.remove('active');
            }
         });

         // Уничтожить все существующие Swiper перед созданием нового
         contents.forEach(content => {
            if (content.swiper) {
               content.swiper.destroy(true, true);
            }
         });

         // Инициализировать новый Swiper только для активного слайда
         contents.forEach(content => {
            if (content.classList.contains('active')) {
               initializeSwiper(content);
            }
         });
      });
   });

   // Инициализация Swiper для первого активного контента
   contents.forEach(content => {
      if (content.classList.contains('active')) {
         initializeSwiper(content);
      }
   });

   /*------------------------------Галерея---------------------------*/
   const dynamicEls = [];

   document.querySelectorAll('.testimonials__content').forEach(content => {
      const slider = content.querySelector('.testimonials__slider');
      const images = slider.querySelectorAll('.testimonials__item-internet img');
      const tenchatImages = content.querySelectorAll('.testimonials__item-tenchat img');

      if (images.length > 0 || tenchatImages.length > 0) {
         const sliderImgs = [...images, ...tenchatImages].map(img => ({
            src: img.src,
            thumb: img.src,
            subHtml: ''
         }));

         dynamicEls.push(...sliderImgs);
      }
   });

   if (dynamicEls.length > 0) {
      const dynamicGallery = document.querySelector(".dynamic-gallery-button");

      const popup = lightGallery(dynamicGallery, {
         dynamic: true,
         download: false,
         dynamicEl: dynamicEls,
         mobileSettings: {
            showCloseIcon: true,
         },
      });

      document.querySelectorAll(".swiper-slide").forEach((slide, idx) => {
         slide.addEventListener("click", () => {
            const parentContent = slide.closest('.testimonials__content-gallery');
            if (!parentContent) return;

            const slideIndex = Array.from(parentContent.querySelectorAll('.swiper-slide')).indexOf(slide);
            if (slideIndex >= 0 && slideIndex < dynamicEls.length) {
               popup.openGallery(dynamicEls.findIndex(el => el.src === slide.querySelector('img').src));
            } else {
               console.error(`Index ${slideIndex} is out of range for dynamicEl array.`);
            }
         });
      });
   }

});

/*------------------------------Видеоотзывы---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const videoContainers = document.querySelectorAll('.testimonials__video-container');

   videoContainers.forEach(container => {
      const video = container.querySelector('video');
      const cover = container.querySelector('.testimonials__cover');
      const playIcon = container.querySelector('.testimonials__play-icon');

      if (video && cover && playIcon) {
         const playVideo = () => {
            container.classList.add('playing');
            video.style.display = 'block';
            video.play();
         };
         cover.addEventListener('click', playVideo);
         playIcon.addEventListener('click', playVideo);
      }
   });
});



/*------------------------------Слайдер доп услуги---------------------------*/
function initializeSwiper() {
   const addServicesSlider = document.querySelector('.add-services__slider');
   if (addServicesSlider && window.matchMedia('(max-width: 650px)').matches) {
      var addServicesSwiper = new Swiper('.add-services__slider', {
         direction: 'horizontal',
         slidesPerView: 1.2,
         grid: {
            rows: 2,
         },
         spaceBetween: 10,
         pagination: {
            el: '.add-services-pagination',
            clickable: true,
         },
      });
   }
}
initializeSwiper();
window.addEventListener('resize', function () {
   initializeSwiper();
});

/*------------------------------Слайдер Рекомендательные письма---------------------------*/
const lettersSlider = new Swiper('.letters__slider', {
   loop: true,
   navigation: {
      nextEl: '.letters-btn-next',
      prevEl: '.letters-btn-prev',
   },
   freeMode: true,
   spaceBetween: 20,
   watchOverflow: true,
   grabCursor: true,
   breakpoints: {
      320: {
         slidesPerView: 1.5,
      },
      468: {
         slidesPerView: 3,
      },
      992: {
         slidesPerView: 4,
      }
   },
});

const gsBgImgSelector = ".letters__item img";
const sliderImgs = document.querySelectorAll(gsBgImgSelector);

if (sliderImgs.length > 0) {
   const dynamicEl = [...sliderImgs].map((sliderImg) => {
      return {
         src: sliderImg.src,
         thumb: sliderImg.src,
         subHtml: ''
      };
   });

   const dynamicGallery = document.querySelector(".dynamic-gallery-button2");

   const popup = lightGallery(dynamicGallery, {
      dynamic: true,
      download: false,
      dynamicEl,
      mobileSettings: {
         showCloseIcon: true,
      },
   });

   dynamicGallery.addEventListener("click", () => {
      popup.openGallery(0);
   });

   [...document.querySelectorAll(".letters__item")].map((slide, idx) => {
      slide.addEventListener("click", () => {
         popup.openGallery(idx);
      });
   });
}

/*------------------------------FAQ---------------------------*/
document.addEventListener('DOMContentLoaded', () => {
   const items = document.querySelectorAll('.faq__item');
   const showAllButton = document.getElementById('show-all-faq');

   items.forEach((item, index) => {
      if (index >= 7) {
         item.classList.add('hidden');
      }
   });

   if (showAllButton) {
      showAllButton.addEventListener('click', (event) => {
         event.preventDefault();
         items.forEach(item => item.classList.remove('hidden'));
         showAllButton.style.display = 'none';
      });
   }

   items.forEach(item => {
      const question = item.querySelector('.faq__question');
      if (question) {
         question.addEventListener('click', () => {
            const openItem = document.querySelector('.faq__item.active');
            if (openItem && openItem !== item) {
               openItem.classList.remove('active');
            }
            item.classList.toggle('active');
         });
      }
   });
});


/*------------------------------Скрытие большого текста---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const openButtons = document.querySelectorAll('.longtext__open-btn');
   openButtons.forEach(function (button) {
      button.addEventListener('click', function () {
         var paragraphText = this.previousElementSibling;
         if (paragraphText) {
            paragraphText.classList.toggle('open');
            this.classList.toggle('active');
         }
      });
   });
});

/*------------------------------Слайдер партнеры---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const clientsRow = document.querySelectorAll('.clients__row');
   const clientsRowitems = document.querySelectorAll('.clients__row-items');
   const clientsRowSlide = document.querySelectorAll('.clients__icon');

   if (window.innerWidth <= 767) {
      var commercialSlider = new Swiper('.commercial-slider', {
         slidesPerView: 2,
         spaceBetween: 40,
         navigation: {
            nextEl: '.clients-btn-next',
            prevEl: '.clients-btn-prev',
         },
      });

      var governmentSlider = new Swiper('.government-slider', {
         slidesPerView: 2,
         spaceBetween: 40,
         navigation: {
            nextEl: '.clients-btn-next',
            prevEl: '.clients-btn-prev',
         },
      });

      commercialSlider.controller.control = governmentSlider;
      governmentSlider.controller.control = commercialSlider;
   } else {
      clientsRow.forEach(element => {
         element.classList.remove('swiper');
      });
      clientsRowitems.forEach(element => {
         element.classList.remove('swiper-wrapper');
      });
      clientsRowSlide.forEach(element => {
         element.classList.remove('swiper-slide');
      });
   }
});

/*------------------------------Активная ссылка в навигации (статья)---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const sections = document.querySelectorAll('.article__text [id]');
   const navLinks = document.querySelectorAll('.article__sidebar-link');

   if (sections.length && navLinks.length) {
      function removeActiveClasses() {
         navLinks.forEach(link => link.classList.remove('active'));
      }
      function addActiveClass(link) {
         removeActiveClasses();
         link.classList.add('active');
      }
      function handleScroll() {
         const windowCenter = window.innerHeight / 2;
         sections.forEach(section => {
            const sectionRect = section.getBoundingClientRect();
            if (sectionRect.top <= windowCenter && sectionRect.bottom >= windowCenter) {
               const currentSectionId = section.getAttribute('id');
               navLinks.forEach(link => {
                  if (link.getAttribute('href').includes(currentSectionId)) {
                     addActiveClass(link);
                  }
               });
            }
         });
      }
      window.addEventListener('scroll', handleScroll);
      navLinks.forEach(link => {
         link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
               window.scrollTo({
                  top: targetSection.offsetTop - 100,
                  behavior: 'smooth'
               });
               addActiveClass(this);
            }
         });
      });
      handleScroll();
   }
});

/*------------------------------Текст в контактах---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const moreKeywordsButton = document.getElementById('moreKeywords');
   const keywordsText = document.getElementById('keywordsText');

   if (moreKeywordsButton && keywordsText) {
      moreKeywordsButton.addEventListener('click', function () {
         const isOpen = keywordsText.classList.toggle('open');
         this.textContent = isOpen ? 'Скрыть' : 'Показать все';
      });
   }
});

/*------------------------------Показать все услуги---------------------------*/
const showAllPop = document.getElementById('showAllPop');

if (showAllPop) {
   showAllPop.addEventListener('click', function (e) {
      e.preventDefault();
      var items = document.querySelectorAll('.popular__item');
      if (items.length > 0) {
         for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'flex';
         }
         this.style.display = 'none';
      }
   });
}


/*------------------------------Посказка города---------------------------*/
function elementExists(id) {
   return document.getElementById(id) !== null;
}
var form1Options =
{
   fields:
      [
         { id: 'address_city', levels: ['Region', 'District', 'City'], limit: 4 }
      ]
};
if (elementExists('address_city')) {
   AhunterSuggest.Address.Discrete(form1Options);
}

})();

/******/ })()
;