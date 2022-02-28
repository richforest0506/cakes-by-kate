// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
})

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop()
    if (scroll > 100) {
      $('nav').css('background', '#13031C')
      $('.navList ul li a').css('color', '#F8EDEB')
    } else {
      $('nav').css('background', 'transparent')
      $('.navList ul li a').css('color', '#0e0d0f')
    }
  })
})

$('.navList ul li a').hover(
  function () {
    var scroll = $(window).scrollTop()
    if (scroll > 100) {
      $(this).css('color', '#ff3298')
    } else {
      $(this).css('color', '#B01A65')
    }
  },
  function () {
    var scroll = $(window).scrollTop()
    if (scroll > 100) {
      $(this).css('color', '#F8EDEB')
    } else {
      $(this).css('color', '#0e0d0f')
    }
  }
)
