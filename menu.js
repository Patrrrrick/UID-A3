document.getElementById('layoutbutton').addEventListener('click',function() {
    var oldimage = document.getElementById('layoutbutton');
    if (oldimage.scroll.match('images/icons/WechatIMG53762.png')) {
        oldimage.src = 'UID-A3/images/icons/WechatIMG53761.png';
    } else {
        oldimage.src ='images/icons/WechatIMG53762.png';
    }
});



function iconChange() {
    var icon = document.getElementById('layoutbutton');
    if (icon.src.match('Wechat')) {
        icon.src = 'images/icons/layout.png'
    } else {
        icon.src ='images/icons/WechatIMG53762.png'
    }
}