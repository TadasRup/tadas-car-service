import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ContextWrapper} from "./context/GlobalContext";
import {Home} from './pages/Home';
import {PublicLayout} from './layout/PublicLayout';


function App() {
   return (
       <ContextWrapper>
           <BrowserRouter>
               <Routes>
                   <Route Component={PublicLayout}>
                       <Route index path='/' element={<Home/>}></Route>
                   </Route>
               </Routes>
           </BrowserRouter>
       </ContextWrapper>
   );
}

export default App;