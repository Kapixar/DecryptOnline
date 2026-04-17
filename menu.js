function toggleMenu() {
    document.querySelector('#menu').classList.toggle('hidden');
}

function showExitConfirm() {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.className = 'app-confirm-overlay';
        overlay.innerHTML = `
            <div class="app-confirm" role="dialog" aria-modal="true" aria-label="Potwierdzenie wyjscia">
                <div class="app-confirm__title">WYJŚĆ Z GRY?</div>
                <div class="app-confirm__text">Czy na pewno chcesz opuścić ekran?</div>
                <div class="app-confirm__actions">
                    <button type="button" class="app-confirm__btn app-confirm__btn--cancel">ANULUJ</button>
                    <button type="button" class="app-confirm__btn app-confirm__btn--ok">WYJDŹ</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        const dialog = overlay.querySelector('.app-confirm');
        const cancelBtn = overlay.querySelector('.app-confirm__btn--cancel');
        const okBtn = overlay.querySelector('.app-confirm__btn--ok');

        const close = (value) => {
            overlay.remove();
            resolve(value);
        };

        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                close(false);
            }
        });

        cancelBtn.addEventListener('click', () => close(false));
        okBtn.addEventListener('click', () => close(true));
        (okBtn || dialog).focus();
    });
}

const toggleFullscreen = () =>
    document.fullscreenElement ?
        document.exitFullscreen() :
        document.querySelector('body').requestFullscreen()

const bgNode = document.querySelector('#bg');
document.querySelector('#menu-icon').addEventListener('click', toggleMenu);
document.querySelector('#menu-fullscreen').addEventListener('click', toggleFullscreen);
document.querySelector('#menu-exit').addEventListener('click', async () => {
    const shouldExit = await showExitConfirm();
    if (shouldExit) {
        document.location.href = 'index.html';
    }
});

document.querySelector('#menu-battery').addEventListener('click', () => {
    document.body.classList.toggle('battery_saver');

    if (bgNode.classList.contains('hidden')) {
        bgNode.classList.remove('hidden');
    } else {
        bgNode.addEventListener("animationend", (e) => {
            if (e.animationName == 'fadeOut') {
                bgNode.classList.add('hidden');
            }
        });
    }
})