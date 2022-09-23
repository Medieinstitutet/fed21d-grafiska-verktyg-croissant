function CookieTextDown() {
  let cookieContainer = document.getElementById('cookie-container');
  cookieContainer.style.display = 'none';
}

//Inte klar än!

let hambugermeny = document.getElementById('hamburger-menu');
let toogle = true;
let menuOverlay = document.getElementById('menu-overlay');
let hamburgerSpans = document.querySelectorAll('span.hamburger-spans');
hambugermeny.addEventListener('click', () => {
  hambugermeny.innerHTML = '';
  let image = document.createElement('img');
  if (toogle) {
    hamburgerSpans[0].style.display = 'none';
    menuOverlay.style.display = 'block';
    hambugermeny.append(image);
    toogle = !toogle;
  } else {
    hamburgerSpans[0].style.display = 'block';
    hambugermeny.append(hamburgerSpans[0]);
    menuOverlay.style.display = 'none';
    toogle = !toogle;
  }
  image.src = './assets/cross.svg';
  console.log('click');
});
