import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import '../node_modules/@govbr-ds/core/dist/core.css';
import PortalVisitante from './pages/PortalVisitante';
import PortalAdmin from './pages/PortalAdmin';



function App() {
  return (
  <BrowserRouter>
    <div> 
      

   

      <main>
          
       <Route path="/"exact component={LandingPage} ></Route>
       <Route path="/visitante"exact component={PortalVisitante} ></Route>
       <Route path="/admin"exact component={PortalAdmin} ></Route>
      
       
      

      </main>




    

      </div>
  </BrowserRouter>
  );
}

export default App;
