import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/pag1.module.css'

function  Home (props:any) {

  return (

  <div className={styles.pagina}>
    <div className={styles.caixaTitulo}>
      <div className={styles.logo}>
        <Image src="/cefet.svg" alt="cefet" width="60" height="60"/><br/>
        CEFET/RJ
      </div>
      <div className={styles.titulo}>CENTRO FEDERAL DE EDUCAÇÃO TECNOLÓGICA CELSO SUCKOW DA FONSECA</div>
    </div>
     <div className={styles.subtitulo}>CPPD - COMISSÃO PERMANENTE DEPESSOAL DOCENTE</div>
     <div className={styles.caixaDireita}>
     <div className={styles.dentroDaCaixinha}>RESOLUÇÃO Nº 09/2014 - CODIR</div>
     </div>
     <div className={styles.subtitulo}>AVALIAÇÃO DE DESEMPENHO ACADÊMICO DOCENTE</div>
     <div className={styles.caixa}>
      <div style={{display:'flex', justifyContent:'space-between'}}><div> NOME DO DOCENTE: <strong>{props.nome}</strong></div><div> MATRÍCULA: <strong>{props.siape}</strong> </div></div>
      <div style={{display:'flex', justifyContent:'space-between'}}><div> CARGA HORÁRIA: (&nbsp;&nbsp;&nbsp;) 20h (&nbsp;&nbsp;&nbsp;) 40h (&nbsp;X&nbsp;) DE </div><div> DATA DE ADMISSÃO: <strong>{props.admissao}</strong> </div></div>
      <div style={{display:'flex', justifyContent:'space-between'}}><div> (&nbsp;X&nbsp;) EBTT</div><div>(&nbsp;&nbsp;&nbsp;)  MGISTÉRIO SUPERIOR</div><div>(&nbsp;&nbsp;&nbsp;) ESTÁGIO PROBATÓRIO</div></div>
      <div style={{display:'flex', justifyContent:'space-between'}}><div> UNIDADE DE LOTAÇÃO: <strong>Maracanã</strong></div><div> COLEGIADO: <strong>DEMET/COMAT</strong></div></div>
      </div>
      <div className={styles.subtitulo}><u><strong>CRITÉRIOS DE AVALIAÇÃO</strong></u></div>
      <div className={styles.caixaCriterios}>
        <div>
        <strong>1 – ASSIDUIDADE – </strong>comparecimento do servidor ao local de trabalho (com o cumprimento da carga horária estabelecida no regime de trabalho para o qual prestou concurso); comparecimento às atividades acadêmicas (ensino de disciplinas, atendimento aos alunos, realização de pesquisa e extensão no horário estabelecido pelas chefias imediatas); comparecimento às atividades (reuniões convocadas pela chefia, bem como aquelas de representação); permanência no local de trabalho durante o expediente.
        </div>
      </div>
     <Quadrinho item="ASSIDUIDADE"/>
      <div className={styles.caixaCriterios}>
        <div>
        <strong>2 – DISCIPLINA – </strong> considerar maneira pela qual o avaliado acata as normas disciplinares estabelecidas pela Instituição.
        <ul style={{marginLeft:"2em", listStyle:"square inside url('data:image/gif;base64,R0lGODlhBQAKAIABAAAAAP///yH5BAEAAAEALAAAAAAFAAoAAAIIjI+ZwKwPUQEAOw==')"}}>
          <li>O avaliado SEMPRE cumpre as regras disciplinares, observando as orientações recebidas. <strong> =MB</strong></li>
          <li>O avaliado NA MAIORIA DAS VEZES cumpre as regras disciplinares, observando as orientações recebidas. <strong>= B</strong></li>
          <li>O avaliado POUCAS VEZES cumpre as regras disciplinares, observando as orientações recebidas. <strong>= S</strong> </li>
          <li>O avaliado NUNCA ou RARAMENTE cumpre as regras disciplinares, observando as orientações recebidas. <strong>= I</strong></li>
        </ul>
        </div>
      </div>
     <Quadrinho item="DISCIPLINA"/>
    
      <div className={styles.caixaCriterios}>
        <div>
        <strong>3 – CAPACIDADE DE INICIATIVA – </strong> Considerar a capacidade para execução do trabalho por seus próprios meios.
        <ul style={{marginLeft:"3em", listStyle:"square inside url('data:image/gif;base64,R0lGODlhBQAKAIABAAAAAP///yH5BAEAAAEALAAAAAAFAAoAAAIIjI+ZwKwPUQEAOw==')"}}>
          <li>O avaliado SEMPRE é interessado pelo trabalho e em se aperfeiçoar; demonstra capacidade para lidar com situações novas e rotineiras; apresenta novas ideias e alternativas facilitadoras para execução do trabalho <strong> =MB</strong></li>
          <li>O avaliado À MAIORIA DAS VEZES é interessado pelo trabalho e em se aperfeiçoar; demonstra capacidade para lidar com situações novas e rotineiras; apresenta novas ideias e alternativas facilitadoras para execução do trabalho. <strong>= B</strong></li>
          <li>O avaliado POUCAS VEZES é interessado pelo trabalho e em se aperfeiçoar; demonstra capacidade para lidar com situações novas e rotineiras; apresenta novas ideias e alternativas facilitadoras para execução do trabalho. <strong>= S</strong> </li>
          <li>O avaliado NUNCA ou RARAMENTE é interessado pelo trabalho e em se aperfeiçoar; demonstra capacidade para lidar com situações novas e rotineiras; apresenta novas ideias e alternativas facilitadoras para execução do trabalho. <strong>= I</strong></li>
        </ul>
        </div>
      </div>
    

  
  </div> //DIV da pagina


    )
} 

export default Home

export function Quadrinho(props:{item:string}){

  const container ={
    display:"flex",
    margin:"0 auto",
    width:'90%',
    justifyContent:"space between",
    alignItems:"start",
  fontFamily:"sans",
  fontSize:".9em"


  }
  const esquerda ={
    width:"50%"

  }
  const direita={
    display: 'grid',
  gridTemplateColumns:".6fr .9fr 3fr .3fr 1fr",
  borderLeft:"solid 1px",
  padding:".4em"

  }
  return(
    <div style={{display:"block", margin:"0 auto", marginTop:"1em"}}>
    <div style={container}>
  <div style={esquerda}>No critério <strong>{props.item}</strong>  o avaliado é: </div>
  <div style={direita}>
     <div>( X )</div> <div><strong>MB</strong></div> <div>(MUITO BOM)</div> <div>=</div><div>NOTA 4</div>
     <div>( &nbsp;&nbsp;&nbsp;)</div><div><strong>B</strong></div><div>(BOM)</div><div>=</div><div>NOTA 3</div>
     <div>( &nbsp;&nbsp;&nbsp;)</div><div><strong>S</strong></div><div>(SUFICIENTE)</div><div>=</div><div>NOTA 2</div>
     <div>( &nbsp;&nbsp;&nbsp;)</div><div><strong>I</strong></div><div>(INSUFICIENTE)</div><div>=</div><div>NOTA 1</div>
  </div>
</div>
<hr style={{width:"90%", margin:"0 auto", border:'none',backgroundColor:'#000',height:'.5px', marginTop:"1em"}} />
</div>
  )

}
