import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { useNavigate } from 'react-router-dom';


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
        <div>
            <input
                placeholder="Room Number..."
                onChange={(event) => {
                    setRoom(event.target.value);
                }}
            />
            <p> link za igru </p>
            <button onClick={joinAndNavigate} > Pozovi Prijatelja</button>
        </div >
    )
}

export default PozoviPrijatelja