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
  // header.style.filter = 'opacity(' + radiusCount / offset + ')';
});

/////////////////////////////////  https://codepen.io/neiya/pen/VwLqQPO?editors=1010

//setInterval(changeOrder, 2000);

function changeOrder(index) {
  const allIndicators = document.querySelectorAll('.indicator');
  /*const one = '1';
  const two = '2';
  const three = '3';
  const four = '4';*/

  for (const slide of allIndicators) {
    //const order = slide.getAttribute('data-order');
    const order = index;
    switch (order) {
      case '0':
        slide.setAttribute('data-order', 1);
        break;
      case '1':
        slide.setAttribute('data-order', 2);
        break;
      case '2':
        slide.setAttribute('data-order', 3);
        break;
      case '3':
        slide.setAttribute('data-order', 4);
        break;
      case '4':
        slide.setAttribute('data-order', 0);
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
    var bottomOfPage =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight
        ? true
        : false;

    //
    var scrollPosition = window.pageYOffset;
    for (var i = 0; i < anchorsArray.length; i++) {
      // Get hrefs from each anchor
      var anchorID = anchorsArray[i].getAttribute('href');
      var anchorIndex = anchorsArray[i].getAttribute('data-order');
      var sectionHeight = sectionsArray[i].offsetHeight;
      var margins = window.getComputedStyle(document.querySelector('.card'));
      var vMargin =
        parseInt(margins.getPropertyValue('margin-top')) +
        parseInt(margins.getPropertyValue('margin-bottom'));
      var sectionTop = sectionsArray[i].offsetTop + sectionHeight - vMargin;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        document
          .querySelector('nav a[href="' + anchorID + '"]')
          .classList.add('active');
        changeOrder(anchorIndex);
        if (bottomOfPage) {
          document
            .querySelector('nav a[href="' + anchorID + '"]')
            .classList.add('active');
          console.log(bottomOfPage, { anchorID });
        }
      } else {
        document
          .querySelector('nav a[href="' + anchorID + '"]')
          .classList.remove('active');
      }
    }
    // console.log({ scrollPosition }, { sectionTop }, { sectionHeight });
  };
})();

function PagePosition() {
  var topOfPage;
  //var bottomOfPage;

  window.pageYOffset < 250 &&
    (topOfPage = document
      .getElementById('active-indicator')
      .setAttribute('data-order', 0));
}

window.addEventListener('scroll', PagePosition);

///////////////////////
