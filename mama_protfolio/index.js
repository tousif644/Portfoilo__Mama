let mouse_cursor = document.querySelector('.cursor');
let nav_links  = document.querySelectorAll(".navbar a");

window.addEventListener('mousemove',cursor);

function cursor(e){
    mouse_cursor.style.top = e.pageY + "px";
    mouse_cursor.style.left = e.pageX + "px";
}


// alert(window.outerWidth+' x '+window.outerHeight);