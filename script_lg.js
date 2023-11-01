const playButton = document.querySelector('#play-button')
const bateryButton = document.querySelector("body > span")

const gameSection = document.querySelector('body > section')
const board1 = document.querySelector('#board1');
const board2 = document.querySelector('#board2');

const words = [['PRACA', 'OBIAD', 'POGODA', 'HACZYK'], ['PISTOLET', 'MOTYL', 'WEEKEND', 'METRO'], ['OPÓR', 'ORZEŁ', 'BURAK', 'PALIWO'], ['MEDAL', 'WYSPA', 'PRĘDKOŚĆ', 'DRZWI'], ['WYJŚCIE', 'PARYŻ', 'GRZYB', 'KONCERT'], ['RAJ', 'SŁOWNIK', 'PLANETA', 'PILOT'], ['IMPREZA', 'PSZENICA', 'OSZUSTWO', 'ROBOT'], ['PLAGA', 'PRZEPIS', 'BRZUCH', 'PAJĄK'], ['OWCA', 'ŁÓŻKO', 'SEKRETARKA', 'STRES'], ['NAUCZYCIEL', 'KOLACJA', 'CHMURA', 'GAZETA'], ['WODA', 'KOSMOS', 'DOKTOR', 'OBRĄCZKA'], ['ŚNIEG', 'POTWÓR', 'KRASNOLUDEK', 'BRUD'], ['MUCHA', 'SZALEŃSTWO', 'SATELITA', 'TORPEDA'], ['PIRAMIDA', 'SPODNIE', 'SCHODY', 'MARIONETKA'], ['KLEPSYDRA', 'PARKING', 'KUCHNIA', 'PEGAZ'], ['SIATKA', 'ŚCIANA', 'WŁÓCZNIA', 'APOKALIPSA'], ['SYROP', 'CHEMIA', 'SZCZUR', 'IGRZYSKA'], ['DÓŁ', 'ZŁOŚĆ', 'KOŁO', 'CIASTECZKO'], ['KSIĘŻYC', 'KOWBOJ', 'WIADOMOŚĆ', 'LODÓWKA'], ['PIRAT', 'WIECZÓR', 'ZACHÓD', 'PIANINO'], ['NOC', 'SPOŁECZNOŚĆ', 'OPERA', 'PIEKARNIK'], ['PLASTIK', 'OBCY', 'GŁOWA', 'ROZKŁAD'], ['CZAS', 'ARCHEOLOGIA', 'KRZESŁO', 'KOŚCI'], ['NATURA', 'ZBIORNIK', 'LAS', 'KLATKA'], ['SKÓRA', 'KONTAKT', 'PAMIĘĆ', 'CZERŃ'], ['KOŃ', 'DAR', 'OŁÓWEK', 'GUZIK'], ['RELIGIA', 'MIŁOŚĆ', 'CZEKOLADA', 'DACH'], ['PSZCZOŁY', 'MAGIA', 'ZIELEŃ', 'RZEKA'], ['DŻUNGLA', 'PLAŻA', 'ZEGAR', 'KOMPAS'], ['DZIURA', 'AFRYKA', 'DETEKTYW', 'GENIUSZ'], ['ZAKŁAD', 'ŚNIADANIE', 'DZIECIŃSTWO', 'ORZESZEK'], ['CHINY', 'KOBIETA', 'PIŁKA', 'MĘŻCZYZNA'], ['KOMPUTER', 'GNIAZDKO', 'SUKIENKA', 'TRÓJKĄT'], ['CUKIEREK', 'CIEPŁO', 'KŁÓDKA', 'POŁUDNIE'], ['STRZAŁA', 'ALKOHOL', 'ZWŁOKI', 'MYDŁO'], ['INTERNET', 'PINGWIN', 'ZBROJA', 'TELEWIZJA'], ['JĘZYK', 'ŻETON', 'MAGNEZ', 'PIOSENKA'], ['SZPITAL', 'HYDRAULIK', 'SOPOT', 'MYSZ'], ['DYWAN', 'APARAT', 'OWOC', 'BUT'], ['BÓG', 'FILOZOFIA', 'SZTUKI WALKI', 'WYWIAD'], ['BIEL', 'PACZKA', 'ATAK', 'ODRODZENIE'], ['LALKA', 'TARCZA', 'CHOROBA', 'RESTAURACJA'], ['MARZENIE', 'CZAROWNICA', 'ROWER', 'AUSTRALIA'], ['OAZA', 'SAKSOFON', 'UKŁADANKA', 'STRACH'], ['TANIEC', 'MASKA', 'UCHO', 'SERWIS'], ['FLAGA', 'METAL', 'PIKNIK', 'BĘBEN'], ['CYKLOP', 'ŻYRAFA', 'ŁAPÓWKA', 'BOMBA'], ['TAJEMNICA', 'KARETKA', 'OBÓZ', 'BUTELKA'], ['DŁOŃ', 'JEDNOROŻEC', 'JASZCZURKA', 'FUTRO'], ['SANKI', 'TELEFON', 'MASZYNA', 'SZKŁO'], ['ARCHITEKTURA', 'TOALETA', 'WĄS', 'GILOTYNA'], ['NAUKA', 'PORANEK', 'LEK', 'KASA'], ['PIWNICA', 'IGŁA', 'GITARA', 'PSYCHOLOG'], ['TRĄBA', 'WEŁNA', 'RADOŚĆ', 'KANION'], ['JABŁKO', 'LEW', 'KOPIA', 'BIBLIOTEKA'], ['KOMIKS', 'ŻARÓWKA', 'NIEBO', 'KIJ'], ['SEN', 'DOŚWIADCZENIE', 'POLICJA', 'WYPADEK'], ['ZĄB', 'OBRAZ', 'ARMIA', 'PRZYNĘTA'], ['SKRZYDŁO', 'KOSZMAR', 'SAMOLOT', 'PIZZA'], ['WULKAN', 'SYRENA', 'KORONA', 'SER'], ['ZOMBIE', 'MIKROSKOP', 'PIWO', 'CZAPKA'], ['NOWY JORK', 'ŁAŃCUCH', 'WĄŻ', 'GRANAT'], ['MATEMATYKA', 'ROBAK', 'ZAMEK', 'ŻÓŁĆ'], ['SOWA', 'KOC', 'HOTEL', 'SMUTEK'], ['SŁOŃ', 'LUSTRO', 'CIAŁO', 'NOC'], ['NASZYJNIK', 'BURZA', 'KRZYK', 'KOMIN'], ['EGIPT', 'ARKTYKA', 'EKONOMIA', 'DIAMENT'], ['PASAŻER', 'ZIEMIA', 'PRĄD', 'KOT'], ['DUCH', 'ŚLUB', 'PASJONAT', 'ŚLĄSK'], ['DZIECKO', 'TURYSTA', 'JESIEŃ', 'KLAWISZ'], ['ŚWIECA', 'PREHISTORIA', 'OPERACJA', 'OKNO'], ['BIOLOGIA', 'NÓŻ', 'SMOK', 'PROMIEŃ'], ['ŚWINIA', 'DINOZAUR', 'KIESZEŃ', 'ZABÓJCA'], ['WIELORYB', 'PTAK', 'FRANCJA', 'MORZE'], ['GIGANT', 'BIURO', 'LOKOMOTYWA', 'TRUCIZNA'], ['WILKOŁAK', 'SKRZYPCE', 'NOGA', 'RZEŹNIA'], ['CENTAUR', 'KSIĄŻKA', 'DZWON', 'HELIKOPTER'], ['BIELIZNA', 'SZKOŁA', 'DIABEŁ', 'BRODA'], ['WAMPIR', 'PIES', 'MOSTEK', 'RAKIETA'], ['SZTUKA', 'KSIĘŻNICZKA', 'OGRÓD', 'ŚMIERĆ'], ['POEMAT', 'DRAMAT', 'GOLF', 'JAJKO'], ['WOJNA', 'ELF', 'PIERWIASTEK', 'RZEŹBA'], ['BARAK', 'MUZEUM', 'MIÓD', 'RÓG'], ['OJCIEC', 'KORZEŃ', 'NARODZINY', 'GÓRA'], ['ROSJA', 'NIEMCY', 'TRADYCJA', 'ARYSTOKRATA'], ['STÓŁ', 'ZDJĘCIE', 'GRA', 'SMAK'], ['KLUCZ', 'KLESZCZE', 'TUSZ', 'REWOLUCJA'], ['TWARZ', 'LABORATORIUM', 'MNICH', 'CYRK'], ['MIECZ', 'LABIRYNT', 'PIEKŁO', 'PIÓRO'], ['WALIZKA', 'JASKINIA', 'KAWA', 'BAWEŁNA'], ['ZIMA', 'BANAN', 'GARNITUR', 'ŚCIEŻKA'], ['PERFUMY', 'BANK', 'KINO', 'MŁOT'], ['ZOO', 'ŁÓDŹ PODWODNA', 'DESZCZ', 'ENERGIA'], ['MUZYK', 'KLEJ', 'MARCHEWKA', 'SPORTOWIEC'], ['ŁUK', 'WŁAMANIE', 'POKÓJ', 'PRZERWA'], ['ŻABA', 'WILK', 'POLOWANIE', 'DRUT'], ['ORKIESTRA', 'KOŚCIÓŁ', 'ANTYK', 'RAMIĘ'], ['LATO', 'KREW', 'PIEKARNIK', 'SAMOCHÓD'], ['ŁÓDKA', 'SPADOCHRON', 'SKLEP', 'MONUMENT'], ['CHLEB', 'WIEŻA', 'KLON', 'LEGENDA'], ['WYBORY', 'POMARAŃCZA', 'INDEKS', 'CZERWIEŃ'], ['ŻÓŁW', 'WINDA', 'AGENT', 'BASEN'], ['GWIAZDA', 'MATKA', 'KOKTAJL', 'TĘCZA'], ['GRANICA', 'WIEWIÓRKA', 'DOMINO', 'EXPRESS'], ['SŁUGA', 'PUSTYNIA', 'OŚMIORNICA', 'WAKACJE'], ['KALENDARZ', 'ARMATA', 'TEATR', 'KWADRAT'], ['ŚMIECH', 'FANTASTYKA', 'STOPA', 'CEGŁA'], ['PERŁA', 'OGIEŃ', 'KONKURS', 'KRÓL'], ['WIOSNA', 'PAW', 'KAMELEON', 'NUREK'], ['MAFIA', 'KONSTRUKCJA', 'HORROR', 'KANAPKA']]
const colors = ['black', 'white']
const kolory = ['CZARNI', 'BIALI']


// codeCard.addEventListener('click', () => { codeCard.parentElement.classList.add('hidden') })
playButton.addEventListener('click', () => { generateGame()})
bateryButton.addEventListener('click', () => { document.body.classList.toggle('battery_saver') })


function generateGame() {
    let team1 = Math.round(Math.random())
    let team2 = 1 - team1
    board1.setAttribute('data-c', kolory[team1])
    board2.setAttribute('data-c', kolory[team2])

    const cardsList = new Array(words.length).fill(0).map((v, i) => i)
    const deck1 = cardsList.sort(() => (Math.random() > 0.5) ? 1 : -1).slice(0, 4)
    const deck2 = cardsList.filter(x => !deck1.includes(x)).sort(() => (Math.random() > 0.5) ? 1 : -1).slice(0, 4)

    document.querySelector('#board1 img').src = `./img/${colors[team1]}_board_front.webp`
    document.querySelector('#board2 img').src = `./img/${colors[team2]}_board_front.webp`
    document.body.classList.add('game')

    generateCodes(deck1, board1)
    generateCodes(deck2, board2)

    handleScreen()
}

function generateCodes(deck, board){
    const codes = deck.map(id => words[id][Math.floor(Math.random() * 4)]);

    for (let phrazes of codes) {
        const key = document.createElement('div')
        key.classList.add('key')
        let len = phrazes.split(' ')[0].length
        if (len > 9)
            key.style.fontSize = `${2}cqw`
        else if (len > 7)
            key.style.fontSize = `${2.5}cqw`
        key.textContent = phrazes;
        key.setAttribute('data-n', 4-codes.indexOf(phrazes))
        board.prepend(key)
    }
}

async function handleScreen(){
    window.history.pushState({}, '', 'DecryptOnline/lg.html')
    document.body.requestFullscreen()
    let wakeLock = null;
    try {
        wakeLock = await navigator.wakeLock.request("screen");
    } catch (err) {
        alert(`${err.name}, ${err.message}`);
    }
    window.addEventListener("popstate", (e) => {
        e.preventDefault();
        window.location.reload()
    });
}
