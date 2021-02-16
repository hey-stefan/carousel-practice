const carousel = document.querySelector('.carousel')
const track = carousel.querySelector('.carousel__contents')
const maxSlides = document.querySelectorAll('.carousel__slide').length - 1

const btnPrev = carousel.querySelector('.button--prev')
const btnNext = carousel.querySelector('.button--next')
const dots = document.querySelectorAll('.carousel__dot')
let numActiveSlide = 0

// Function to change actve slide
const goToSlide = (num) => {
  numActiveSlide = num
  track.style.setProperty('transform', 'translateX(-' + num * 100 + '%)')
  dots.forEach(dot => dot.classList.remove('is-selected'))
  dots[num].classList.add('is-selected')
  if (num === 0) {
    btnPrev.setAttribute('hidden', true)
    btnNext.removeAttribute('hidden')
  } else if (num === maxSlides) {
    btnNext.setAttribute('hidden', true)
    btnPrev.removeAttribute('hidden')
  } else {
    btnPrev.removeAttribute('hidden')
    btnNext.removeAttribute('hidden')
  }
}

// Clicking on dot indicators
dots.forEach((dot, i) => {
  dot.addEventListener('click', e => {
    goToSlide(i)
  })
})

// Clicking on previous button
btnNext.addEventListener('click', e => {
  const nextNum = numActiveSlide + 1
  goToSlide(nextNum)
})

// Clicking on next button
btnPrev.addEventListener('click', e => {
  const prevNum = numActiveSlide - 1
  goToSlide(prevNum)
})
