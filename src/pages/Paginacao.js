import React, { useEffect } from 'react';
import { useState } from 'react';

import ubs from '../assets/unidades_de_saude.json'


export default function Paginacao() {

const dados = ubs.slice(0,200);
const [itens,setItens]=useState([]);
const [itensPerPage,setItensPerPage]=useState(50);
const [currentPage,setCurrentPage]=useState(0);
const pages = Math.ceil(itens.length/itensPerPage);
const startIndex= currentPage*itensPerPage;
const endIndex= startIndex + itensPerPage;
const currentItens = itens.slice(startIndex,endIndex);

useEffect(()=>{

        setItens(dados)
    },
    [])

useEffect(()=>{

    setCurrentPage(0)
},
[itensPerPage])

  return (
    <div>
        <div>
            <select value={itensPerPage} onChange={(e)=> setItensPerPage(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
        </div>


        <div>
            {Array.from(Array(pages),(item,index)=>{
               return <button value={index} onClick={(e)=>setCurrentPage(Number(e.target.value))}>{index+1}</button>
            })}
        </div>
        <div>
            
        </div>

            {
                currentItens.map(item=>{
                    return <div>
                        <span>{item.NOME}</span>
                    </div>
                })
            }

      
    </div>
  );
}
