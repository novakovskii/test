const header = document.querySelector('.header')
const main = document.querySelector('.main')
const headerLinks = document.querySelectorAll('.header a')
const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
const headerConnect = document.querySelector('.header__connect')
const footer = document.querySelector('.footer')


window.addEventListener('scroll', () =>{

  const scroll = window.pageYOffset

  if (header && main) {
    if (scroll > header.offsetHeight && !header.classList.contains('header--fixed')){
      main.style.marginTop = header.offsetHeight + 55 + 'px'
      header.classList.toggle('header--fixed', true)
    } else if(scroll <= header.offsetHeight && header.classList.contains('header--fixed')) {
      header.classList.toggle('header--fixed', false)
      main.style.marginTop = 0
    }
  }
  
})

if (headerLinks) {
  headerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      if (headerBurger && headerMenu) {
        headerMenu.classList.toggle('header__menu--opened', false)
        headerBurger.classList.toggle('header__burger--opened', false)
        document.body.classList.toggle('noscroll', false)
      }
      const section = document.querySelector(link.getAttribute('href'))
      window.scrollTo(0, section.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight)
    })
  })
}

if (headerConnect) {
  headerConnect.addEventListener('click', () => {
    if (headerBurger && headerMenu) {
      headerMenu.classList.toggle('header__menu--opened', false)
      headerBurger.classList.toggle('header__burger--opened', false)
      document.body.classList.toggle('noscroll', false)
    }
    if (footer) {
      window.scrollTo(0, footer.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight)
    }
  })
}

if (headerBurger && headerMenu) {
  headerBurger.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu--opened')
    headerBurger.classList.toggle('header__burger--opened')
    document.body.classList.toggle('noscroll')
  })
}

window.addEventListener('resize', () =>{
  changeHeaderConnect()
})

document.addEventListener("DOMContentLoaded", () => {
  changeHeaderConnect()
})

function changeHeaderConnect() {
  if (headerConnect) {
    if (window.innerWidth < 1160) {
      headerConnect.classList.toggle('btn--white', false)
      headerConnect.classList.toggle('btn--blue', true)
      headerConnect.innerHTML = '<span>Вход</span>'
    } else {
      headerConnect.classList.toggle('btn--white', true)
      headerConnect.classList.toggle('btn--blue', false)
      headerConnect.innerHTML = '<span>Подключиться</span>'
    }
  }
}