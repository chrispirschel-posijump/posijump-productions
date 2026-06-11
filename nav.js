document.querySelectorAll('.mobile-menu').forEach((menu) => {
  menu.querySelectorAll('.mobile-menu-panel a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.removeAttribute('open');
    });
  });
});

document.addEventListener('click', (event) => {
  document.querySelectorAll('.mobile-menu[open]').forEach((menu) => {
    if (!menu.contains(event.target)) menu.removeAttribute('open');
  });
});
