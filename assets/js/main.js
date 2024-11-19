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






// افترض أن لدينا قائمة عناصر في النافبار مع فئة "nav-item"
const navLinks = document.querySelectorAll('.nav-item a');

// الحصول على عنوان URL الحالي
const currentUrl = window.location.href;

// مقارنة كل عنصر في القائمة مع عنوان URL الحالي وإضافة الكلاس النشط
navLinks.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});


