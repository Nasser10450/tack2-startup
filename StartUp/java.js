window.addEventListener('scroll', function() {
    var nav = document.getElementById('navbar');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition >= 300) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
    });

/*///////////////////////////////////////////////////////*/


