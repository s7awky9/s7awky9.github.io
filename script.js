function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // التبديل بين عرض وإخفاء القائمة
  menu.classList.toggle("open");

  // التبديل بين الأيقونة "hamburger" و "close"
  icon.classList.toggle("open");

  // إضافة أو إزالة التمرير
  document.body.classList.toggle("no-scroll", menu.classList.contains("open"));
}
