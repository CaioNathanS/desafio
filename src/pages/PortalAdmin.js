import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ubs from '../assets/lista_reduzida.json'
import Footer from '../components/Footer';
import Header from '../components/Header';
import PaginationComponent from '../components/PaginationComponent';
import Tabela from '../components/Tabela';

export default function PortalAdmin() {


  const history=useHistory();
  const admin = localStorage.getItem('admin');

  if(admin!== 'true'){   
    history.push('/')
      
  }
 
  const dados = ubs.slice(0,10);
  const [itens,setItens]=useState([]);
  const [itensPerPage,setItensPerPage]=useState(50);
  const [currentPage,setCurrentPage]=useState(0);
  const pages = Math.ceil(itens.length/itensPerPage);
  const startIndex= currentPage*itensPerPage;
  const endIndex= startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex,endIndex);
  const nome = localStorage.getItem('nome')
  
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

<Header titulo="Portal do Administrador" nome={nome}/>

      
      <Tabela user='Admin'/>

            <Footer/>

      
    </div>
  );
}
