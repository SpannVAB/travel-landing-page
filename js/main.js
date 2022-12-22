headerBackground();
burgerMenu();
scroll();

function headerBackground() {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  };
}

// Burher handler

function burgerMenu() {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
  const menuLinks = document.querySelectorAll('.header__link');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
  });
  if (window.innerWidth <= 767) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
      });
    }
  }
}

function scroll() {
  function smoothScroll(targerEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight;
    let target = document.querySelector(targerEl);
    let targerPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targerPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
  }

  function scrollTo() {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach((each) => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  }
  scrollTo();
}
