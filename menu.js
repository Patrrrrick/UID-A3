function showMenu(menu) {
    var menuElement = document.getElementById('dropMenu' + menu.charAt(0).toUpperCase() + menu.slice(1));
    if(menuElement) {
        menuElement.style.display = 'flex';
    }
}

function hideMenu(menu) {
    var menuElement = document.getElementById('dropMenu' + menu.charAt(0).toUpperCase() + menu.slice(1));
    if(menuElement) {
        menuElement.style.display = 'none';
    }
}