function dropdownShow() {
    let dropdown = document.querySelector('.size-picker');
    dropdown.classList.toggle("showDropdown");
  }
// JS for product information mobile
var infoBtn = document.querySelector(".info-btn");
var content = document.querySelector(".info-content-mobile");

infoBtn.addEventListener('click', function() {
  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
});
