const position = document.querySelector('.mouse-position');

window.addEventListener('mousemove', (e) => {
    /*position.style.left = `${e.pageX}px`;
    position.style.top = `${e.pageY}px`;
    position.innerHTML = `X: ${e.pageX}, Y: ${e.pageY}`;*/

    position.innerHTML = `<div id="mouse-position" class="mouse-position">X:${e.clientX} , Y:${e.clientY}</div>`
});