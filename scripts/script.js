
//JS for dropdown
function dropdownShow() {
    let dropdown = document.querySelector('.size-picker');
    dropdown.classList.toggle("showDropdown");
  }
// JS for product information mobile
let infoBtn = document.querySelector(".info-btn");
let content = document.querySelector(".info-content-mobile");

infoBtn.addEventListener('click', function() {
  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
});

// JS for thumbnails exchange
let thumbnails = document.querySelectorAll(".thumbnail");
let majorImage = document.getElementById("majorImage");
    // Add click event for each thumbnail
thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener("click", function() {
    var imageLink = thumbnail.getAttribute("src");
    majorImage.setAttribute("src", imageLink);
  });
});
