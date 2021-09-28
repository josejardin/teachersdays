if(window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href)
}

document.addEventListener('contextmenu', function(e){
    e.preventDefault();
});