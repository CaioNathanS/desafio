import React from 'react';


import ubs from '../assets/lista_reduzida.json'


export default function PortalVisitante() {
 
const dados = ubs;

  return (
    <div>

<div class="p-3 mb-3 bg-primary-darken-02">
 <p className='h4'> Portal Visitante</p>
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
