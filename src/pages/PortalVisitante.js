import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



import ubs from '../assets/unidades_de_saude.json'
import Header from '../components/Header';
import PaginationComponent from '../components/PaginationComponent';


export default function PortalVisitante() {
 
  const dados = ubs.slice(0,500);
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


      <Header titulo="Portal do Visitante"/>
<div class="p-3 header-search">
              <div class="br-input has-icon">
                <label for="searchbox-79970">Pesquisa</label>
                <input id="searchbox-79970" type="text" placeholder="Buscar"/>
                <button class="br-button circle small" type="button" aria-label="Pesquisar"><i class="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
      
<div class="p-3 br-table" title="Tabela UBSs">
        <div class="table-header">
          <div class="top-bar">
            <div class="table-title"> Unidades Básicas de Saúde - UBSs</div>
            
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
                  </tr>
                  </tbody>
                    
                })
            }
        
        </table>
      </div>

      <PaginationComponent setCurrentPage={setCurrentPage} pages={pages} currentPage={currentPage}/>



      
    </div>
  );
}
