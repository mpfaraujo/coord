import styles from '../styles/folhaPontuacao.module.css'
import moment from 'moment'
function FolhaPontuacao(props:any) {
  const date=moment().format('DD/MM/YYYY')
    return (
        <div className={styles.corpo}>

      
    <div className={`${styles.page} ${styles.sizeA4}`}>
    <div className={styles.container}>
    <div className={styles.logo}>
<svg
   xmlSpace="preserve"
   viewBox="0 0 51.64776 55.559989"
   version="1.1"
   id="svg4"
   width="51.647758"
   height="55.55999"
   xmlns="http://www.w3.org/2000/svg" >
<defs
   id="defs8" />
  <path
   fill="black"
   stroke="black"
   strokeLinecap="round"
   strokeWidth=".6"
   d="m 19.294996,1.030696 -4.58,13.397 H 1.2609957 c 3.77,-7.269 10.2100003,-11.734 18.0340003,-13.397 z m 2.576,-0.003 23.573,-0.078 c 6.636,2.77800001 5.812,9.62600001 4.624,12.97000001 l -0.04,0.035 -19.425,0.046 -14.028,40.62 c -7.2820003,-2.113 -10.1090003,-8.66 -8.5880003,-13.967 z m 9.235,19.731 h 13.148 c 2.148,0.303 2.374,1.794 2.35,2.799 l -3.125,8.408 c -0.547,0.999 -1.932,2.336 -3.875,2.559 h -13.582 z m -7.803,21.177 16.874,-0.117 c -6.917,10.604 -17.872,13.015 -21.311,12.945 l 4.437,-12.828"
   id="path2" />
</svg><br/>
      CEFET-RJ
    </div>
    <div className={styles.titulo}>CENTRO FEDERAL DE EDUCAÇÃO TECNOLÓGICA CELSO SUCKOW DA FONSECA</div>
  </div>
  <div className={styles.subtitulo}>
    PONTUAÇÃO E PARECER DA PROGRESSÃO/PROMOÇÃO FUNCIONAL POR AVALIAÇÃO
  </div>

<div className={styles.pontuacao}>
    <table className={styles.table}>
  
  <tbody><tr className={`${styles.tr} ${styles.header}`}>
    <th>CRITÉRIOS DE AVALIAÇÃO</th>
    <th>PONTOS</th>
  </tr></tbody>
  <tbody><tr className={styles.tr}>
    <td style={{textAlign:"left"}}>I - ASSIDUIDADE</td>
    <td className={styles.td}>4</td>
  </tr></tbody>
  <tbody><tr className={styles.tr}>
    <td style={{textAlign:"left"}}>II - DISCIPLINA</td>
    <td className={styles.td}>4</td>
  </tr></tbody>
        <tbody><tr className={styles.tr}>
    <td style={{textAlign:"left"}}>III - CAPACIDADE DE INICIATIVA</td>
    <td className={styles.td}>4</td>
  </tr></tbody>
        <tbody><tr className={styles.tr}>
    <td style={{textAlign:"left"}}>IV - PRODUTIVIDADE</td>
    <td className={styles.td}>RAD &ge; 40</td>
  </tr></tbody>
        <tbody><tr className={styles.tr}>
    <td style={{textAlign:"left"}}>V - RESPONSABILIDADE</td>
    <td className={styles.td}>4</td>
  </tr></tbody>
        <tbody><tr className={styles.header}>
    <td >MÉDIA DE PONTOS</td>
    <td className={styles.td}>&ge; 11,2</td>
  </tr></tbody>
</table>
  </div>
  <div className={styles.subtitulo}>
DATA DA AVALIAÇÃO: {date}
  </div>

  <div className={styles.parecer}>
      <strong> IDENTIFICAÇÃO DA COMISSÃO: </strong> (X) CCO ( ) CCE  <br/>
    <table className={`${styles.tabparecer} ${styles.table}`}>
        <colgroup>
        <col style={{width:"50%"}}/>
        <col style={{width:"15%"}}/>
        <col style={{width:"15%"}}/>
        <col style={{width:"15%"}}/></colgroup>
        
<thead>
   <tr className={`${styles.header} ${styles.tr}`}>
    <th className={`${styles.nome} ${styles.th}`}>NOME</th>
    <th className={`${styles.lot}${styles.th}`}>LOTAÇÃO</th>
     <th className={`${styles.lot} ${styles.th}`}> TITULAÇÃO</th>
     <th className={`${styles.data} ${styles.th}`}>DATA DE<br/>ADMISSÃO</th>
  </tr>
  </thead>
  <tbody><tr>
        <td className={styles.td} style={{textAlign:"left",fontSize:"1.5em"}}>{props.av1?.nome}</td>
        <td className={styles.td}>DEMET/COMAT</td>
        <td className={styles.td}>{props.av1?.titulação}</td>
        <td className={styles.td}>{props.av1?.admissao} </td>
      </tr>
  </tbody>
  <tbody><tr>
        <td className={styles.td} style={{textAlign:"left",fontSize:"1.5em"}}>{props.av2?.nome}</td>
        <td className={styles.td}>DEMET/COMAT</td>
        <td className={styles.td}>{props.av2?.titulação}</td>
        <td className={styles.td}>{props.av2?.admissao} </td>
      </tr>
      </tbody>
      <tbody><tr><td className={styles.td} style={{textAlign:"left",fontSize:"1.5em"}}>{props.av3?.nome}</td>
        <td className={styles.td}>DEMET/COMAT</td>
        <td className={styles.td}>{props.av3?.titulação}</td>
        <td className={styles.td}>{props.av3?.admissao} </td>
      </tr></tbody>
</table> 
<div className={styles.avaliacao} style={{textAlign:"justify"}}>
    <strong>Parecer:</strong> Conforme os critérios estabelecidos para a progressão funcional, esta comissão considera que o professor avaliado cumpre todas as exigências, conforme demonstrado na tabela de pontuação, fazendo merecidamente jus a sua concessão.
  </div>
  <div style={{textAlign:'left', paddingTop:'.5em'}}>
    Assinatura:<span className={styles.linha1}></span> Matrícula: {props.av1?.siape}
  </div>
    <div style={{textAlign:"left", paddingTop:".5em"}}>
    Assinatura:<span className={styles.linha1}></span> Matrícula: {props.av2?.siape}
  </div>
    <div style={{textAlign:"left", paddingTop:".5em"}}>
    Assinatura:<span className={styles.linha1}></span> Matrícula: {props.av3?.siape}
  </div>  
  </div>
  <div className={styles.espaco}> </div>
<div className={styles.parecerChefia}>
  <div className={styles.chefia} style={{textAlign:"left"}}>
   <strong>
      CHEFIA IMEDIATA:
   </strong>
    MARCOS PAULO FERREIRA DE ARAUJO
  </div>
    <div className={styles.chefia} style={{textAlign:"left"}}>
      <strong>PARECER:</strong>
      O professor avaliado contribui imensamente para o bom funcionamento desta coordenação de Matemática e, portanto, estou plenamente de acordo com a avaliação feita pela comissão formada.
  </div>
  <div className={styles.espaco2}></div>
  <div><span className={styles.linha1}> </span>/1549159</div>
  <div>ASSINATURA/MATRÍCULA <br/>
    <strong>
      A chefia imediata se responsabiliza pelas informações aqui prestadas.
    </strong></div>
</div>
<div className={styles.subtitulo}>
<div className={styles.espaco2}></div>
  <div><span className={styles.linha1}> </span> /&nbsp; {props.nome?.siape}</div>
  <div>ASSINATURA/MATRÍCULA do servidor<br/>
    </div>

  </div></div></div>

    )
}

export default FolhaPontuacao