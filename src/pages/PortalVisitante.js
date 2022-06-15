import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



import ubs from '../assets/unidades_de_saude.json'
import Footer from '../components/Footer';
import Header from '../components/Header';
import PaginationComponent from '../components/PaginationComponent';
import Tabela from '../components/Tabela';


export default function PortalVisitante() {
 
  const dados = ubs.slice(0,200);
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


      <Header titulo="Portal do Visitante" nome={nome}/>

      
     <Tabela user="Visitante"/>


      <Footer/>
      
    </div>
  );
}
