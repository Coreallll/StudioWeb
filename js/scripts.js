//Navigation scroll-point
const scrollBlocks = document.querySelectorAll('.scroll-block'),
      btnNumber = document.querySelectorAll('.btn-number'),
      btnPoint = document.querySelectorAll('.btn-point'),
      scrollBlock1 = document.getElementById('scrollBlock1'),
      scrollBlock2 = document.getElementById('scrollBlock2'),
      scrollBlock3 = document.getElementById('scrollBlock3'),
      scrollBlock4 = document.getElementById('scrollBlock4'),
      scrollBlock5 = document.getElementById('scrollBlock5');

btnPoint.forEach(btn => {
  btn.addEventListener('click', () => {

  handleScrollBtn();
  })
})

//eventListener mousewheel

const scroll = document.getElementById('scroll'),
      sections = document.querySelectorAll('.section');

function handleScrollBtn() {
  const viewPortHeight = window.innerHeight;

  const currentSection = Array.from(sections).find(section => {
    const viewPort = section.getBoundingClientRect();
    return viewPort.top <= viewPortHeight / 2 && viewPort.bottom > viewPortHeight / 2;
  })

  if (currentSection) {
    const currentSectionId = currentSection.id;

    btnPoint.forEach(item => {
      if (item.getAttribute('href') === `#${currentSectionId}`) {
        btnPoint.forEach(point => {
          point.classList.remove('btn-point--active');
        })
        btnNumber.forEach( num => {
          num.classList.remove('btn-number--active');
        })
        if(scrollBlock1.classList.contains('scroll-block--active')) {
          scrollBlock2.classList.remove('scroll-block--active');
          scrollBlock3.classList.remove('scroll-block--active');
          scrollBlock4.classList.remove('scroll-block--active');
          scrollBlock5.classList.remove('scroll-block--active');
        }
        if(scrollBlock2.classList.contains('scroll-block--active')) {
          scrollBlock3.classList.remove('scroll-block--active');
          scrollBlock4.classList.remove('scroll-block--active');
          scrollBlock5.classList.remove('scroll-block--active');
        }
        if(scrollBlock3.classList.contains('scroll-block--active')) {
          scrollBlock4.classList.remove('scroll-block--active');
          scrollBlock5.classList.remove('scroll-block--active');
        }
        if(scrollBlock4.classList.contains('scroll-block--active')) {
          scrollBlock5.classList.remove('scroll-block--active');
        }

        item.parentElement.classList.add('scroll-block--active');
        item.classList.add('btn-point--active');
        item.previousElementSibling.classList.add('btn-number--active');
      }

      if(scrollBlock5.classList.contains('scroll-block--active')) {
        scrollBlock1.classList.add('scroll-block--active');
        scrollBlock2.classList.add('scroll-block--active');
        scrollBlock3.classList.add('scroll-block--active');
        scrollBlock4.classList.add('scroll-block--active');
      }
      if(scrollBlock4.classList.contains('scroll-block--active')) {
        scrollBlock1.classList.add('scroll-block--active');
        scrollBlock2.classList.add('scroll-block--active');
        scrollBlock3.classList.add('scroll-block--active');
      }
      if(scrollBlock3.classList.contains('scroll-block--active')) {
        scrollBlock1.classList.add('scroll-block--active');
        scrollBlock2.classList.add('scroll-block--active');
      }
      if(scrollBlock2.classList.contains('scroll-block--active')) {
        scrollBlock1.classList.add('scroll-block--active');
      }
    })
  }
}

scroll.addEventListener('scroll', event => {
  handleScrollBtn();
});

handleScrollBtn();

//burger menu
const scrollContainer = document.getElementById('scroll'),
  btnBurger = document.getElementById('burgerMenu'),
  btnClose = document.getElementById('closeMenu'),
  navMenu = document.getElementById('navMenu');

btnBurger.addEventListener('click', () => {
  navMenu.classList.toggle('header__nav--active');
  scrollContainer.classList.toggle('scroll-lock');
})

btnClose.addEventListener('click', () => {
  navMenu.classList.remove('header__nav--active');
})

window.addEventListener('click', event => {
  if(event.target !== btnBurger && event.target !== navMenu) {
    navMenu.classList.remove('header__nav--active');
    scrollContainer.classList.remove('scroll-lock');
  }
})
