const playButton = document.querySelector('#play-button')
const codeInput = document.querySelector('input')
const gameSection = document.querySelector('body > section')

const words = [['PRACA', 'OBIAD', 'POGODA', 'HACZYK'], ['PISTOLET', 'MOTYL', 'WEEKEND', 'METRO'], ['OPÓR', 'ORZEŁ', 'BURAK', 'PALIWO'], ['MEDAL', 'WYSPA', 'PRĘDKOŚĆ', 'DRZWI'], ['WYJŚCIE', 'PARYŻ', 'GRZYB', 'KONCERT'], ['RAJ', 'SŁOWNIK', 'PLANETA', 'PILOT'], ['', 'IMPREZA', 'PSZENICA', 'OSZUSTWO'], ['ROBOT', 'PLAGA', 'PRZEPIS', 'BRZUCH'], ['PAJĄK', 'OWCA', 'ŁÓŻKO', 'SEKRETARKA'], ['STRES', 'NAUCZYCIEL', 'KOLACJA', 'CHMURA'], ['GAZETA', 'WODA', 'KOSMOS', 'DOKTOR'], ['OBRĄCZKA', 'ŚNIEG', 'POTWÓR', 'KRASNOLUDEK'], ['BRUD', 'MUCHA', 'SZALEŃSTWO', 'SATELITA'], ['TORPEDA', 'PIRAMIDA', 'SPODNIE', 'SCHODY'], ['MARIONETKA', 'KLEPSYDRA', 'PARKING', 'KUCHNIA'], ['PEGAZ', 'SIATKA', 'ŚCIANA', 'WŁÓCZNIA'], ['APOKALIPSA', 'SYROP', 'CHEMIA', 'SZCZUR'], ['IGRZYSKA', 'DÓŁ', 'ZŁOŚĆ', 'KOŁO'], ['CIASTECZKO', 'KSIĘŻYC', 'KOWBOJ', 'WIADOMOŚĆ'], ['LODÓWKA', 'PIRAT', 'WIECZÓR', 'ZACHÓD'], ['PIANINO', 'NOC', 'SPOŁECZNOŚĆ', 'OPERA'], ['PIEKARNIK', 'PLASTIK', 'OBCY', 'GŁOWA'], ['ROZKŁAD', 'CZAS', 'ARCHEOLOGIA', 'KRZESŁO'], ['KOŚCI', 'NATURA', 'ZBIORNIK', 'LAS'], ['KLATKA', 'SKÓRA', 'KONTAKT', 'PAMIĘĆ'], ['CZERŃ', 'KOŃ', 'DAR', 'OŁÓWEK'], ['GUZIK', 'RELIGIA', 'MIŁOŚĆ', 'CZEKOLADA'], ['DACH', 'PSZCZOŁY', 'MAGIA', 'ZIELEŃ'], ['RZEKA', 'DŻUNGLA', 'PLAŻA', 'ZEGAR'], ['KOMPAS', 'DZIURA', 'AFRYKA', 'DETEKTYW'], ['GENIUSZ', 'ZAKŁAD', 'ŚNIADANIE', 'DZIECIŃSTWO'], ['ORZESZEK', 'CHINY', 'KOBIETA', 'PIŁKA'], ['MĘŻCZYZNA', 'KOMPUTER', 'GNIAZDKO', 'SUKIENKA'], ['TRÓJKĄT', 'CUKIEREK', 'CIEPŁO', 'KŁÓDKA'], ['POŁUDNIE', 'STRZAŁA', 'ALKOHOL', 'ZWŁOKI'], ['MYDŁO', 'INTERNET', 'PINGWIN', 'ZBROJA'], ['TELEWIZJA', 'JĘZYK', 'ŻETON', 'MAGNEZ'], ['PIOSENKA', 'SZPITAL', 'HYDRAULIK', 'SOPOT'], ['MYSZ', 'DYWAN', 'APARAT', 'OWOC'], ['BUT', 'BÓG', 'FILOZOFIA', 'SZTUKI WALKI'], ['WYWIAD', '', 'BIEL', 'PACZKA'], ['ATAK', 'ODRODZENIE', 'LALKA', 'TARCZA'], ['CHOROBA', 'RESTAURACJA', 'MARZENIE', 'CZAROWNICA'], ['ROWER', 'AUSTRALIA', 'OAZA', 'SAKSOFON'], ['UKŁADANKA', 'STRACH', 'TANIEC', 'MASKA'], ['UCHO', 'SERWIS', 'FLAGA', 'METAL'], ['PIKNIK', 'BĘBEN', 'CYKLOP', 'ŻYRAFA'], ['ŁAPÓWKA', 'BOMBA', 'TAJEMNICA', 'KARETKA'], ['OBÓZ', 'BUTELKA', 'DŁOŃ', 'JEDNOROŻEC'], ['JASZCZURKA', 'FUTRO', 'SANKI', 'TELEFON'], ['MASZYNA', 'SZKŁO', 'ARCHITEKTURA', 'TOALETA'], ['WĄS', 'GILOTYNA', 'NAUKA', 'PORANEK'], ['LEK', 'KASA', 'PIWNICA', 'IGŁA'], ['GITARA', 'PSYCHOLOG', 'TRĄBA', 'WEŁNA'], ['RADOŚĆ', 'KANION', 'JABŁKO', 'LEW'], ['KOPIA', 'BIBLIOTEKA', 'KOMIKS', 'ŻARÓWKA'], ['NIEBO', 'KIJ', 'SEN', 'DOŚWIADCZENIE'], ['POLICJA', 'WYPADEK', 'ZĄB', 'OBRAZ'], ['ARMIA', 'PRZYNĘTA', 'SKRZYDŁO', 'KOSZMAR'], ['SAMOLOT', 'PIZZA', 'WULKAN', 'SYRENA'], ['KORONA', 'SER', 'ZOMBIE', 'MIKROSKOP'], ['PIWO', 'CZAPKA', 'NOWY JORK', 'ŁAŃCUCH'], ['WĄŻ', 'GRANAT', '', 'MATEMATYKA'], ['ROBAK', 'ZAMEK', 'ŻÓŁĆ', 'SOWA'], ['KOC', 'HOTEL', 'SMUTEK', ''], ['SŁOŃ', 'LUSTRO', 'CIAŁO', 'NOC'], ['NASZYJNIK', 'BURZA', 'KRZYK', 'KOMIN'], ['EGIPT', 'ARKTYKA', 'EKONOMIA', 'DIAMENT'], ['PASAŻER', 'ZIEMIA', 'PRĄD', 'KOT'], ['DUCH', 'ŚLUB', 'PASJONAT', 'ŚLĄSK'], ['DZIECKO', 'TURYSTA', 'JESIEŃ', 'KLAWISZ'], ['ŚWIECA', 'PREHISTORIA', 'OPERACJA', 'OKNO'], ['BIOLOGIA', 'NÓŻ', 'SMOK', 'PROMIEŃ'], ['ŚWINIA', 'DINOZAUR', 'KIESZEŃ', 'ZABÓJCA'], ['WIELORYB', 'PTAK', 'FRANCJA', 'MORZE'], ['GIGANT', 'BIURO', 'LOKOMOTYWA', 'TRUCIZNA'], ['WILKOŁAK', 'SKRZYPCE', 'NOGA', 'RZEŹNIA'], ['CENTAUR', 'KSIĄŻKA', 'DZWON', 'HELIKOPTER'], ['BIELIZNA', 'SZKOŁA', 'DIABEŁ', 'BRODA'], ['WAMPIR', 'PIES', 'MOSTEK', 'RAKIETA'], ['SZTUKA', 'KSIĘŻNICZKA', 'OGRÓD', 'ŚMIERĆ'], ['POEMAT', 'DRAMAT', 'GOLF', 'JAJKO'], ['WOJNA', 'ELF', 'PIERWIASTEK', 'RZEŹBA'], ['BARAK', 'MUZEUM', 'MIÓD', 'RÓG'], ['OJCIEC', 'KORZEŃ', 'NARODZINY', 'GÓRA'], ['ROSJA', 'NIEMCY', 'TRADYCJA', 'ARYSTOKRATA'], ['STÓŁ', 'ZDJĘCIE', 'GRA', 'SMAK'], ['KLUCZ', 'KLESZCZE', 'TUSZ', 'REWOLUCJA'], ['TWARZ', 'LABORATORIUM', 'MNICH', 'CYRK'], ['MIECZ', 'LABIRYNT', 'PIEKŁO', 'PIÓRO'], ['WALIZKA', 'JASKINIA', 'KAWA', 'BAWEŁNA'], ['ZIMA', 'BANAN', 'GARNITUR', 'ŚCIEŻKA'], ['PERFUMY', 'BANK', 'KINO', 'MŁOT'], ['ZOO', 'ŁÓDŹ PODWODNA', 'DESZCZ', 'ENERGIA'], ['MUZYK', 'KLEJ', 'MARCHEWKA', 'SPORTOWIEC'], ['ŁUK', 'WŁAMANIE', 'POKÓJ', 'PRZERWA'], ['ŻABA', 'WILK', 'POLOWANIE', 'DRUT'], ['ORKIESTRA', 'KOŚCIÓŁ', 'ANTYK', 'RAMIĘ'], ['LATO', 'KREW', 'PIEKARNIK', 'SAMOCHÓD'], ['ŁÓDKA', 'SPADOCHRON', 'SKLEP', 'MONUMENT'], ['CHLEB', 'WIEŻA', 'KLON', 'LEGENDA'], ['WYBORY', 'POMARAŃCZA', 'INDEKS', 'CZERWIEŃ'], ['ŻÓŁW', 'WINDA', 'AGENT', 'BASEN'], ['GWIAZDA', 'MATKA', 'KOKTAJL', 'TĘCZA'], ['GRANICA', 'WIEWIÓRKA', 'DOMINO', 'EXPRESS'], ['SŁUGA', 'PUSTYNIA', 'OŚMIORNICA', 'WAKACJE'], ['KALENDARZ', 'ARMATA', 'TEATR', 'KWADRAT'], ['ŚMIECH', 'FANTASTYKA', 'STOPA', 'CEGŁA'], ['PERŁA', 'OGIEŃ', 'KONKURS', 'KRÓL'], ['WIOSNA', 'PAW', 'KAMELEON', 'NUREK'], ['MAFIA', 'KONSTRUKCJA', 'HORROR', 'KANAPKA']]



playButton.addEventListener('click', () => { generateGame(codeInput.value) })

codeInput.addEventListener('input', (event) => {
    if (!/^[0-9a-fA-F]+$|^$/.test(event.target.value.toString())){

        return codeInput.value = codeInput.oldValue
    }
    codeInput.value = codeInput.value.toUpperCase()
    codeInput.oldValue = codeInput.value
    console.log(codeInput.oldValue)
})


const colors = ['black', 'white']
function generateGame(code) {
    if(code.length != 8 && code.length != 0) return
    let banned = [], team = 0

    if(code != '') {
        let codeBin = hex2bin(code)
        team = 1 - codeBin[31]
        for(let i = 0; i < 28; i+=7) banned.push(parseInt(codeBin.slice(i, i+7), 2))
    } else
        team = Math.round(Math.random())
    

    console.log('generate')
    document.body.classList.add('game')

    // let deck = 0;
    // do{
    //     deck = Math.floor(Math.random() * words.length)
    // } while(deck != banned)
    // const list = words[deck]
    // console.log(list);
}

function hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}
