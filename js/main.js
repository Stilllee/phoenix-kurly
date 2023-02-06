
const swiper = new Swiper('.swiper-container',{
  autoplay:true,
  loop:true,
  speed: 1000,
  parallax:true,
  pagination:{
    el: '.pagination',
    clickable: true, 
    type: 'fraction'
  },
  // 동적로딩
  lazy:{
    loadPrevNext: true //이전, 다음 이미지 미리 로딩
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  
}) 
