import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { useNavigate } from 'react-router-dom';  
import Nav from './Nav';

const IgrajSPrijateljem = () => {
    let { joinRoom, setIgraPocinje } = useContext(DataContext);
    let navigate = useNavigate(); 
    const joinAndNavigate = () => {
        joinRoom();
        setIgraPocinje(true);
        navigate('/game');
    }; 
    return ( 
        <div  >
        <Nav />
        <div style={{ margin: 50, display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", color: "white", flexDirection: "column" }}> 
            <p style={{ display: "flex", width: "300px", justifyContent: "center", alignItems: "center" }} > igrajte Wordle sa vašim prijateljem </p>
            <button style={{ display: "flex", width: "100px", justifyContent: "center", alignItems: "center" }} onClick={joinAndNavigate} > Započni igru </button>
        </div>
    </div >
    )
}

export default IgrajSPrijateljem