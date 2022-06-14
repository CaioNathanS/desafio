import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


import ubs from '../assets/unidades_de_saude.json'
import PaginationComponent from '../components/PaginationComponent';
import Header from '../components/Header';

export default function LandingPage() {
 
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
      
        <Header titulo="Landing Page"/>
      
      <div class="row mt-3">
        <div class="col-sm">
          <div class="p-3">
            <p>Visitante</p><span class="br-divider dashed sm my-3"></span>
            
          <div class="row">
              <div class="col">
                <div class="br-card">
                  <div class="card-content">
                     <p>Olá Visitante!</p>
                     <p>Sejá bem vindo ao nosso portal.</p>
                     <p>Aqui você pode acessar a lista de Unidades Básicas de Saúde. </p>
                   </div>
                 <div class="card-footer">
                 <Link to='/visitante'>
                   <div class="d-flex">
                     <div>
                      <button class="br-button" type="button"> Acessar 
                      </button>
                     </div>
                   </div>
                   </Link>
                  </div>
               </div>
              </div>
           </div>
        </div>
        </div>
        <div class="col-sm">
          <div class="p-3">
            <p>Usuário</p><span class="br-divider dashed sm my-3"></span>
            <form>
      
      <div class="row">
        <div class="col-sm">
          <div class="br-card">
            <div class="card-content">
            <div>
               <div class="col">
                <div class="br-input small input-button">
                   <label for="input-login-small">Email</label>
                  <input id="input-login-small" type="text" placeholder="Digite seu email"/>
                </div>
               </div>
               <div>
               <div class="col">
             <div class="br-input small input-button">
            <label for="input-password">Senha</label>
            <input id="input-password" type="password" placeholder="Digite sua senha"/>
          </div>
        </div>
      </div>

      <Link to='/admin'>
      <div class="col ajuste">
      <button class="br-button success" type="submit">Entrar
      </button>
      </div>
      </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      </form>
          </div>
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
