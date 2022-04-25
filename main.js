/* burger  */
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

/* begin begin Back to Top button  */

  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
const wrapper = document.querySelector('.wrapper');
wrapper.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (wrapper.scrollTop > 20 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  wrapper.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  /* end begin Back to Top button  */
  const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'gorizontal',
	loop: true,
  
	// If we need pagination
	// pagination: {
	//   el: '.swiper-pagination',
	// },

	pagination: {
		el: ".swiper-pagination",
	  },
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });





//   const swiper = new Swiper('.swiper', {
// 	// Optional parameters
// 	direction: 'vertical',
// 	loop: true,
  
// 	// If we need pagination
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	},
  
// 	// Navigation arrows
// 	navigation: {
// 	  nextEl: '.swiper-button-next',
// 	  prevEl: '.swiper-button-prev',
// 	},
  
// 	// And if we need scrollbar
// 	scrollbar: {
// 	  el: '.swiper-scrollbar',
// 	},
//   });


function goBack() {
	window.history.back();
}