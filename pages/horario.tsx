import Cartao from "../components/cartao"
import turmas from "../lib/horario.json"
import { useRouter } from "next/router"



type turmas={
    turma:string
    curso:string
    tempos:string
    matéria:string
    sala:string
    aulas:string

}
type t={
    turma:string
    curso:string
    tempos:string
    matéria:string
    sala:string
    aulas:string

}

function Teste() {
    const router=useRouter()
    const prof = router.query.prof
    console.log(prof)
    const seg =turmas.filter(function (el){
        return el.professor===prof && el.aulas==="Seg"
    })
    const ter =turmas.filter(function (el){
        return el.professor===prof && el.aulas==="Ter"
    })
    const qua =turmas.filter(function (el){
        return el.professor===prof && el.aulas==="Qua"
    })
    const qui =turmas.filter(function (el){
        return el.professor===prof && el.aulas==="Qui"
    })
    const sex =turmas.filter(function (el){
        return el.professor===prof && el.aulas==="Sex"
    })
    console.log(seg)
    console.log(ter)
    console.log(qua)
    console.log(qui)
    console.log(sex)
    return(
<div style={{display:'grid'}}>
    
    <div style={{display:"flex", flexWrap:"wrap", alignItems:'center'}}>
   {seg.map((turma, i)=>{
        if  (router.isReady&& seg.length!=0){
            if (i===0){
                return(<div key ={turma.id} style={{display:"flex", flexWrap:"wrap", alignItems:'center'}}>
                 <div>Segunda-Feira</div>
                    <Cartao obj={turma}/> 
                    </div>
                )
            }else  if  (router.isReady&& seg.length!=0){

                return (

                    <Cartao key ={turma.id} obj={turma}/> 
                   
                    )
            }
                
   } else return null})}
    
    </div>
    <div style={{display:"flex", flexWrap:"wrap", alignItems:'center'}}>
   {ter.map((turma, i)=>{
        if  (router.isReady&& ter.length!=0){
            if (i===0){
                return(<div key ={turma.id} style={{display:"flex", flexWrap:"wrap", alignItems:'center'}}>
                 <div>Terça-Feira</div>
                    <Cartao obj={turma}/> 
                    </div>
                )
            }else  if  (router.isReady&& ter.length!=0){

                return (

                    <Cartao key ={turma.id}obj={turma}/> 
                   
                    )
            }
                
   } else return null})}
    
    </div>
    <div style={{display:"flex", flexWrap:"wrap", alignItems:'center'}}>
   {qua.map((turma, i)=>{
        if  (router.isReady&& qua.length!=0){
            if (i===0){
                return(<div key ={turma.id} style={{display:"flex", flexWrap:"wrap", alignItems:'center'}}>
                 <div>Quarta-Feira</div>
                    <Cartao obj={turma}/> 
                    </div>
                )
            }else  if  (router.isReady&& qua.length!=0){

                return (

                    <Cartao key ={turma.id}obj={turma}/> 
                   
                    )
            }
                
   } else return null})}
    
    </div>
    <div style={{display:"flex", flexWrap:"wrap", alignItems:'center'}}>
   {qui.map((turma, i)=>{
        if  (router.isReady&& qui.length!=0){
            if (i===0){
                return(<div key ={turma.id} style={{display:"flex", flexWrap:"wrap", alignItems:'center'}}>
                 <div>Quinta-Feira</div>
                    <Cartao obj={turma}/> 
                    </div>
                )
            }else  if  (router.isReady&& qui.length!=0){

                return (

                    <Cartao key ={turma.id}obj={turma}/> 
                   
                    )
            }
                
   } else return null})}
    
    </div>
    <div style={{display:"flex", flexWrap:"wrap", alignItems:'center'}}>
   {sex.map((turma, i)=>{
        if  (router.isReady&& sex.length!=0){
            if (i===0){
                return(<div key ={turma.id} style={{display:"flex", flexWrap:"wrap", alignItems:'center'}}>
                 <div>Sexta-Feira</div>
                    <Cartao obj={turma}/> 
                </div>
                )
            }else  if  (router.isReady&& sex.length!=0){

                return (

                    <Cartao key ={turma.id} obj={turma}/> 
                   
                    )
            }
                
   } else return null})}
    
    </div>


</div>)


}


export default Teste