import React from 'react';
import styles from './layouts/DadosPessoais.module.css'
import { useForm } from 'react-hook-form';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs';
import {BsArrowLeft} from 'react-icons/bs';

function Experiencia() {

    const {register, handleSubmit, setValue, formState: { errors }} = useForm();

    const onSubmit = (e) => {
        console.log(e);
        alert("Seus dados foram Salvos!");
    }

    return (
                
        <section className={styles.main2}>
        <h2> Comece inserindo os dados de <span className={styles.span1}>experiencia:</span></h2>

        <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5>Título do cargo</h5>
                <label className={styles.field2} htmlFor="titulocargo">
                    <input className={styles.titulocargo} type='text' {...register('titulocargo')} placeholder='Auxiliar Administrativo'></input>
                </label>

                <h5>Tipo de emprego</h5>
                <label className={styles.field3} htmlFor="tipoemprego">
                    <input className={styles.tipoemprego} type='text' {...register('tipoemprego')} placeholder='Tempo Integral'></input>
                </label>

                <h5>Nome da Empresa</h5>
                <label className={styles.field2} htmlFor="nomeempresa">
                    <input className={styles.nomeempresa} type='text' {...register('nomeempresa')} placeholder='Loft S. A.'></input>
                </label>

                <h5>localidade</h5>
                <label className={styles.field3} htmlFor="localidade">
                    <input className={styles.localidade} type='text' {...register('localidade')} placeholder='São Paulo - SP'></input>
                </label> 

                <div className={styles.datainicio}>
                <h5>Data início </h5>
                <h5 className={styles.datatermino}>Data Término</h5>
                </div>
                <label className={styles.field2}>
                    <input className={styles.datainicioinput} type='date' {...register('datainicio')} placeholder='Brasileiro'></input>
                    <input className={styles.dataterminoinput} type='date' {...register('datatermino')} placeholder='28'></input>
                </label>

                <h5>Descrição</h5>
                <label className={styles.field3} htmlFor="descricao2">
                    <input className={styles.descricao2} type='text' {...register('descricao2')} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod '></input>
                </label> 
                <div className={styles.botoes}>
                <button className={styles.Button4}><span className={styles.arrowbutton1}><BsArrowLeft /> </span><Link to="/Formacao" >Voltar <span className={styles.arrowbutton}><BsArrowRight /> </span></Link></button>
                
                <button type="submit" className={styles.Button3}><Link to="/Hobbies" >Avançar <span className={styles.arrowbutton}><BsArrowRight /> </span></Link></button>
                </div>
            </form>
        </div> 

        </section>
        
    )
}

export default Experiencia