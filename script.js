import QrScanner from './qrcode/qr-scanner.min.js';

const playButton = document.querySelector('#play-button')
const codeInput = document.querySelector('input[type="text"]')
const videoElem = document.querySelector('video')
const videoCheckbox = document.querySelector('#reader input[type="checkbox"]')
const board = document.querySelector('#board');
const cardHolder = document.querySelector('#cardHolder');

const words = [['PRACA', 'OBIAD', 'POGODA', 'HACZYK'], ['PISTOLET', 'MOTYL', 'WEEKEND', 'METRO'], ['OPÓR', 'ORZEŁ', 'BURAK', 'PALIWO'], ['MEDAL', 'WYSPA', 'PRĘDKOŚĆ', 'DRZWI'], ['WYJŚCIE', 'PARYŻ', 'GRZYB', 'KONCERT'], ['RAJ', 'SŁOWNIK', 'PLANETA', 'PILOT'], ['IMPREZA', 'PSZENICA', 'OSZUSTWO', 'ROBOT'], ['PLAGA', 'PRZEPIS', 'BRZUCH', 'PAJĄK'], ['OWCA', 'ŁÓŻKO', 'SEKRETARKA', 'STRES'], ['NAUCZYCIEL', 'KOLACJA', 'CHMURA', 'GAZETA'], ['WODA', 'KOSMOS', 'DOKTOR', 'OBRĄCZKA'], ['ŚNIEG', 'POTWÓR', 'KRASNOLUDEK', 'BRUD'], ['MUCHA', 'SZALEŃSTWO', 'SATELITA', 'TORPEDA'], ['PIRAMIDA', 'SPODNIE', 'SCHODY', 'MARIONETKA'], ['KLEPSYDRA', 'PARKING', 'KUCHNIA', 'PEGAZ'], ['SIATKA', 'ŚCIANA', 'WŁÓCZNIA', 'APOKALIPSA'], ['SYROP', 'CHEMIA', 'SZCZUR', 'IGRZYSKA'], ['DÓŁ', 'ZŁOŚĆ', 'KOŁO', 'CIASTECZKO'], ['KSIĘŻYC', 'KOWBOJ', 'WIADOMOŚĆ', 'LODÓWKA'], ['PIRAT', 'WIECZÓR', 'ZACHÓD', 'PIANINO'], ['NOC', 'SPOŁECZNOŚĆ', 'OPERA', 'PIEKARNIK'], ['PLASTIK', 'OBCY', 'GŁOWA', 'ROZKŁAD'], ['CZAS', 'ARCHEOLOGIA', 'KRZESŁO', 'KOŚCI'], ['NATURA', 'ZBIORNIK', 'LAS', 'KLATKA'], ['SKÓRA', 'KONTAKT', 'PAMIĘĆ', 'CZERŃ'], ['KOŃ', 'DAR', 'OŁÓWEK', 'GUZIK'], ['RELIGIA', 'MIŁOŚĆ', 'CZEKOLADA', 'DACH'], ['PSZCZOŁY', 'MAGIA', 'ZIELEŃ', 'RZEKA'], ['DŻUNGLA', 'PLAŻA', 'ZEGAR', 'KOMPAS'], ['DZIURA', 'AFRYKA', 'DETEKTYW', 'GENIUSZ'], ['ZAKŁAD', 'ŚNIADANIE', 'DZIECIŃSTWO', 'ORZESZEK'], ['CHINY', 'KOBIETA', 'PIŁKA', 'MĘŻCZYZNA'], ['KOMPUTER', 'GNIAZDKO', 'SUKIENKA', 'TRÓJKĄT'], ['CUKIEREK', 'CIEPŁO', 'KŁÓDKA', 'POŁUDNIE'], ['STRZAŁA', 'ALKOHOL', 'ZWŁOKI', 'MYDŁO'], ['INTERNET', 'PINGWIN', 'ZBROJA', 'TELEWIZJA'], ['JĘZYK', 'ŻETON', 'MAGNEZ', 'PIOSENKA'], ['SZPITAL', 'HYDRAULIK', 'SOPOT', 'MYSZ'], ['DYWAN', 'APARAT', 'OWOC', 'BUT'], ['BÓG', 'FILOZOFIA', 'SZTUKI WALKI', 'WYWIAD'], ['BIEL', 'PACZKA', 'ATAK', 'ODRODZENIE'], ['LALKA', 'TARCZA', 'CHOROBA', 'RESTAURACJA'], ['MARZENIE', 'CZAROWNICA', 'ROWER', 'AUSTRALIA'], ['OAZA', 'SAKSOFON', 'UKŁADANKA', 'STRACH'], ['TANIEC', 'MASKA', 'UCHO', 'SERWIS'], ['FLAGA', 'METAL', 'PIKNIK', 'BĘBEN'], ['CYKLOP', 'ŻYRAFA', 'ŁAPÓWKA', 'BOMBA'], ['TAJEMNICA', 'KARETKA', 'OBÓZ', 'BUTELKA'], ['DŁOŃ', 'JEDNOROŻEC', 'JASZCZURKA', 'FUTRO'], ['SANKI', 'TELEFON', 'MASZYNA', 'SZKŁO'], ['ARCHITEKTURA', 'TOALETA', 'WĄS', 'GILOTYNA'], ['NAUKA', 'PORANEK', 'LEK', 'KASA'], ['PIWNICA', 'IGŁA', 'GITARA', 'PSYCHOLOG'], ['TRĄBA', 'WEŁNA', 'RADOŚĆ', 'KANION'], ['JABŁKO', 'LEW', 'KOPIA', 'BIBLIOTEKA'], ['KOMIKS', 'ŻARÓWKA', 'NIEBO', 'KIJ'], ['SEN', 'DOŚWIADCZENIE', 'POLICJA', 'WYPADEK'], ['ZĄB', 'OBRAZ', 'ARMIA', 'PRZYNĘTA'], ['SKRZYDŁO', 'KOSZMAR', 'SAMOLOT', 'PIZZA'], ['WULKAN', 'SYRENA', 'KORONA', 'SER'], ['ZOMBIE', 'MIKROSKOP', 'PIWO', 'CZAPKA'], ['NOWY JORK', 'ŁAŃCUCH', 'WĄŻ', 'GRANAT'], ['MATEMATYKA', 'ROBAK', 'ZAMEK', 'ŻÓŁĆ'], ['SOWA', 'KOC', 'HOTEL', 'SMUTEK'], ['SŁOŃ', 'LUSTRO', 'CIAŁO', 'NOC'], ['NASZYJNIK', 'BURZA', 'KRZYK', 'KOMIN'], ['EGIPT', 'ARKTYKA', 'EKONOMIA', 'DIAMENT'], ['PASAŻER', 'ZIEMIA', 'PRĄD', 'KOT'], ['DUCH', 'ŚLUB', 'PASJONAT', 'ŚLĄSK'], ['DZIECKO', 'TURYSTA', 'JESIEŃ', 'KLAWISZ'], ['ŚWIECA', 'PREHISTORIA', 'OPERACJA', 'OKNO'], ['BIOLOGIA', 'NÓŻ', 'SMOK', 'PROMIEŃ'], ['ŚWINIA', 'DINOZAUR', 'KIESZEŃ', 'ZABÓJCA'], ['WIELORYB', 'PTAK', 'FRANCJA', 'MORZE'], ['GIGANT', 'BIURO', 'LOKOMOTYWA', 'TRUCIZNA'], ['WILKOŁAK', 'SKRZYPCE', 'NOGA', 'RZEŹNIA'], ['CENTAUR', 'KSIĄŻKA', 'DZWON', 'HELIKOPTER'], ['BIELIZNA', 'SZKOŁA', 'DIABEŁ', 'BRODA'], ['WAMPIR', 'PIES', 'MOSTEK', 'RAKIETA'], ['SZTUKA', 'KSIĘŻNICZKA', 'OGRÓD', 'ŚMIERĆ'], ['POEMAT', 'DRAMAT', 'GOLF', 'JAJKO'], ['WOJNA', 'ELF', 'PIERWIASTEK', 'RZEŹBA'], ['BARAK', 'MUZEUM', 'MIÓD', 'RÓG'], ['OJCIEC', 'KORZEŃ', 'NARODZINY', 'GÓRA'], ['ROSJA', 'NIEMCY', 'TRADYCJA', 'ARYSTOKRATA'], ['STÓŁ', 'ZDJĘCIE', 'GRA', 'SMAK'], ['KLUCZ', 'KLESZCZE', 'TUSZ', 'REWOLUCJA'], ['TWARZ', 'LABORATORIUM', 'MNICH', 'CYRK'], ['MIECZ', 'LABIRYNT', 'PIEKŁO', 'PIÓRO'], ['WALIZKA', 'JASKINIA', 'KAWA', 'BAWEŁNA'], ['ZIMA', 'BANAN', 'GARNITUR', 'ŚCIEŻKA'], ['PERFUMY', 'BANK', 'KINO', 'MŁOT'], ['ZOO', 'ŁÓDŹ PODWODNA', 'DESZCZ', 'ENERGIA'], ['MUZYK', 'KLEJ', 'MARCHEWKA', 'SPORTOWIEC'], ['ŁUK', 'WŁAMANIE', 'POKÓJ', 'PRZERWA'], ['ŻABA', 'WILK', 'POLOWANIE', 'DRUT'], ['ORKIESTRA', 'KOŚCIÓŁ', 'ANTYK', 'RAMIĘ'], ['LATO', 'KREW', 'PIEKARNIK', 'SAMOCHÓD'], ['ŁÓDKA', 'SPADOCHRON', 'SKLEP', 'MONUMENT'], ['CHLEB', 'WIEŻA', 'KLON', 'LEGENDA'], ['WYBORY', 'POMARAŃCZA', 'INDEKS', 'CZERWIEŃ'], ['ŻÓŁW', 'WINDA', 'AGENT', 'BASEN'], ['GWIAZDA', 'MATKA', 'KOKTAJL', 'TĘCZA'], ['GRANICA', 'WIEWIÓRKA', 'DOMINO', 'EXPRESS'], ['SŁUGA', 'PUSTYNIA', 'OŚMIORNICA', 'WAKACJE'], ['KALENDARZ', 'ARMATA', 'TEATR', 'KWADRAT'], ['ŚMIECH', 'FANTASTYKA', 'STOPA', 'CEGŁA'], ['PERŁA', 'OGIEŃ', 'KONKURS', 'KRÓL'], ['WIOSNA', 'PAW', 'KAMELEON', 'NUREK'], ['MAFIA', 'KONSTRUKCJA', 'HORROR', 'KANAPKA']]
const colors = ['black', 'white']
const kolory = ['CZARNI', 'BIALI']

const qrScanner = new QrScanner(
    videoElem,
    decodedText => {
        const gameCode = decodedText.data.slice(-8);
        console.log(gameCode);
        generateGame(gameCode);
    },
    {
        preferredCamera: 'environment',
        // highlightScanRegion	: true,
        calculateScanRegion(a) {
            let b = a.videoWidth;
            let c = b / 1.5;
            return {
                x: 0,
                y: Math.round((a.videoHeight - b) / 2),
                width: b,
                height: b,
                downScaledWidth: c,
                downScaledHeight: c
            }
        }
    }
)

// get param c from url
const urlParams = new URLSearchParams(window.location.search);
const c = urlParams.get('c');
if (c) generateGame(c);

QrScanner.listCameras().then(devices => {
    console.log('Available cameras:', devices);
})

qrScanner.setInversionMode('invert');

videoCheckbox.addEventListener('change', () => {
    if (videoCheckbox.checked) {
        qrScanner.start();
        videoElem.style.opacity = 1;
    } else {
        qrScanner.stop();
        videoElem.style.opacity = 0;
    }
})

function displayCodeCard(text, colorID = 0) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(colors[colorID]);

    const cardText = document.createElement('div');
    cardText.classList.add('cardUI');
    cardText.textContent = text;
    card.appendChild(cardText);

    cardHolder.appendChild(card);
    card.animate([ { transform: 'translateY(100%)' }, { transform: 'translateY(0%)' } ], { duration: 700, easing: 'ease-in-out' });

    addCardClick(card);
}

function displayLinkCard(text, url, colorID = 0) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(colors[colorID]);

    const cardText = document.createElement('div');
    cardText.classList.add('cardUI');
    cardText.textContent = text;
    card.appendChild(cardText);

    cardHolder.appendChild(card);

    card.animate([ { transform: 'translateY(100%)' }, { transform: 'translateY(0%)' } ], { duration: 700, easing: 'ease-in-out' });

    card.addEventListener('click', () => {
        window.location.href = url;
    }, { once: true })
}

function displayQRCodeCard(data, colorID = 0) {
    const card = document.createElement('div');
    card.id = `qrcode-${data}`;
    card.classList.add('card', 'qrcode');
    card.classList.add(colors[colorID]);

    cardHolder.appendChild(card);

    new QRCode(card.id, {
        text: data,
        colorDark : "#ff6d6b",
        colorLight : "#680e07",

        correctLevel : QRCode.CorrectLevel.M
    });

    card.animate([ { transform: 'translateY(100%)' }, { transform: 'translateY(0%)' } ], { duration: 700, easing: 'ease-in-out' });

    addCardClick(card);
}

function addCardClick(card) {
    card.addEventListener('click', () => {
        if (document.webkitFullscreenEnabled) {
            document.body.requestFullscreen();
            screen.orientation.lock('landscape');
        }
        board.classList.add('shown');
        document.querySelectorAll('#cardHolder .card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('slide-down');
                card.addEventListener('transitionend', () => {
                    card.remove();
                });
            }, 100 * index);
        });  
    }, { once: true })
}






playButton.addEventListener('click', () => { generateGame(codeInput.value) })

codeInput.oldValue = ''
codeInput.addEventListener('input', (e) => {
    if (!/^[0-9a-fA-F]+$|^$/.test(e.target.value.toString()))
        return codeInput.value = codeInput.oldValue
    codeInput.value = codeInput.value.toUpperCase()
    codeInput.oldValue = codeInput.value
})

codeInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") generateGame(codeInput.value)
});


function generateGame(code) {
    if (code.length < 7 && code.length != 0) return
    qrScanner.stop()
    let banned = [], team = 0

    codeInput.readOnly = true;

    if (code != '') {
        let codeBin = hex2bin(code)
        console.log(code);
        team = 1 - codeBin[31]
        console.log(codeBin, team);
        for (let i = 0; i < 28; i += 7) banned.push(parseInt(codeBin.slice(i, i + 7), 2))
        displayCodeCard("START",  codeBin[31]);

        if(window.location.href.includes('?c=')) {
            let hrefUrl = window.location.href;
            if(hrefUrl.includes('.html')) 
                hrefUrl = hrefUrl.replace('index.html', 'code.html');
            else 
            hrefUrl = hrefUrl.replace('?c=', 'code.html?c=');
            displayLinkCard("C0DES", hrefUrl, 1 - team);
        }
    } else
        team = Math.round(Math.random())

    board.setAttribute('data-c', kolory[team])
    const available = new Array(words.length).fill(0).map((v, i) => i).filter(x => !banned.includes(x));
    const deck = available.sort(() => (Math.random() > 0.5) ? 1 : -1).slice(0, 4)

    if (code == '') {
        let codeBin = ''
        for (const x of deck) {
            codeBin += x.toString(2).padStart(7, '0')
        }
        codeBin += `000${team}`
        const codeHex = parseInt(codeBin, 2).toString(16).toUpperCase()
        displayCodeCard(codeHex, 1 - team);
        // displayQRCodeCard(`https://192.168.1.23:5500?c=${codeHex}`, 1 - team);
        displayQRCodeCard(`${window.location.href}?c=${codeHex}`, 1 - team);
    }

    // team = team == undefined ? 0 : team;

    document.querySelector('#board img').src = `./img/${colors[team]}_board_front.webp`
    document.body.classList.add('game')

    const codes = deck.map(id => words[id][Math.floor(Math.random() * 4)]);

    for (let phrazes of codes) {
        const key = document.createElement('div')
        key.classList.add('key')
        let len = phrazes.split(' ')[0].length
        if (len > 9)
            key.style.fontSize = `${1.9}cqw`
        else if (len > 7)
            key.style.fontSize = `${2.5}cqw`
        key.textContent = phrazes;
        key.setAttribute('data-n', 4-codes.indexOf(phrazes))
        board.prepend(key)
    }

    handleScreen();
}

function hex2bin(hex) {
    return (parseInt(hex, 16).toString(2)).padStart(32, '0');
}

async function handleScreen(){
    window.history.pushState({}, '', '')
    document.body.requestFullscreen()
    screen.orientation.lock('landscape');
    let wakeLock = null;
    try {
        wakeLock = await navigator.wakeLock.request("screen");
    } catch (err) {
        console.log(`${err.name}, ${err.message}`);
    }
    window.addEventListener("popstate", (e) => {
        e.preventDefault();
        window.location.reload()
    });
}