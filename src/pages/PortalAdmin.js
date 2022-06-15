import React, { useEffect } from 'react';
import { useState } from 'react';

import ubs from '../assets/unidades_de_saude.json'
import Footer from '../components/Footer';
import Header from '../components/Header';
import PaginationComponent from '../components/PaginationComponent';
import Tabela from '../components/Tabela';

export default function PortalAdmin() {
 
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

const [hidden,setHidden] = useState('true');

function showCadastro(){
    const hidden = document.getElementById("cadastro").hidden;
    if(hidden){
        setHidden(false);
    }else{
        setHidden(true)
    }
    
}

  return (
    <div>

<Header titulo="Portal do Administrador"/>

<div class="container-fluid br-modal" id='cadastro'hidden={hidden}>
  <div class="container-fluid p-1 p-sm-4">
    <div class="br-modal-header">
      <div class="br-modal-title" title="Título">Unidade de Saúde</div>
      <button onClick={showCadastro}class="br-button close circle small" type="button" data-dismiss="br-modal" aria-label="Close"><i class="fas fa-times" aria-hidden="true"></i>
      </button>
    </div>
    <div class="br-modal-body" >
    </div>
    <div class="row">
      <div class="col-sm-12 my-2">
         <div class="br-input">
          <label for="cnes">CNES</label>
          <input id="cnes" type="text" placeholder="CNES"/>
        </div>
        
        <div class="br-input">
          <label for="uf">UF</label>
          <input id="uf" type="number" placeholder="UF"/>
        </div>
        <div class="br-input">
          <label for="ibge">IBGE</label>
          <input id="ibge" type="text" placeholder="IBGE"/>
        </div>
        <div class="br-input">
          <label for="nome">Nome</label>
          <input id="nome" type="text" placeholder="Nome"/>
        </div>
        <div class="br-input">
          <label for="logradouro">Logradouro</label>
          <input id="logradouro" type="text" placeholder="Logradouro"/>
        </div>
        <div class="br-input">
          <label for="bairro">Bairro</label>
          <input id="bairro" type="text" placeholder="Bairro"/>
        </div>
        <div class="br-input">
          <label for="latitude">Latitude</label>
          <input id="latitude" type="text" placeholder="Latitude"/>
        </div>
        <div class="br-input">
          <label for="longitude">Longitude</label>
          <input id="longitude" type="text" placeholder="Longitude"/>
        </div>        
      </div>
    </div>
    
    <div class="br-modal-footer justify-content-end">
      <button class="br-button secondary small m-2" type="reset">Cancelar
      </button>
      <button class="br-button primary small m-2" type="button">Cadastrar
      </button>
    </div>
  </div>
</div>
      
      <Tabela/>

            <Footer/>

      
    </div>
  );
}
