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
  //.style.filter = 'blur(' + offset / 100 + 'px)';
  // header.style.filter = 'opacity(' + radiusCount / offset + ')';
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

//https://stackoverflow.com/questions/44902920/how-is-the-active-class-added-to-the-correct-nav-item-inside-scroll-my-event

(function () {
  var anchorsArray = document.querySelectorAll('nav a');
  var sections = document.querySelectorAll('.card');
  var sectionsArray = [];
  // Collect all sections and push to sectionsArray
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    sectionsArray.push(section);
  }
  window.onscroll = function () {
    //checks if user is at the bottom of page
    var endOfPage =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight
        ? true
        : false;

    //console.log({ endOfPage });

    //
    var scrollPosition = window.pageYOffset;
    for (var i = 0; i < anchorsArray.length; i++) {
      // Get hrefs from each anchor
      var anchorID = anchorsArray[i].getAttribute('href');
      var anchorIndex = anchorsArray[i].getAttribute('data-order');
      var sectionHeight = sectionsArray[i].offsetHeight;
      var sectionTop = sectionsArray[i].offsetTop + sectionHeight + 25;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        document
          .querySelector('nav a[href="' + anchorID + '"]')
          .classList.add('active');
        console.log({ anchorIndex });
        return anchorIndex;
      } else {
        document
          .querySelector('nav a[href="' + anchorID + '"]')
          .classList.remove('active');
        if (endOfPage == true) {
          document
            .querySelector('nav a[href="' + anchorID + '"]')
            .classList.remove('active');
        }
      }
    }
    // console.log({ scrollPosition }, { sectionTop }, { sectionHeight });
  };
})();

///////////////////////
