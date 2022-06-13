import React, { useState } from 'react';


import ubs from '../assets/lista_reduzida.json'


export default function PortalAdmin() {
 
const dados = ubs;
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

<div class="row p-3 mb-3 bg-primary-darken-02">
 <p className='h4 col'> Portal Administrador</p>
         <button class="h4 br-button" type="button" aria-label="Abrir Busca" data-toggle="search" data-target=".header-search" onClick={showCadastro}> Cadastrar UBS<i class="fas fa-plus" aria-hidden="true"></i>
        </button>
</div>


<div class="br-modal" id='cadastro'hidden={hidden}>
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


<div class="p-3 header-search">
              <div class="br-input has-icon">
                <label for="searchbox-79970">Pesquisa</label>
                <input id="searchbox-79970" type="text" placeholder="Buscar pelo nome"/>
                <button class="br-button circle small" type="button" aria-label="Pesquisar"><i class="fas fa-search" aria-hidden="true"></i>
                </button>
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
              <th class="border-bottom" scope="col"> CNES </th>
              <th class="border-bottom border-left" scope="col"> UF </th>
              <th class="border-bottom border-left" scope="col"> IBGE </th>
              <th class="border-bottom border-left" scope="col"> NOME </th>
              <th class="border-bottom border-left" scope="col"> LOGRADOURO </th>
              <th class="border-bottom border-left" scope="col"> BAIRRO </th>
              <th class="border-bottom border-left" scope="col"> LATITUDE </th>
              <th class="border-bottom border-left" scope="col"> LONGITUDE </th>
              <th class="border-bottom border-left" colspan="3" scope="col"></th>
              
            </tr>
          </thead>
          {dados !== '' && 
               <>
								{dados.map((ubs) => (
                  <tbody>
                    <tr>
                    <td class="border-right" rowspan="1" scope="col">{ubs.CNES}</td>
                    <td class="border-right">{ubs.UF}</td>
                    <td class="border-right">{ubs.IBGE}</td>
                    <td class="border-right">{ubs.NOME}</td>
                    <td class="border-right">{ubs.LOGRADOURO}</td>
                    <td class="border-right">{ubs.BAIRRO}</td>
                    <td class="border-right">{ubs.LATITUDE}</td>
                    <td class="border-right"> {ubs.LONGITUDE}</td>
                    <td>
                        <button class="br-button secondary circle mt-3 mt-sm-0 " type="button" aria-label="Ícone ilustrativo"><i class="fa fa-check" aria-hidden="true"></i>
                        </button>
                    </td>
                    <td class="border-right">
                    <button class="br-button secondary circle mt-3 mt-sm-0 " type="button" aria-label="Ícone ilustrativo"><i class="fa fa-trash-o" aria-hidden="true"></i>
                   </button>
                    </td>
                    
                   
                  </tr>
                  </tbody>
                  ))} 
                </>
            }
        
        </table>
      </div>




      
    </div>
  );
}
