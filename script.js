function CookieTextDown() {
  var cookieContainer = document.getElementById('cookie-container');

  cookieContainer.style.display = 'none';
}

const menuBtn = document.querySelector('#menu-button');

menuBtn.addEventListener('click', () => {
  document.querySelector('h1').style.opacity = '0.4';
  menuBtn.classList.toggle('menu-open');
});
