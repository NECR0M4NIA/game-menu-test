const $btnContainer = document.querySelector('.btn-container');
const $playBtn = document.getElementById('play-btn');
const $galleryBtn = document.getElementById('gallery-btn');
const $settingsBtn = document.getElementById('settings-btn');
const $creditsBtn = document.getElementById('credits-btn');
const $quitBtn = document.getElementById('quit-btn');

const $settingsContainer = document.querySelector('.settings-container');

const btns = [
    $playBtn,
    $galleryBtn,
    $settingsBtn,
    $creditsBtn,
    $quitBtn
];

function app() {
    let activeBtn = null; // stocke le bouton actif

    const highlightBtn = (btn) => {
        if (activeBtn === btn) {
            // Si on reclique sur le même bouton -> tout revient normal
            btns.forEach(b => {
                b.style.color = "#ffffffff";
                b.style.textShadow = "none";
                b.disabled = false;
            });
            activeBtn = null;
            return;
        }

        // Sinon -> nouveau bouton actif
        btns.forEach(b => {
            if (b === btn) {
                b.style.color = "#FFF";
                b.style.textShadow = "0 0 96px #FFF";
            } else {
                b.style.color = "#333333ff";
                b.style.textShadow = "none";
            }
            b.disabled = false; // tous restent cliquables
        });

        activeBtn = btn;
    };

    $playBtn.addEventListener('click', () => {
        btns.forEach(btn => btn.disabled = true);
        $btnContainer.classList.add('hidden');
        activeBtn = null; // reset état
    });

    $galleryBtn.addEventListener('click', () => highlightBtn($galleryBtn));
    $settingsBtn.addEventListener('click', () => highlightBtn($settingsBtn));
    $creditsBtn.addEventListener('click', () => highlightBtn($creditsBtn));

    $quitBtn.addEventListener('click', () => {
        window.close();
    });
}



app();