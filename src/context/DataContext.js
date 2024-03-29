import { createContext, useState, useEffect } from 'react';
import io from "socket.io-client";
// const socket = io.connect('http://localhost:5000/');
//  const socket = io.connect('https://wordle-server-heroku.herokuapp.com/');
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [tabela, setTabela] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ]);

    const [pozicija, setPozicija] = useState({ red: 0, kolona: 0 });
    const [iskoristenaSlova, setIskoristenaSlova] = useState([]);
    const [trazenaRijec, setTrazenaRijec] = useState('');
    console.log(trazenaRijec);

    const [pobjeda, setPobjeda] = useState(false);
    const [igraPocinje, setIgraPocinje] = useState(false);
    const [nerijeseno, setNerijeseno] = useState(false);


    let korisnikovUnos = ''
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

    //Socket.io 
    // const socket = io.connect("https://wordle-server-heroku.herokuapp.com/");
    const socket = io.connect('http://localhost:5000/');
    const [room, setRoom] = useState("123");

    const sendMessage = (trazenaRijec) => {
        console.log(trazenaRijec)
        socket.emit("send_message", { korisnikovUnos, room, pozicija });
    };
    const joinRoom = () => {
        if (room !== "") {
            socket.emit("join_room", room);
            socket.once("noviIgrac", (data) => {
                console.log(data)
                setTrazenaRijec(data.rijec)
                setIgraPocinje(true)
            });
        }
    };
    const updateTable = (red, trazenaRijec) => {
        let kopijaTabele = [...tabela];
        for (let i = 0; i < 5; i++) {
            kopijaTabele[red][i] = trazenaRijec[i];
        }
        setTabela(kopijaTabele)
        jelPobjedio()
    };

    useEffect(() => {
        socket.once("receive_message", (data) => {
            setPozicija({ red: pozicija.red + 1, kolona: 0 })
            updateTable(pozicija.red, data.korisnikovUnos)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tabela]);

    return (
        <DataContext.Provider value={{
            tabela, setTabela,
            pozicija, setPozicija,
            trazenaRijec, jelPobjedio,
            iskoristenaSlova, setIskoristenaSlova,
            pobjeda, nerijeseno, igraPocinje, setIgraPocinje,
            // Socket.io
            setRoom, joinRoom, sendMessage, socket
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;