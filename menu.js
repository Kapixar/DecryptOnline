function toggleMenu() {
    document.querySelector('#menu').classList.toggle('hidden');
}

const toggleFullscreen = () => 
    document.fullscreenElement ?
        document.exitFullscreen() :
        document.querySelector('body').requestFullscreen()

const bgNode = document.querySelector('#bg');
document.querySelector('#menu-icon').addEventListener('click', toggleMenu);
document.querySelector('#menu-fullscreen').addEventListener('click', toggleFullscreen);
document.querySelector('#menu-exit').addEventListener('click', () => {
    if(confirm('Are you sure you want to exit?')) {
        document.location.href = 'index.html';
    }
});

document.querySelector('#menu-battery').addEventListener('click', () => { 
    document.body.classList.toggle('battery_saver');

    if (bgNode.classList.contains('hidden')) {
        bgNode.classList.remove('hidden');
    } else {
        bgNode.addEventListener("animationend", (e) => {
            if(e.animationName == 'fadeOut') {
                bgNode.classList.add('hidden');
            }
        });
    }
})