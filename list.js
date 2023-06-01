

// for icon change
function iconChange() {
    var icon = document.getElementById('layoutbutton');
    if (icon.src.match('Wechat')) {
        icon.src = 'images/icons/layout.png'
    } else {
        icon.src ='images/icons/WechatIMG53762.png'
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
    var hide = document.getElementById("filter-lap");
    var show = document.getElementById("confirm");

    if (hide.style.display=="flex") {
      hide.style.display ='none'
      show.style.display = 'none'
    }
    else {
      hide.style.display ='flex'
      show.style.display = 'flex'
    }
  })