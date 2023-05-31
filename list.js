

// for icon change
function iconChange() {
    var icon = document.getElementById('layoutbutton');
    if (icon.src.match('Wechat')) {
        icon.src = 'images/icons/layout.png'
    } else {
        icon.src ='images/icons/WechatIMG53762.png'
    }
}


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