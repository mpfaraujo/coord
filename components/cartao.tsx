import Image from 'next/image'
import styles from '../styles/cartao.module.css'
function Cartao(props:{obj:{curso:string, turma:string, matéria:string,tempos:string, sala:string}}) {
    const expr = props.obj.curso
    let image=""
    switch (expr){
        case 'Administração': image="/administracao.svg";break;
        case 'Edificações': image ="/edificacoes.svg";break;
        case 'Informática': image ="/informatica.svg";break;
        case 'Estradas':  image ="/estradas.svg";break;
        case 'Mecânica':  image ="/mecanica.svg";break;
        case 'Eletrônica':  image ="/eletronica.svg";break;
        case 'Eletrotécnica':  image ="/eletrotecnica.svg";break;
        case 'Meteorologia':  image ="/meteorologia.svg";break;
        case 'Eventos/Turismo':  image ="/turismo.svg";break;
        case 'Segurança do Trabalho':  image ="/seguranca.svg";break;
        case 'Telecomunicações':  image ="/telecomunicacoes.svg";break;
        default: null
    } 
    return (
        <div className={styles.caixa}>
            <div className={styles.fig}> <Image src={image} width="100"height="60" alt={`${props.obj.curso}`} />
            <div className={styles.titulo} ><strong>{props.obj.turma}</strong> </div></div>
            
            <div className={styles.corpo}>
                <p>Matéria: {props.obj.matéria}</p>
                <p>Horário: {props.obj.tempos}</p>
                <p>Sala: {props.obj.sala}</p>
            </div>
        </div>
    )
}

export default Cartao