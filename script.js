function CookieTextDown() {
  var cookieContainer = document.getElementById('cookie-container');

  cookieContainer.style.display = 'none';
}

const menuBtn = document.querySelector('#menu-button');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('menu-open');
  // document.querySelector('h1').style.opacity = '0.4';
});
// Animation for subscribe button
let tl = gsap.timeline({ ease: 'power1.in' });

let clicked = false;
var tree = new TimelineMax();
let btn = document.getElementById('subscribeBtn');

btn.addEventListener('click', () => {
  if (clicked === false) {
    clicked = true;
    tl.to(
      '#subscribeBtn',
      { width: '50px', duration: 0.5 },
      { css: { className: 'buttonEnd' } }
    );
    tl.call(function () {
      btn.classList.remove('buttonStart');
      btn.classList.add('buttonEnd');
    });
    tl.to('#w', { y: '0%', duration: 0.5 });

    tl.to('#w', { y: '100%', duration: 0.5 });
    tl.to('#subscribeBtn', { width: '135px', duration: 0.5 });
    tl.call(function () {
      btn.classList.remove('buttonEnd');
      btn.classList.add('btnDis');
      btn.disable = true;
    });
  }
});
