const up = document.querySelector('.up')

if (up) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      up.classList.add('up--show')
    } else {
      up.classList.remove('up--show')
    }
  });
  
  up.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo(0, 0)
  })
}

