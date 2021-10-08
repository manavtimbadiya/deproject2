import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import Typewriter from 'typewriter-effect';
//import Button from '@mui/material/Button';
//import ButtonGroup from '@mui/material/ButtonGroup';
//import BluetoothConnectedIcon from '@mui/icons-material/BluetoothConnected';
//import WifiIcon from '@mui/icons-material/Wifi';
//import CableIcon from '@mui/icons-material/Cable';

const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Should you connect with...</h1>
                <div className="typewriters-container">
                <Typewriter
                    options={{
                      strings: ['Wifi?', 'Bluetooth?','Wired?'],
                      autoStart: true,
                       loop: true,
                     }}
                />
                </div>
            </div>
          

        </div>

    )
}

export default Landing;