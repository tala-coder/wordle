import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { useNavigate } from 'react-router-dom';  

const IgrajSPrijateljem = () => {
    let { joinRoom, setRoom, setIgraPocinje } = useContext(DataContext);
    let navigate = useNavigate(); 
    const joinAndNavigate = () => {
        joinRoom();
        setIgraPocinje(true);
        navigate('/game');
    }; 
    return (
        <div>
            <input
                placeholder="vase ime..."
                onChange={(event) => {
                    setRoom(event.target.value);
                }}
            />
            <button onClick={joinAndNavigate} > Join Room</button> 
        </div >
    )
}

export default IgrajSPrijateljem