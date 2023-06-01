
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
let selectedThumbnail = null;
    // Add click event for each thumbnail
thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener("click", function() {
    var imageLink = thumbnail.getAttribute("src");
    majorImage.setAttribute("src", imageLink);
    if (selectedThumbnail) {
        // If thumbnail is not selected then there will be no border
        selectedThumbnail.style.border = "none";
      }
      thumbnail.style.border = "1.5px solid black";
      //update states
      selectedThumbnail = thumbnail;
    });
});
// Change product colour

let colourGreen = document.getElementById("colourGreen");
let colourWhite = document.getElementById("colourWhite");
let colourPink = document.getElementById("colourPink");
let colourBrown = document.getElementById("colourBrown")
function changeColourGreen(){
    window.location.href = "productDetails-1.html";
}
function changeColourWhite(){
    window.location.href = "productDetails-1-white.html";
}
function changeColourPink(){
  window.location.href = "productDetails-2.html";
}
function changeColourBrown(){
  window.location.href = "productDetails-2-brown.html";
}


// for icon change
function iconChange() {
  var icon = document.getElementById('layoutbutton');
  var contain =document.getElementById('cont')
  if (icon.src.match('Wechat')) {
      icon.src = 'images/icons/layout.png';
      contain.style.justifyContent = 'center';
  } else {
      icon.src ='images/icons/WechatIMG53762.png';
      contain.style.justifyContent = 'space between';
  }
}

// hover  picture 1
function picture1() {
var icon = document.getElementById('spcial1');
if (icon.src.match('Pink')) {
    icon.src = 'images/checkout/Palm-Collective-Checkerboard-Dress-Brown-A-1-1.webp';
} else {
    icon.src ='images/product-list/Palm-Collective-Checkerboard-Dress-Pink-A-1-1-1.webp';
}
}
function picture1_1() {
var icon = document.getElementById('spcial1');
if (icon.src.match('Brown')) {
    icon.src = 'images/product-list/Palm-Collective-Checkerboard-Dress-Pink-A-1-1-1.webp';
} else {
    icon.src = 'images/checkout/Palm-Collective-Checkerboard-Dress-Brown-A-1-1.webp';
}
}
// hover product 2
function picture2() {
var icon = document.getElementById('special2');
if (icon.src.match('Green')) {
    icon.src = 'images/productdetail/Adorne-Sofia-Top-White-A-1-1.webp';
} else {
    icon.src ='images/product-list/Adorne-Sofia-Top-Green-A-1-1.webp';
}
}

function picture2_2() {
var icon = document.getElementById('special2');
if (icon.src.match('White')) {
    icon.src = 'images/product-list/Adorne-Sofia-Top-Green-A-1-1.webp';
} else {
    icon.src ='images/productdetail/Adorne-Sofia-Top-White-A-1-1.webp';
}
}

// hover product 3 

function picture3() {
var icon = document.getElementById('special3');
if (icon.src.match('Pink')) {
    icon.src = 'images/product-list/Adorne-Keely-Hoops-Sage-Green-1.webp';
} else {
    icon.src ='images/product-list/Adorne-Keely-Hoops-Pale-Pink-1.webp';
}
}

function picture3_3() {
var icon = document.getElementById('special3');
if (icon.src.match('Green')) {
    icon.src = 'images/product-list/Adorne-Keely-Hoops-Pale-Pink-1.webp';
} else {
    icon.src ='images/product-list/Adorne-Keely-Hoops-Sage-Green-1.webp';
}
}

// for change image size
document.getElementById('layoutbutton').addEventListener('click', function() {
  var images = document.getElementsByClassName('product');
  for (var i = 0; i < images.length; i++) {
    if (images[i].style.width == '48%') {
      images[i].style.width = 'auto';
    }
    else {
      images[i].style.width = '48%';
    }
  }
});

// expand filter area and hide 
document.getElementById('filter').addEventListener('click',function() {
  var width = window.innerWidth
  var hide = document.getElementById("filter-lap");
  var show = document.getElementById("confirm");
  var ex = document.getElementById('top');

  // mobile varibles
  var hideMob = document.getElementById("mobile-filter");



  if (width > 850) {
    if (hide.style.display == "flex") {
      hide.style.display = 'none';
      show.style.display = 'none';
      ex.style.display = 'none';
    } else {
      hide.style.display = 'flex';
      show.style.display = 'flex';
      ex.style.display = 'flex';
    }
  } else {
    if (hideMob.style.display =='none'){
      hideMob.style.display ='flex';
    }
    else {
      hideMob.style.display ='none';
    }
  }    
})


// cancel all windows

function cancel () {
// mobile filter
var a = document.getElementById("mobile-filter");
// pc filter 
var b = document.getElementById("filter-lap");
var c = document.getElementById("confirm");
var d = document.getElementById('top');

a.style.display='none';
b.style.display='none';
c.style.display='none';
d.style.display='none';


}



// expand menue
function expand() {
    var wid = document.getElementById("ex");
    wid.style.display='flex';
}

// undo expland
function back() {
var wid = document.getElementById("ex");
wid.style.display='none';

}
// show bag 
function showbag() {
  var bag =document.getElementById("bag");
  bag.style.display = "flex";
}
// hide bag
function hidebag() {

  var hide = document.getElementById("bag");
  hide.style.display = 'none';
}

//show sub items

function showItems() {
  var show = document.getElementById("drop");
  if ( show.style.display = 'none') {
    show.style.display = 'flex';
  }else {
    show.style.display = 'none';
  }
}



//go to previous page
function gotoPrevious(){
  window.history.back();
}
