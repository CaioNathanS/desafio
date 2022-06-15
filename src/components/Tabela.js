import React, { useEffect } from 'react';
import { useState } from 'react';


import ubs from '../assets/unidades_de_saude.json'
import PaginationComponent from '../components/PaginationComponent';

export default function Tabela({user}) {

    
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

    function filtrar(pesquisa) {
      const search = pesquisa.toUpperCase()
      const filtro = dados.filter((ubs)=> 
      ubs.NOME.includes(search)
      );

      
        setItens(filtro);
    }

    function deletarUbs(nome) {
      const filtro = itens.filter((ubs)=> 
      ubs.NOME!==nome
      );

      if (window.confirm("Tem certeza que deseja excluir essa Unidade de Saúde?")){
        setItens(filtro);
      }
      
        
    }

    function changePosition(arr, from, to) {
      arr.splice(to, 0, arr.splice(from, 1)[0]);
      return arr;
  };

  const [hidden,setHidden] = useState('true');
 

  function showCadastro(){
      const hidden = document.getElementById("cadastro").hidden;
      if(hidden){
          setHidden(false);
      }else{
          setHidden(true)
      }  
  }

  const [nome,setNome] = useState('');
  const [cnes,setCnes] = useState('')
  const [uf,setUf] = useState('');
  const [ibge,setIbge] = useState('')
  const [bairro,setBairro] = useState('');
  const [logradouro,setLogradouro] = useState('');
  const [latitude,setLatitude] = useState('');
  const [longitude,setLongitude] = useState('')
    

    function cadastro() {
      const entrada = {
        "NOME":nome,
        "CNES":cnes,
        "UF":uf,
        "IBGE":ibge,
        "BAIRRO":bairro,
        "LOGRADOURO":logradouro,
        "LATITUDE":latitude,
        "LONGITUDE":longitude
      }
  
      const newArray = itens.concat(entrada)
      const changeOrdem = changePosition(newArray,itens.length,0)
      
      alert('UBS cadastrada!')

      setCnes('');
      setNome('');
      setUf('');
      setBairro('');
      setLatitude('');
      setLogradouro('');
      setLongitude('');
      setIbge('');
      

      setHidden(true)
      setItens(changeOrdem)
    }

   

  return( 
    <div>
     {user === 'Admin' && 
     <div class='container-fluid' style={{"textAlign":"right","marginTop":"10px"}}>
     <button
     id='plus'
     onClick={showCadastro } 
     class="br-button primary inverted  mt-3 mt-sm-0 ml-sm-3" 
     type="button" aria-label="Ícone ilustrativo"> Cadastrar UBS
        </button>
    </div>
     
     }
     
  

          <div
          style={{"marginTop":"10px"}}
          class="container-fluid br-modal" id='cadastro'hidden={hidden}>
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
              <input
              value={cnes}
              onChange={(e)=>setCnes(e.target.value)}
              id="cnes" type="text" placeholder="CNES" required/>
            </div>
            
            <div class="br-input">
              <label for="uf">UF</label>
              <input 
              value={uf}
              onChange={(e)=>setUf(e.target.value)}
              id="uf" type="number" placeholder="UF" required/>
            </div>
            <div class="br-input">
              <label for="ibge">IBGE</label>
              <input 
              onChange={(e)=>setIbge(e.target.value)}
              id="ibge" type="text" placeholder="IBGE"required/>
            </div>
            <div class="br-input">
              <label for="nome">Nome</label>
              <input
              value={nome} 
              onChange={(e)=>setNome(e.target.value)}
              id="nome" type="text" placeholder="Nome"required/>
            </div>
            <div class="br-input">
              
              <label for="logradouro">Logradouro</label>
              <input
              value={logradouro}
              onChange={(e)=>setLogradouro(e.target.value)}
              id="logradouro" type="text" placeholder="Logradouro"required/>
            </div>
            <div class="br-input">
              <label for="bairro">Bairro</label>
              <input 
              value={bairro}
              onChange={(e)=>setBairro(e.target.value)}
              id="bairro" type="text" placeholder="Bairro"required/>
            </div>
            <div class="br-input">
              <label for="latitude">Latitude</label>
              <input 
              value={latitude}
              onChange={(e)=>setLatitude(e.target.value)}
              id="latitude" type="text" placeholder="Latitude"required/>
            </div>
            <div class="br-input">
              <label for="longitude">Longitude</label>
              <input 
              value={longitude}
              onChange={(e)=>setLongitude(e.target.value)}
              id="longitude" type="text" placeholder="Longitude"required/>
            </div>        
          </div>
        </div>
        
        <div class="br-modal-footer justify-content-end">
          <button class="br-button secondary small m-2" onClick={showCadastro} >Cancelar
          </button>
          <button 
          onClick={cadastro}
          class="br-button primary small m-2" type="button">Cadastrar
          </button>
        </div>
      </div>
    </div>

        <div class="container-fluid header-search">
              <div class="br-input has-icon">
                <label for="searchbox-79970">
                <h3 style={{"font-size":"22px"}}> Pesquisa </h3>
                </label>
                
                <input 
                onChange={(e)=>filtrar(e.target.value)}
                id="searchbox-79970" type="text" placeholder="Buscar pelo nome"/>
                <button class="br-button circle small" type="button" aria-label="Pesquisar"><i class="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            

        <div  class="container-fluid"title="Tabela UBSs">
      <div class="table-header">
          <div class="top-bar">
            <div class="table-title">
              <h4> Unidades Básicas de Saúde - UBSs </h4></div>
          </div>
        </div>
        <table>
          <thead>
          <tr>
          <th class="border-bottom border-left border-top" scope="col"> CNES </th>
              <th class="border-bottom border-left border-top" scope="col"> UF </th>
              <th class="border-bottom border-left border-top" scope="col"> IBGE </th>
              <th class="border-bottom border-left border-top" scope="col"> NOME </th>
              <th class="border-bottom border-left border-top" scope="col"> LOGRADOURO </th>
              <th class="border-bottom border-left border-top" scope="col"> BAIRRO </th>
              <th class="border-bottom border-left border-top" scope="col"> LATITUDE </th>
              <th class="border-bottom border-left border-top border-right" scope="col"> LONGITUDE </th>
              {user!== 'Visitante' ? 
                    <th class="border-bottom border-left border-top border-right" colspan="3" scope="col"></th>
                    :
                    <>
                    </>}
              
            </tr>
          </thead>


           {
                currentItens.map(ubs=>{
                    return <tbody>
                    <tr>
                    <td class="border-right border-left" rowspan="1" scope="col">{ubs.CNES}</td>
                    <td class="border-right">{ubs.UF}</td>
                    <td class="border-right">{ubs.IBGE}</td>
                    <td class="border-right">{ubs.NOME}</td>
                    <td class="border-right">{ubs.LOGRADOURO}</td>
                    <td class="border-right">{ubs.BAIRRO}</td>
                    <td class="border-right">{ubs.LATITUDE}</td>
                    <td class="border-right"> {ubs.LONGITUDE}</td>   
                    {user!== 'Visitante' ? 
                    <td class="border-right">
                    <button 
                    onClick={()=>deletarUbs(ubs.NOME)}
                    class="br-button secondary circle mt-3 mt-sm-0 " type="button" aria-label="Ícone ilustrativo"><i class="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                    </td>
                    :
                    <>
                    </>}                
                  </tr>
                  </tbody>
                    
                })
            }



          </table>
          </div>

          <PaginationComponent setCurrentPage={setCurrentPage} pages={pages} currentPage={currentPage}/>
   

    </div>
    
  )
}