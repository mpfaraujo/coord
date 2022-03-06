import type { NextPage } from 'next'
import styles from '../styles/pag2.module.css'
import { Quadrinho } from './pag1'
import Image from 'next/image'
  
  const Home2: NextPage = () => {
    return (
  
    <div className={styles.pagina}>
      <div className={styles.caixaTitulo}>
        <div className={styles.logo}>
          <Image src="/cefet.svg" alt="cefet" width="60" height="60" /><br/>
          CEFET/RJ
        </div>
        <div className={styles.titulo}>CENTRO FEDERAL DE EDUCAÇÃO TECNOLÓGICA CELSO SUCKOW DA FONSECA</div>
      </div>
       <div className={styles.subtitulo}>CPPD - COMISSÃO PERMANENTE DEPESSOAL DOCENTE</div>
       <Quadrinho item="CAPACIDADE DE INICIATIVA" />
       <div className={styles.caixaCriterios}>
        <div>
        <strong>4 – RESPONSABILIDADE – </strong> Considerar o grau de responsabilidade com o trabalho que realiza, bem como o cuidado apresentado com materiais e equipamentos utilizados.
        <ul style={{marginLeft:"3em", listStyle:"square inside url('data:image/gif;base64,R0lGODlhBQAKAIABAAAAAP///yH5BAEAAAEALAAAAAAFAAoAAAIIjI+ZwKwPUQEAOw==')"}}>
          <li>O avaliado <strong>SEMPRE</strong> assume responsabilidades, não precisando ser lembrado das atividades/tarefas que lhes são confiadas; coopera com sua equipe de trabalho, concluindo suas atividades/tarefas evitando sobrecarga de serviço; é cuidadoso em relação aos bens da Instituição, conservando em condições de uso os materiais e equipamentos. <strong> =MB</strong></li>
          <li>O avaliado <strong>À MAIORIA DAS VEZES</strong> assume responsabilidades, não precisando ser lembrado das atividades/tarefas que lhes são confiadas; coopera com sua equipe de trabalho, concluindo suas atividades/tarefas evitando sobrecarga de serviço; é cuidadoso em relação aos bens da Instituição, conservando em condições de uso os materiais e equipamentos. <strong>= B</strong></li>
          <li>O avaliado <strong>POUCAS VEZES</strong> assume responsabilidades, não precisando ser lembrado das atividades/tarefas que lhes são confiadas; coopera com sua equipe de trabalho, concluindo suas atividades/tarefas evitando sobrecarga de serviço; é cuidadoso em relação aos bens da Instituição, conservando em condições de uso os materiais e equipamentos.  <strong>= S</strong> </li>
          <li>O avaliado <strong>NUNCA</strong> ou <strong>RARAMENTE</strong> assume responsabilidades, não precisando ser lembrado das atividades/tarefas que lhes são confiadas; coopera com sua equipe de trabalho, concluindo suas atividades/tarefas evitando sobrecarga de serviço; é cuidadoso em relação aos bens da Instituição, conservando em condições de uso os materiais e equipamentos. <strong>= I</strong></li>
        </ul>
        </div>
      </div>
      <Quadrinho item="RESPONSABILIDADE" />
      <div className={styles.caixa}>
        <div style={{width:"80%"}}>Rubrica dos Avaliadores :</div>
        <div style={{display:'grid', gap:'1em'}}>
          <span className={styles.linha1}> </span>
          <span className={styles.linha1}> </span>
          <span className={styles.linha1}> </span>

        
        </div>
      </div>
       </div>)}
    export default Home2