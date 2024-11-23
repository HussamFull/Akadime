  /**
   *  Start Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

/*  End Scroll top button  */ 


/*  Start   Navbar Active   */ 


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // إزالة فئة active من جميع العناصر
        navLinks.forEach(link => link.classList.remove('active'));

        // إضافة فئة active للعنصر الحالي
        link.classList.add('active');
    });
});


/*  End   Navbar Active   */ 
