import React from 'react';
import styles from './layouts/DadosPessoais.module.css'
import { useForm } from 'react-hook-form';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import fotoperfil from '../assets/fotoperfil.png'

function CurriculoVirtual() {
    return (
        <section className={styles.main4}>
        <h2> Resumo do seu <span className={styles.span1}>Currículo Virtual:</span></h2>

        <div className={styles.perfilfinal}>
            <img src={fotoperfil} alt="logo" />
            <div className={styles.textperfilfinal}>
            <h1> Alan dos Santos Vicente</h1>
            <p>Brasileiro, 28 anos</p>
            </div>
        </div>
        <div className={styles.contatofinal}>
            <div className={styles.textcontatofinal}>
                <h3>Contato</h3>
                <p>alan.santos@gmail.com</p>
                <p>11 965843654</p>
            </div>
            <div className={styles.enderecocontatofinal}>
                <h3>Endereço</h3>
                <p>Av. Augusto Oscar, 6586 - Jardim Paulista, São Paulo, SP - CEP 65896-965</p>
            </div>

        </div>
        <div className={styles.objetivofinal}>
            <h3>Objetivo Profissional</h3>
            <div className={styles.textobjetivofinal}>
                <p>Auxiliar Administrativo</p>
            </div>
        </div>
        <div className={styles.formacaofinal}>
            <h3>Formação</h3>
            <p>Fiap</p>
            <p>Graduação em Admistração</p>
            <p>Administração</p>
            <p>São Paulo, SP</p>
            <p>2 anos</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <hr></hr>
        </div>

        

        <div className={styles.experienciafinal}>
            <h3>Experiência</h3>
            <p>Auxiliar Administrativo</p>
            <p>Tempo Integral</p>
            <p>Loft S. A.   </p>
            <p>São Paulo, SP</p>
            <p>2 anos</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <hr></hr>
        </div>
        <div className={styles.hobbiesfinal}>
            <h3>Hobbies</h3>
            <p>Blog</p>
            <p>5 anos</p>
            <p>Semanal</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <button type='submit' className={styles.buttonfinal}>Compartilhar </button>
        </section>

    )
}

export default CurriculoVirtual