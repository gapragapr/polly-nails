function popupOpen(open = true){
    const popupItem = document.getElementById('popup');
    popupItem.style.display = open ? 'flex' : 'none';
}

function hamburgerOpen(open = true){
    const hamburger = document.getElementById('hamburger-menu');
    hamburger.style.opacity = open ? '1' : '0';
    hamburger.style.height = open ? '300px' : '0';
}