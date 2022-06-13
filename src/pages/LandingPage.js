import React from 'react';
import { Link } from 'react-router-dom';


import ubs from '../assets/lista_reduzida.json'


export default function LandingPage() {
 
const dados = ubs;

  return (
    <div>

<header class="br-header compact">
        <div class="container-lg">
          <div class="header-top">
            <div>
           
            </div>
            <div class="header-actions">
              <div class="header-links dropdown">
                
                <div class="br-list">
                  <div class="header">
                   
                  </div> 
                      <a class="br-item" href="javascript:void(0)"></a>
                      <a class="br-item" href="javascript:void(0)"></a>
                      <a class="br-item" href="javascript:void(0)"></a>
                      <a class="br-item" href="javascript:void(0)">Lista de UBSs</a>
                </div>
              </div><span class="br-divider vertical mx-half mx-sm-1"></span>
              <div class="header-functions dropdown">
               
                <div class="br-list">
                </div>
              </div>
              <div class="header-search-trigger">
                <button class="br-button circle" type="button" aria-label="Abrir Busca" data-toggle="search" data-target=".header-search"><i class="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <div class="header-login">
                <div class="header-sign-in">
                  <button class="br-sign-in small" type="button" data-trigger="login"><i class="fas fa-user" aria-hidden="true"></i><span class="d-sm-inline">Entrar</span>
                  </button>
                </div>
                <div class="header-avatar d-none">
                  <div class="avatar dropdown"><span class="br-avatar" title="Fulano da Silva"><span class="image"><img src="https://picsum.photos/id/823/400" alt="Avatar"/></span></span>
                    <button class="br-button circle small" type="button" aria-label="Abrir Menu de usuário" data-toggle="dropdown"><i class="fas fa-angle-down" aria-hidden="true"></i>
                    </button>
                    <div class="br-notification">
                      <div class="notification-header">
                        <div class="row">
                          <div class="col-10"><span class="text-bold">Fulano da Silva</span><br/><small>nome.sobrenome@dominio.gov</small></div>
                          <div class="col-2">
                            <div class="close text-right">
                              <button class="br-button circle small" type="button" aria-label="Fechar"><i class="fas fa-times" aria-hidden="true"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="notification-body">
                        <div class="br-tab">
                          <nav class="tab-nav">
                            <ul>
                              <li class="tab-item notification-tooltip" data-tooltip-text="Alertas">
                                <button type="button" aria-label="Alertas" data-panel="notification-panel-1-32597"><span class="name"><i class="fas fa-bell" aria-hidden="true"></i></span></button>
                              </li>
                              <li class="tab-item notification-tooltip active" data-tooltip-text="Mensagens">
                                <button type="button" aria-label="Mensagens" data-panel="notification-panel-2-32597"><span class="name"><i class="fas fa-envelope" aria-hidden="true"></i></span></button>
                              </li>
                            </ul>
                          </nav>
                          <div class="tab-content">
                            <div class="tab-panel" id="notification-panel-1-32597">
                              <div class="br-list">
                                <button class="br-item" type="button"><i class="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                                </button>
                                <button class="br-item" type="button"><i class="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                                </button>
                                <button class="br-item" type="button"><i class="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                                </button>
                              </div>
                            </div>
                            <div class="tab-panel active" id="notification-panel-2-32597">
                              <div class="br-list">
                                <button class="br-item" type="button"><span class="br-tag status small warning"></span><span class="text-bold">Título</span><span class="text-medium mb-2">25 de out</span><span>Nostrud consequat culpa ex mollit aute. Ex ex veniam ea labore laboris duis duis elit. Ex aute dolor enim aute Lorem dolor. Duis labore ad anim culpa. Non aliqua excepteur sunt eiusmod ex consectetur ex esse laborum velit ut aute.</span>
                                </button>
                                <button class="br-item" type="button"><span class="text-bold">Título</span><span class="text-medium mb-2">24 de out</span><span>Labore nulla elit laborum nulla duis. Deserunt ad nulla commodo occaecat nulla proident ea proident aliquip dolore sunt nulla. Do sit eu consectetur quis culpa. Eiusmod minim irure sint nulla incididunt occaecat ipsum mollit in ut. Minim adipisicing veniam adipisicing velit nostrud duis consectetur aute nulla deserunt culpa aliquip.</span>
                                </button>
                                <button class="br-item" type="button"><span class="br-tag status small warning"></span><span class="text-bold">Título</span><span class="text-medium mb-2">03 de out</span><span>Duis qui dolor dolor qui sint consectetur. Ipsum eu dolore ex anim reprehenderit laborum commodo. Labore do ut nulla eiusmod consectetur.</span>
                                </button>
                                <button class="br-item" type="button"><span class="text-bold">Título</span><span class="text-medium mb-2">16 de mai</span><span>Sunt velit dolor enim mollit incididunt irure est. Ad ea Lorem culpa quis occaecat sunt in exercitation nisi. Sit laborum laborum dolor culpa ipsum velit. Non nulla nisi dolore et anim consequat officia deserunt amet qui. Incididunt exercitation irure labore ut Lorem culpa. Dolore ea irure pariatur ullamco culpa veniam amet dolor in fugiat pariatur ut. Sit non ut enim et incididunt tempor irure pariatur ex proident labore cillum dolore nisi.</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-bottom">
            <div class="header-menu">
              <div class="header-menu-trigger">
                <button class="br-button small circle" type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation" id="menu-compact"><i class="fa fa-hospital-o" aria-hidden="true"></i>
                </button>
              </div>
              <div class="header-info">
                <div class="header-title">Serviços do Portal</div>
                <div class="header-subtitle"> </div>
              </div>
            </div>
            <div class="header-search">
              <div class="br-input has-icon">
                <label for="searchbox-67520">Texto da pesquisa</label>
                <input id="searchbox-67520" type="text" placeholder="O que você procura?"/>
                <button class="br-button circle small" type="button" aria-label="Pesquisar"><i class="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <button class="br-button circle search-close ml-1" type="button" aria-label="Fechar Busca" data-dismiss="search"><i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      
        
      
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
         
      <div class="br-table" title="Tabela UBSs">
        <div class="table-header">
          <div class="top-bar">
            <div class="table-title"> Unidades Básicas de Saúde - UBSs</div>
            
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th class="border-bottom" scope="col"> Nome </th>
              <th class="border-bottom border-left" scope="col"> Bairo </th>
              <th class="border-bottom border-left" colspan="3" scope="col"> Logradouro</th>
              
            </tr>
          </thead>
          {dados !== '' && 
               <>
								{dados.map((ubs) => (
                  <tbody>
                    <tr>
                    <td class="border-right" rowspan="1" scope="col">{ubs.NOME}</td>
                    <td class="border-right">{ubs.BAIRRO}</td>
                    <td class="border-right"> 
                    {ubs.LOGRADOURO}
                    
      
      
                    </td>
                    <td class="border-right">
                      
                    <button class="br-button secondary circle mt-3 mt-sm-0 ml-sm-3" type="button" aria-label="Ícone ilustrativo"><i class="fa fa-trash-o" aria-hidden="true"></i>
                   </button>
                    </td>
                    
                   
                  </tr>
                  </tbody>
                  ))} 
                </>
            }
        
        </table>
      </div>


      <nav class="br-pagination" aria-label="Paginação de resultados" data-total="4" data-current="1">
        <ul>
          <li>
            <button class="br-button circle" type="button" data-previous-page="data-previous-page" aria-label="Página anterior"><i class="fas fa-angle-left" aria-hidden="true"></i>
            </button>
          </li>
          <li><a class="page active" href="javascript:void(0)">1</a></li>
          <li><a class="page" href="javascript:void(0)">2</a></li>
          <li><a class="page" href="javascript:void(0)">3</a></li>
          <li><a class="page" href="javascript:void(0)">4</a></li>
          <li>
            <button class="br-button circle" type="button" data-next-page="data-next-page" aria-label="Página seguinte"><i class="fas fa-angle-right" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </nav>
      
      
    </div>
  );
}
