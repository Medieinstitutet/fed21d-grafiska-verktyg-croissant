function CookieTextDown() {
  var cookieContainer = document.getElementById('cookie-container');

  cookieContainer.style.display = 'none';
}

const menuBtn = document.querySelector('#menu-button');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('menu-open');

});

