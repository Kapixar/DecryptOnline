function toggleMenu() {
    document.querySelector('#menu').classList.toggle('hidden');
}

function isGameRunning() {
    return document.body.classList.contains('game');
}

function togglePauseOverlay() {
    if (!isGameRunning()) return;

    const existingOverlay = document.querySelector('.app-pause-overlay');
    if (existingOverlay) {
        existingOverlay.classList.add('is-closing');
        existingOverlay.addEventListener('animationend', () => existingOverlay.remove(), { once: true });
        document.body.classList.remove('paused');
        return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'app-pause-overlay';
    overlay.innerHTML = `
        <button type="button" class="app-pause-button" aria-label="Wznow gre">
            <img alt="Pause" src="img/pause.png" />
        </button>
    `;

    const pauseButton = overlay.querySelector('.app-pause-button');
    const closeOverlay = () => {
        overlay.classList.add('is-closing');
        overlay.addEventListener('animationend', () => overlay.remove(), { once: true });
        document.body.classList.remove('paused');
    };

    pauseButton.addEventListener('click', closeOverlay);
    document.body.appendChild(overlay);
    document.body.classList.add('paused');
}

function showAppConfirm({ title, text, okText, cancelText = null, ariaLabel }) {
    return new Promise((resolve) => {
        const CLOSE_MS = 220;
        const actionsClass = cancelText ? 'app-confirm__actions' : 'app-confirm__actions app-confirm__actions--single';
        const cancelButtonHtml = cancelText ? `<button type="button" class="app-confirm__btn app-confirm__btn--cancel">${cancelText}</button>` : '';
        const overlay = document.createElement('div');
        overlay.className = 'app-confirm-overlay';
        overlay.innerHTML = `
            <div class="app-confirm" role="dialog" aria-modal="true" aria-label="${ariaLabel}">
                <div class="app-confirm__title">${title}</div>
                <div class="app-confirm__text">${text}</div>
                <div class="${actionsClass}">
                    ${cancelButtonHtml}
                    <button type="button" class="app-confirm__btn app-confirm__btn--ok">${okText}</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        const dialog = overlay.querySelector('.app-confirm');
        const cancelBtn = overlay.querySelector('.app-confirm__btn--cancel');
        const okBtn = overlay.querySelector('.app-confirm__btn--ok');
        let isClosing = false;

        const close = (value) => {
            if (isClosing) return;
            isClosing = true;
            overlay.classList.add('is-closing');
            dialog.classList.add('is-closing');
            setTimeout(() => overlay.remove(), CLOSE_MS);
            resolve(value);
        };

        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                close(false);
            }
        });

        if (cancelBtn) cancelBtn.addEventListener('click', () => close(false));
        okBtn.addEventListener('click', () => close(true));
        (okBtn || dialog).focus();
    });
}

window.showAppConfirm = showAppConfirm;

function showExitConfirm() {
    return showAppConfirm({
        title: 'WYJŚĆ Z GRY?',
        text: 'Czy na pewno chcesz opuścić ekran?',
        okText: 'WYJDŹ',
        cancelText: 'ANULUJ',
        ariaLabel: 'Potwierdzenie wyjscia'
    });
}

const toggleFullscreen = () =>
    document.fullscreenElement ?
        document.exitFullscreen() :
        document.querySelector('body').requestFullscreen()

const menuNode = document.querySelector('#menu');
let menuBlinkTimeout;

function blinkMenuOnGameLaunch() {
    if (!isGameRunning()) return;

    menuNode.classList.remove('menu-launch-hint');
    void menuNode.offsetWidth;
    menuNode.classList.add('menu-launch-hint');

    clearTimeout(menuBlinkTimeout);
    menuBlinkTimeout = setTimeout(() => {
        menuNode.classList.remove('menu-launch-hint');
    }, 3000);
}

const bgNode = document.querySelector('#bg');
document.querySelector('#menu-icon').addEventListener('click', toggleMenu);
document.querySelector('#menu-pause').addEventListener('click', togglePauseOverlay);
document.querySelector('#menu-fullscreen').addEventListener('click', toggleFullscreen);
window.addEventListener('game-started', blinkMenuOnGameLaunch);

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