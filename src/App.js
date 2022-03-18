import React from 'react';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';

 import Home from './pages/Home';
 import Contact from './pages/Contact';
 import Knowledges from './pages/Knowledges';
 import Portfolio from './pages/Portfolio';
 import NotFound from './pages/NotFound';
const App = () => {
  return (
    <>
       <BrowserRouter>
       <Routes>
        
       <Route  index exact  element={<Home/>}/>
       <Route  path={"/Contact"}  exact element={<Contact/>}/>
       <Route  path={"/Knowledges"}  exact element={<Knowledges/>}/>
       <Route  path={"/Portfolio"}  exact element={<Portfolio/>}/>
       <Route  element={<NotFound/>}/>
      
       </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;