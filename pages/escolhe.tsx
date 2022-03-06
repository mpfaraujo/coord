import { useRouter  } from "next/router"
import { useState } from "react"
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from '../styles/escolhe.module.css'

type FormValues={
    nome:String;
    av1:String;
    av2:String;
    av3:String;
    
}
// :{nome:string,av1:string,av2:string,av3:string }
function Escolhe() {
    const router=useRouter()
    const { register, handleSubmit} = useForm();
    const onSubmit = handleSubmit((data) => router.push(`/?nome=${data?.nome}&av1=${data?.av1}&av2=${data?.av2}&av3=${data.av3}`));


    return (


       <div className={styles.container}>
       <span><h1>Escolha os nomes nas caixas abaixo e aperte enviar</h1></span><br/>
<form onSubmit={onSubmit} className={styles.form}>
    <div className={styles.box}>
    <label htmlFor="nome">Escolha o Nome do AVALIADO</label>
      <select className={styles.select} {...register('nome')}name="nome">
        <option value="">AVALIADO</option>
        <option value="Marcos Paulo">Marcos Paulo</option>
        <option value="Alcindo"> Alcindo</option>
        <option value="Carlos">Carlos</option>
        <option value="Wellington">Wellington</option>
        <option value="Celso"> Celso</option>
        <option value="Gustavo Adolfo">Gustavo Adolfo</option>
        <option value="Paulo Cesar"> Paulo Cesar</option>
        <option value="Sergio"> Sergio</option>
        <option value="Diogo"> Diogo</option>
        <option value="Robson"> Robson</option>
        <option value="Marcelo"> Marcelo</option>
        <option value="Nilo"> Nilo</option>
        <option value="Haroldo">  Haroldo</option>
      </select>
    </div>
    <div className={styles.box}>
<label htmlFor="av2">Escolha o Nome do AVALIADOR 2</label>

      <select className={styles.select} {...register('av2')}name="av2">
      <option value="">AVALIADOR 2</option>
      <option value="Marcos Paulo">Marcos Paulo</option>
        <option value="Alcindo"> Alcindo</option>
        <option value="Carlos">Carlos</option>
        <option value="Wellington">Wellington</option>
        <option value="Celso"> Celso</option>
        <option value="Gustavo Adolfo">Gustavo Adolfo</option>
        <option value="Paulo Cesar"> Paulo Cesar</option>
        <option value="Sergio"> Sergio</option>
        <option value="Diogo"> Diogo</option>
        <option value="Robson"> Robson</option>
        <option value="Marcelo"> Marcelo</option>
        <option value="Nilo"> Nilo</option>
        <option value="Haroldo">  Haroldo</option>
        </select>
</div>
<div className={styles.box}>
<label htmlFor="av'1">Escolha o Nome do AVALIADOR 1</label>
     
      <select className={styles.select} {...register('av1')}name="av1">
      <option value="">AVALIADOR 1</option>
      <option value="Marcos Paulo">Marcos Paulo</option>
        <option value="Alcindo"> Alcindo</option>
        <option value="Carlos">Carlos</option>
        <option value="Wellington">Wellington</option>
        <option value="Celso"> Celso</option>
        <option value="Gustavo Adolfo">Gustavo Adolfo</option>
        <option value="Paulo Cesar"> Paulo Cesar</option>
        <option value="Sergio"> Sergio</option>
        <option value="Diogo"> Diogo</option>
        <option value="Robson"> Robson</option>
        <option value="Marcelo"> Marcelo</option>
        <option value="Nilo"> Nilo</option>
        <option value="Haroldo">  Haroldo</option>
      </select>
</div>

<div className={styles.box}>
<label htmlFor="av3">Escolha o Nome do AVALIADOR 3</label>

      <select className={styles.select} {...register('av3')} name="av3">
      <option value="">AVALIADOR 3</option>
      <option value="Marcos Paulo">Marcos Paulo</option>
        <option value="Alcindo"> Alcindo</option>
        <option value="Carlos">Carlos</option>
        <option value="Wellington">Wellington</option>
        <option value="Celso"> Celso</option>
        <option value="Gustavo Adolfo">Gustavo Adolfo</option>
        <option value="Paulo Cesar"> Paulo Cesar</option>
        <option value="Sergio"> Sergio</option>
        <option value="Diogo"> Diogo</option>
        <option value="Robson"> Robson</option>
        <option value="Marcelo"> Marcelo</option>
        <option value="Nilo"> Nilo</option>
        <option value="Haroldo">  Haroldo</option>
      </select>
</div>
<div>
<input type="submit" className={styles.button}/>

</div>

    </form> </div>
  );

}

export default Escolhe