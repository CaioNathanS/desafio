import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


import ubs from '../assets/unidades_de_saude.json'
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-sm">
          <div>
            <h4>Visitante</h4><span class="br-divider sm my-3"></span>
            
          <div class="row">
              <div class="col">
                <div class="br-card">
                  <div class="card-content">
                     <p>Olá Visitante!</p>
                     <p>Sejá bem vindo ao portal.</p>
                     <p>Veja a lista UBSs. </p>
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
          <div>
            <h4>Usuário</h4><span class="br-divider sm my-3"></span>
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
      </div>
     
      <Footer/>
      
    </div>
  );
}
