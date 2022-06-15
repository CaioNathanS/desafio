import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


import ubs from '../assets/unidades_de_saude.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import usuarios from '../assets/lista_usuarios.json';

export default function LandingPage() {

  const history=useHistory();
 
  const users = usuarios;
  const dados = ubs.slice(0,500);
  const [itens,setItens]=useState([]);
  const [itensPerPage,setItensPerPage]=useState(50);
  const [currentPage,setCurrentPage]=useState(0);
  const pages = Math.ceil(itens.length/itensPerPage);
  const startIndex= currentPage*itensPerPage;
  const endIndex= startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex,endIndex);
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  
  useEffect(()=>{
  
          setItens(dados)
      },
      [])
  
  useEffect(()=>{
  
      setCurrentPage(0)
  },
  [itensPerPage])

  function handleLogin(e) {
    e.preventDefault();
    const findEmail = users.find(acc=> ( 
    acc.email === email
  ));
  if(findEmail){
    if(findEmail.senha === senha){
      alert(`Bem vindo ${findEmail.nome}!`)
      if(findEmail.admin === true){
        localStorage.setItem('admin',true)
        history.push('/admin')
      }else{
        history.push('/visitante')
        localStorage.setItem('admin',false)
      }
      
      localStorage.setItem('nome',findEmail.nome)
    }else{
      alert('Senha Incorreta!')
    }
  }else{
    alert('Email ou senha inválidos!')
  }
  }

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
            <form onSubmit={handleLogin}>
      
      <div class="row">
        <div class="col-sm">
          <div class="br-card">
            <div class="card-content">
            <div>
               <div class="col">
                <div class="br-input small input-button">
                   <label for="input-login-small">Email</label>
                  <input 
                  onChange={(e)=>setEmail(e.target.value)}
                  id="input-login-small" type="text" placeholder="Digite seu email" required/>
                </div>
               </div>
               <div>
               <div class="col">
             <div class="br-input small input-button">
            <label for="input-password">Senha</label>
            <input 
            onChange={(e)=>setSenha(e.target.value)}
            id="input-password" type="password" placeholder="Digite sua senha" required/>
          </div>
        </div>
      </div>

     
      <div class="col ajuste">
      <button class="br-button success" type="submit">Entrar
      </button>
      </div>
     
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
