import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';


const PozoviPrijatelja = () => {
    let { joinRoom, setRoom } = useContext(DataContext);
    let navigate = useNavigate();
    const joinAndNavigate = () => {
        joinRoom();
        navigate('/game');
    };

    useEffect(() => {
    }, [joinRoom])

    return (
        <div  >
            <Nav />
            <div style={{ margin: 50, display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", color: "white", flexDirection: "column" }}>
                <input
                    placeholder="http://localhost:3000/zahtjev"
                    value="http://localhost:3000/zahtjev"
                    onChange={(event) => {
                        setRoom(event.target.value);
                    }}
                />
                <p style={{ display: "flex", width: "300px", justifyContent: "center", alignItems: "center" }} >Kopirajte link i pozovite prijatelja </p>
                <button style={{ display: "flex", width: "100px", justifyContent: "center", alignItems: "center" }} onClick={joinAndNavigate} > Započni igru </button>
            </div>
        </div >
    )
}

export default PozoviPrijatelja