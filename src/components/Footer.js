import React from 'react';
import { Link } from 'react-router-dom';

import logoGovBr from '../assets/logoGovBR.png'

export default function Footer() {


  return( 
    <div>   
    <div class="container-fluid">
      <footer class="br-footer">
        <div class="container-lg">
          <div class="logo"><img src={logoGovBr} alt="Imagem"/></div>
          <div class="br-list horizontal" data-toggle="data-toggle" data-sub="data-sub">
          <div class="col-2"><Link to='/' class="br-item header">
                <div class="content text-down-01 text-bold text-uppercase">Início </div>
                </Link>
          </div>
            <div class="col-2"><a class="br-item header">
                <div class="content text-down-01 text-bold text-uppercase"> Visitante </div>
                <div class="support"><i class="fas fa-angle-down" aria-hidden="true"></i>
                </div></a>
              <div class="br-list"><span class="br-divider d-md-none"></span><Link to='/visitante' class="br-item" >
                  <div class="content">Painel Visitante </div></Link>
              </div>
            </div>
            <div class="col-2"><a class="br-item header" >
                <div class="content text-down-01 text-bold text-uppercase">Administrador</div>
                <div class="support"><i class="fas fa-angle-down" aria-hidden="true"></i>
                </div></a>
              <div class="br-list"><span class="br-divider d-md-none"></span><Link to='/admin'class="br-item">
                  <div class="content">Painel Admin</div></Link>
              </div>
            </div>
           
          </div>
          <div class="d-none d-sm-block">
          </div>
        </div><span class="br-divider my-3"></span>
        <div class="container-lg">
          <div class="info">
            <div class="text-down-01 text-medium pb-3">Texto destinado a exibição de informações relacionadas à&nbsp;<strong>licença de uso.</strong></div>
          </div>
        </div>
      </footer>
      </div>

    </div>
    
  )
}