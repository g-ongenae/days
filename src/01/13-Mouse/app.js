document.onmousemove = function(event) {
    document
        .getElementById('message')
        .innerText = "(" +
            event.clientX +
            ", " +
            event.clientY +
            ")";
}