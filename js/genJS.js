function moveButton() {
    var el = document.getElementById("footer"); 
    var pos = 630;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 500) {
            clearInterval(id);
        } else {
            pos--; 
            el.style.top = pos + 'px'; 
        }
    }
}