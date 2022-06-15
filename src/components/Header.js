import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoGovBr from '../assets/logoGovBR.png'

export default function Header({titulo,nome}) {


  return( 
    <div>   
<header class="br-header large">
        <div class="container-lg">
          <div class="header-top">
            <div class="header-logo">
            <div class="d-flex">
            <img src={logoGovBr} alt="logo"/>
            </div>
            
              <div class="header-sign">{titulo}</div>
            </div>
            <div class="header-actions">
              <div class="header-links dropdown">
                
                <div class="br-list">
                  <div class="header">
                    <div class="title">Acesso Rápido</div>
                   
                  </div>
                  {titulo!=='Portal do Administrador'?
                   <a class="br-item">Lista de UBSs</a> :<></> }
                  
                  
                </div>
              </div> <span class="br-divider vertical mx-half mx-sm-1"></span>
             
            
              <div class="header-search-trigger">
              <a class="br-item">Lista de UBSs</a>
              </div>
              {
                titulo==='Portal do Administrador' || titulo ==='Portal do Visitante'?
                <div class="header-login">
                <div class="header-sign-in">
                  <button class="br-sign-in small" 
                  type="button" 
                  >
                    <i class="fas fa-user" aria-hidden="true"></i>
                    <span class="d-sm-inline">{nome}</span>
                  </button>
                </div>
                </div>
                : <div class="header-login">
                <div class="header-sign-in">
                  <button class="br-sign-in small" 
                  type="button" 
                  >
                    <i class="fas fa-user" aria-hidden="true"></i>
                    <span class="d-sm-inline">Entrar</span>
                  </button>
                </div>
                </div>
              }
               
             
             </div>
            </div>
           </div>
      </header>

    

    </div>
    
  )
}