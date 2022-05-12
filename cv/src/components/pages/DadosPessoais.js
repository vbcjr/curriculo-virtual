import React from 'react';
import styles from './layouts/DadosPessoais.module.css';
import {BsArrowRight} from 'react-icons/bs';
import fotoperfil from '../assets/fotoperfil.png'
import { useForm } from 'react-hook-form';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function DadosPessoais() {

    const {register, handleSubmit, setValue, formState: { errors }} = useForm();

    const onSubmit = (e) => {
        console.log(e);
        alert("Seus dados foram Salvos!");
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).then(data => {console.log(data);
        setValue('rua', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('uf', data.uf);
        });
    
        const cepC = cep.length;
        if (cepC <8){
            alert("O CEP deve conter 8 caracteres");
        }else if (cepC >8){
            alert("O CEP deve conter 8 caracteres");
        }else {
            console.log(cep)
        };
    }

    return (
                
    <section className={styles.main}>
    <h2> Comece inserindo os <span className={styles.span1}>dados pessoais:</span></h2>

        <img src={fotoperfil} alt="logo" />
        <p className={styles.inseririmagem}>Inserir Imagem</p>
    
    <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h5>Nome</h5>
            <label className={styles.field1} htmlFor="nome">
                <input className={styles.nome} type='text' {...register('nome', { required: true})} placeholder=' Alan dos Santos Vicente'></input>
                {errors.nome && errors.nome.type === "required" && <span>Nome é obrigatório</span>}
            </label> 

            <div className={styles.titleform}>
            <h5>Nacionalidade</h5>
            <h5 className={styles.titleidade}>Idade</h5>
            </div>
            <label className={styles.field2}>
                <input className={styles.nacionalidade} type='text' {...register('nacionalidade')} placeholder='Brasileiro'></input>
                <input className={styles.idade} type='number' {...register('idade')} placeholder='28'></input>
            </label>

            <h5>Objetivo Profissional</h5>
            <label className={styles.field3} htmlFor="objetivo">
                <input className={styles.objetivo} type='text' {...register('objetivo', { required: true})} placeholder='Auxiliar Administrativo'></input>
                {errors.objetivo && errors.objetivo.type === "required" && <span>Objetivo é obrigatório</span>}
            </label>    

            <h5>E-mail</h5>
            <label className={styles.field4} htmlFor="email">
                <input className={styles.email} type='email' {...register('email', { required: true})} placeholder='alan.santos@gmail.com'></input>
                {errors.email && errors.email.type === "required" && <span>E-mail é obrigatório</span>}
            </label>

            <h5>Celular</h5>
            <label className={styles.field5} htmlFor="email">
                <input className={styles.celular} type='number' {...register('celular', { required: true})} placeholder='11 96584 3654'></input>
                {errors.celular && errors.celular.type === "required" && <span>Celular é obrigatório</span>}
            </label>

            <h5>CEP</h5>
            <label className={styles.field2}>
                <input className={styles.cep} type='number' onBlur={checkCEP} name={"cep"}  placeholder='65896-965'></input>
                <button className={styles.Button2}>Buscar CEP</button>
            </label>    

            <h5>Rua</h5>
            <label className={styles.field6}>
                <input className={styles.rua} type='text' {...register('rua')} placeholder='Av. Augusto Oscar' ></input>
            </label>


            <div className={styles.titleform}>
            <h5>Bairro</h5>
            <h5 className={styles.titlenumero}>Número</h5>
            </div>
            <label className={styles.field2}>
                <input className={styles.bairro} type='text' {...register('bairro')}  placeholder='Jardim Paulista'></input>
                <input className={styles.numero} type='number' {...register('numero')} placeholder='6586'></input>
            </label>


            <div className={styles.titleform}>
            <h5>Cidade</h5>
            <h5 className={styles.titleuf}>UF</h5>
            </div>
            <label className={styles.field2}>
                <input className={styles.cidade} type='text' {...register('cidade')} placeholder='São Paulo'></input>
                <input className={styles.uf} type='text' {...register('uf')} placeholder='SP'></input>
            </label>
            <button type="submit" className={styles.Button}><Link to="/Formacao" >Avançar <span className={styles.arrowbutton}><BsArrowRight /> </span></Link></button>  
        </form>
        
    </div>
    

    </section>
    )

}

export default DadosPessoais