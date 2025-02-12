document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("active");
});

document.querySelector('.dropdown').addEventListener('click', function () {
  const content = this.querySelector('.dropdown-content');
  content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
});