var nav = document.getElementById('nav');
var upperBound = 100;
var lowerBound = 95;
var header = document.getElementById('header');
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
