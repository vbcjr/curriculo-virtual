import React from 'react';
import styles from './layouts/DadosPessoais.module.css'
import { useForm } from 'react-hook-form';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs';
import {BsArrowLeft} from 'react-icons/bs';

function Hobbies() {

    const {register, handleSubmit, setValue, formState: { errors }} = useForm();

    const onSubmit = (e) => {
        console.log(e);
        alert("Seus dados foram Salvos!");
    }

    return (
                
        <section className={styles.main3}>
        <h2> Finalizes com os dados de <span className={styles.span1}>Hobbies:</span></h2>

        <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5>Título do Hobbie</h5>
                <label className={styles.field2} htmlFor="titulohobbie">
                    <input className={styles.titulohobbie} type='text' {...register('titulohobbie   ')} placeholder='Blog'></input>
                </label>

                <h5>Tempo de prática</h5>
                <label className={styles.field3} htmlFor="tempopratica">
                    <input className={styles.tempopratica} type='text' {...register('tempopratica')} placeholder='5 Anos'></input>
                </label>

                <h5>Frequência de prática</h5>
                <label className={styles.field2} htmlFor="frequenciapratica">
                    <input className={styles.frequenciapratica} type='text' {...register('frequenciapratica')} placeholder='Semanalmente'></input>
                </label>

                <h5>Descrição</h5>
                <label className={styles.field3} htmlFor="descricao3">
                    <input className={styles.descricao3} type='text' {...register('descricao3')} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod '></input>
                </label> 
                <div className={styles.botoes}>
                <button className={styles.Button4}><span className={styles.arrowbutton1}><BsArrowLeft /> </span><Link to="/Experiencia" >Voltar <span className={styles.arrowbutton}><BsArrowRight /> </span></Link></button>
                
                <button type="submit" className={styles.Button3}><Link to="/CurriculoVirtual" >Avançar <span className={styles.arrowbutton}><BsArrowRight /> </span></Link></button>
                </div>
            </form>
        </div> 

        </section>
        
    )
}

export default Hobbies