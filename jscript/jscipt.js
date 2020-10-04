var nav = document.getElementById('nav');
var upperBound = 100;
var lowerBound = 95;
var header = document.getElementById('avatar');
var navTop = parseInt(window.getComputedStyle(nav, null).marginTop);
var navRadius = parseInt(window.getComputedStyle(nav, null).borderRadius);

document.addEventListener('scroll', function (e) {
  var tickValue = (upperBound - lowerBound) / navTop;
  var offset = window.scrollY;
  var widthCount = lowerBound + offset * tickValue;
  var radiusCount = navRadius - offset * tickValue;
  nav.style.width = widthCount + '%';
  nav.style.borderRadius = radiusCount + 'px';
  header.style.filter = 'blur(' + offset / 100 + 'px)';
});

/////////////////////////////////  https://codepen.io/neiya/pen/VwLqQPO?editors=1010

setInterval(changeOrder, 2000);

function changeOrder() {
  const allIndicators = document.querySelectorAll('.indicator');
  const one = '1';
  const two = '2';
  const three = '3';
  const four = '4';

  for (const slide of allIndicators) {
    const order = slide.getAttribute('data-order');

    switch (order) {
      case one:
        slide.setAttribute('data-order', two);
        break;
      case two:
        slide.setAttribute('data-order', three);
        break;
      case three:
        slide.setAttribute('data-order', four);
        break;
      case four:
        slide.setAttribute('data-order', one);
        break;
    }
  }
}
