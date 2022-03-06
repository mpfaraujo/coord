import { useRouter } from "next/router";
import FolhaPontuacao from "./folhaPontuacao";
import Home from "./pag1"
import Home2 from "./pag2"
import data1 from '../lib/professores.json'
import { useEffect } from "react";
function Index() {
const router =useRouter()
const nome=router.query.nome
const av1=router.query.av1 
const av2=router.query.av2 
const av3=router.query.av3
const professores = data1
useEffect(()=>{
    if (router.isReady){

    }
}, [router.isReady])
let avaliado = professores.find(obj => {
    return obj.apelido === nome
  })
  let avaliador1 = professores.find(obj => {
    return obj.apelido === av1
  })
  let avaliador2 = professores.find(obj => {
    return obj.apelido === av2
  })
  let avaliador3 = professores.find(obj => {
    return obj.apelido === av3
  })

if(router.isReady){
    return (

        <>
<div style={{display:'grid', margin:"0 auto"}}>
<Home nome={avaliado?.nome} siape={avaliado?.siape} admissao={avaliado?.admissao}/> 
<Home2/>
<FolhaPontuacao nome={avaliado} av1={avaliador1} av2={avaliador2} av3={avaliador3}/>
</div>
        </>
    );
}else return <>oi</>}
export default Index