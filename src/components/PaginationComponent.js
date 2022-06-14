import React from 'react';



export default function PaginationComponent({pages,currentPage, setCurrentPage}) {

 function voltaPagina(currentPage) {
    if(currentPage>0){
        setCurrentPage(currentPage-1)
    }
 }

 function passaPagina(pages,currentPage) {
    if(currentPage<pages-1){
        setCurrentPage(currentPage+1)
    }
 }


  return( 
    <div >

    <nav class="br-pagination" aria-label="Paginação de resultados" data-total="4" data-current="1">
        <ul>
          <li>
            <button
             onClick={(e)=>voltaPagina(currentPage)}
            class="br-button circle" type="button" aria-label="Página anterior"><i class="fas fa-angle-left" aria-hidden="true"></i>
            </button>
          </li>
          {Array.from(Array(pages),(item,index)=>{
               return <>
               
               <button class={index===currentPage?'page active':'page'}
               
               value={index} onClick={(e)=>setCurrentPage(Number(e.target.value))}>{index+1}</button>
              
               </>
            })}
          <li>
            <button 
            onClick={(e)=>passaPagina(pages,currentPage)}
            class="br-button circle" type="button" aria-label="Página seguinte"><i class="fas fa-angle-right" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    
  )
}