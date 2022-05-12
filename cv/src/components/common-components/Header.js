import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import React from 'react';
import CVLogoHeader from '../assets/CVLogoHeader.svg'
import styles from '../common-components/Header.module.css'
import { AiOutlineHome } from 'react-icons/ai'


function Header() {

    return(
        <header className={styles.header}>
            <Link to="/" className={styles.homebutton}><AiOutlineHome /></Link>
            <img src={CVLogoHeader} alt="logo" />
        </header>
    );
}

export default Header