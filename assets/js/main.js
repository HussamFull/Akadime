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



