import React, { useEffect } from 'react';
import { useState } from 'react';


import ubs from '../assets/unidades_de_saude.json'
import PaginationComponent from '../components/PaginationComponent';

export default function Tabela({user}) {

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

    function filter() {
        setItens(dados.slice(0,10))
    }
  

  return( 
    <div>

        <div class="container-fluid header-search">
              <div class="br-input has-icon">
                <label for="searchbox-79970">
                <h3 style={{"font-size":"22px"}}> Pesquisa </h3>
                </label>
                <input 
                onChange={filter}
                id="searchbox-79970" type="text" placeholder="Buscar"/>
                <button class="br-button circle small" type="button" aria-label="Pesquisar"><i class="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>

        <div  class="container-fluid"title="Tabela UBSs">
      <div class="table-header">
          <div class="top-bar">
            <div class="table-title">
              <h4> Unidades Básicas de Saúde - UBSs </h4></div>
          </div>
        </div>
        <table>
          <thead>
          <tr>
          <th class="border-bottom border-left border-top" scope="col"> CNES </th>
              <th class="border-bottom border-left border-top" scope="col"> UF </th>
              <th class="border-bottom border-left border-top" scope="col"> IBGE </th>
              <th class="border-bottom border-left border-top" scope="col"> NOME </th>
              <th class="border-bottom border-left border-top" scope="col"> LOGRADOURO </th>
              <th class="border-bottom border-left border-top" scope="col"> BAIRRO </th>
              <th class="border-bottom border-left border-top" scope="col"> LATITUDE </th>
              <th class="border-bottom border-left border-top border-right" scope="col"> LONGITUDE </th>
              {user!== 'Visitante' ? 
                    <th class="border-bottom border-left border-top border-right" colspan="3" scope="col"></th>
                    :
                    <>
                    </>}
              
            </tr>
          </thead>


           {
                currentItens.map(ubs=>{
                    return <tbody>
                    <tr>
                    <td class="border-right border-left" rowspan="1" scope="col">{ubs.CNES}</td>
                    <td class="border-right">{ubs.UF}</td>
                    <td class="border-right">{ubs.IBGE}</td>
                    <td class="border-right">{ubs.NOME}</td>
                    <td class="border-right">{ubs.LOGRADOURO}</td>
                    <td class="border-right">{ubs.BAIRRO}</td>
                    <td class="border-right">{ubs.LATITUDE}</td>
                    <td class="border-right"> {ubs.LONGITUDE}</td>   
                    {user!== 'Visitante' ? 
                    <td class="border-right">
                    <button class="br-button secondary circle mt-3 mt-sm-0 " type="button" aria-label="Ícone ilustrativo"><i class="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                    </td>
                    :
                    <>
                    </>}                
                  </tr>
                  </tbody>
                    
                })
            }



          </table>
          </div>

          <PaginationComponent setCurrentPage={setCurrentPage} pages={pages} currentPage={currentPage}/>
   

    </div>
    
  )
}