

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
    var ex = document.getElementById('top')

    if (hide.style.display=="flex") {
      hide.style.display ='none'
      show.style.display = 'none'
      ex.style.display = 'none'
    }
    else {
      hide.style.display ='flex'
      show.style.display = 'flex'
      ex.style.display = 'flex'
    }
  })