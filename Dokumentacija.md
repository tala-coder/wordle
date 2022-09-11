# Završni projekat iz predmeta Web Programiranje II
# Igrica Wordle sa soketima

## Sadržaj
* [Wordle info](#wordle-info)
* [Tehnologije](#tehnologije) 
* [O projektu](#o-projektu)
* [Deployment](#deployment)


## Wordle info
Wordle je online, zabavna, jednostavna igra riječi. To je križaljka koju možete igrati samo jednom dnevno, stoga vas poput omiljene sapunice privlači da joj vrijeme posvetite baš svakog dana.

Riječ dana pojavljuje se svaka 24 sata i tada nastupa njezin krajnji korisnik. Nova riječ koju pogađate ima 5 slova, a za pogodak dobivate čak 6 prilika. I kako ćete znati jeste li na pravom putu? Ako imate pravo slovo na pravom mjestu, kvadratić će se zazeleniti. Ispravno slovo na pogrešnom mjestu označit će vam žutom bojom, a izabrano slovo koje se ni na jednom mjestu ne nalazi u riječi koju pogađate obojat će se sivom bojom. Pratite semafor boja i pravila i mijenjajte svoj izbor slova prema pomoći koju vam nudi Wordle.
Ono što se smatra ključnim za ovu igricu jest da svi imaju potpuno istu zagonetku, istu zadanu riječ što dovodi do internih natjecanja između prijatelja i poznanika. U koliko poteza je tko riješio današnju riječ dana, je li bilo teško ili lagano i kako će biti sutra? Wordle potiče komunikaciju i svoju riječ širi dalje od igre.

Nakon što ste uspješno ili neuspješno riješili dnevnu slagalicu, svoje rezultate vrlo je lako podijeliti na društvenim mrežama. Već je dobro znana izreka “Ako nije na društvenim mrežama, nije se dogodilo”, stoga nitko ne želi propustiti podijeliti svoj dobar rezultat.

U Oktobru 2021. softverski inženjer Josh Wardle kreirao je igricu prvobitno stvorenu u privatne svrhe kako bi Josh i njegov partner Palak Shaha zajedno igrali. No, nakon što je igra objavljena postala je popularni internetski trend u svijetu i preplavila je društvene mreže svojim kvadratićima u 3 boje. Obožavatelji igre riječima brzo su je prihvatili, a njezina popularnost raste iz dana u dan.

## Tehnologije
* ReactJS
* Socket.io
* Node, Express.js


## O projektu
Prilikom pokretanja servera, korisnik ima opciju da kopira link i pozove prijatelja. Kada drugi korisnik pristupi serveru igra počinje.

### UseContext
UseContext pruža način za prosljeđivanje podataka ili stanja kroz stablo komponenti bez potrebe za ručnim prosljeđivanjem rekvizita kroz svaku ugniježđenu komponentu(props). 
Dizajniran je za dijeljenje podataka koji se mogu smatrati globalnim podacima za stablo komponenti Reacta, kao što je trenutačni autentificirani korisnik ili tema.
Neke od najpoznatijih alternativa za useContext su Redux, Redux Toolkit, Easy Peasy itd.

### UseState
React useState Hook nam omogućuje praćenje stanja u komponenti. 
Stanje se općenito odnosi na podatke ili svojstva koja je potrebno pratiti u aplikaciji.

``` 
const [tabela, setTabela] = useState([  
        ["", "", "", "", ""], 
        ["", "", "", "", ""], 
        ["", "", "", "", ""],  
        ["", "", "", "", ""], 
        ["", "", "", "", ""],  
        ["", "", "", "", ""], 
 ]); 
 ```
 UseState koji se koristi za dodavanje rijeci u tabelu.
 
 ```
 const [pozicija, setPozicija] = useState({ red: 0, kolona: 0 });
 ```
 UseState koji prati poziciju slova kojeg unosi korisnik.
 ```
 const [iskoristenaSlova, setIskoristenaSlova] = useState([]);
 ```
 UseState koji sadrži niz iskorištenih slova. Iskoristena slova su obojena sivom bojom na tastaturi.
 
 ```
 const jelPobjedio = () => {
        for (let i = 0; i < 5; i++) {
            korisnikovUnos += tabela[pozicija.red][i];
        }
        console.log(korisnikovUnos, trazenaRijec)
        if (korisnikovUnos === trazenaRijec.toUpperCase()) {
            setPobjeda(true);
            socket.emit("kraj_igre");
        }
        else if (pozicija.red === 5) {
            setNerijeseno(true)
        }
        sendMessage(korisnikovUnos);
    }
 ```
 Funkcija 'jelPobjedio' koja uzima korisnikov unos i provjerava je li pogodio riječ, ako jeste useState 'pobjeda' postavlja na true i šalje signal soketima da ja kraj igre.
 
 ```
 const updateTable = (red, trazenaRijec) => {
        let kopijaTabele = [...tabela];
        for (let i = 0; i < 5; i++) {
            kopijaTabele[red][i] = trazenaRijec[i];
        }
        setTabela(kopijaTabele)
        jelPobjedio()
    };
 ```
Funkcija 'updateTable' koja kopira trenutno stanje tabele pomocu spred operatora i dodaje novu rijec u useState tabela.



### UseEffect
UseEffect Hook vam omogućuje izvođenje nuspojava u vašim komponentama.
Neki primjeri nuspojava su: dohvaćanje podataka i izravno ažuriranje DOM-a.
Korištenje useEffect-a podrazumijeva razumijevanje životnog ciklusa komponente. 

```
useEffect(() => {
        socket.once("receive", (data) => {
            setPozicija({ red: pozicija.red + 1, kolona: 0 })
            updateTable(pozicija.red, data.korisnikovUnos)
        });
    }, [tabela, socket]);
```
UseEffect koji osluškuje poruku sa bekenda, te ažurira pozicije i tabelu.



##React router v6
```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PozoviPrijatelja />} />
          <Route path="/zahtjev" element={<IgrajSPrijateljem />} />
          <Route path="/game" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </DataProvider>
);
```
React router v6 je npm paket koji se koristi za rutiranje/navigiranje ruta na frontendu


## Deployment
 <b> Backend :</b> https://wordle-server-heroku.herokuapp.com/  </br>
 <b> Frontend :</b> https://lucent-sfogliatella-67b292.netlify.app



Profesor: [Prof. dr. Adis Alihodžić ](http://math.pmf.unsa.ba/nastavno-osoblje/prof-dr-adis-alihodzic/) 

Student: Muhammed Talić  
