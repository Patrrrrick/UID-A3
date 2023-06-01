

// for icon change
function iconChange() {
    var icon = document.getElementById('layoutbutton');
    var contain =document.getElementById('cont')
    if (icon.src.match('Wechat')) {
        icon.src = 'images/icons/layout.png'
        contain.style.justifyContent = 'center'
    } else {
        icon.src ='images/icons/WechatIMG53762.png'
        contain.style.justifyContent = 'space between'

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
    var ex = document.getElementById('top')

    // mobile varibles
    var hideMob = document.getElementById("mobile-filter");



    if (width > 850) {
      if (hide.style.display == "flex") {
        hide.style.display = 'none'
        show.style.display = 'none'
        ex.style.display = 'none'
      } else {
        hide.style.display = 'flex'
        show.style.display = 'flex'
        ex.style.display = 'flex'
      }
    } else {
      if (hideMob.style.display =='none'){
        hideMob.style.display ='flex'
      }
      else {
        hideMob.style.display ='none'
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
  var d = document.getElementById('top')

  a.style.display='none'
  b.style.display='none'
  c.style.display='none'
  d.style.display='none'


}



// expand menue

  function expand() {
      var wid = document.getElementById("ex");
      wid.style.width = "40%";
  }
// show bag 
  function showbag() {
    var bag =document.getElementById("bag")
    bag.style.display = "flex"
  }
// hide bag
  function hidebag() {

    var hide = document.getElementById("bag")
    hide.style.display = 'none'
  }