

import React from 'react';
import Navbar from "./Navbar";
import Contentt from './content';
import Footerr from './Footer';
import { NotFound } from "./NotFound";
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
 
const App = () => {
  return (
       <BrowserRouter>
        <Routes>
          <Route path="/Content"  >
           <Contentt />
          </Route>
           <Route path="/Footer">
             <Footerr/>
           </Route>
            <Route path="*" ><NotFound/> </Route>
         </Routes>
       </BrowserRouter>
   
   
  )
}
export default App;