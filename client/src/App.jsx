import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ContextWrapper} from "./context/GlobalContext";
import {Home} from './pages/Home';
import {PublicLayout} from './layout/PublicLayout';
import {Register} from './pages/Register';
import {Login} from './pages/Login';


function App() {
   return (
       <ContextWrapper>
           <BrowserRouter>
               <Routes>
                   <Route Component={PublicLayout}>
                       <Route index path='/' element={<Home/>}></Route>
                       <Route path='/register' element={<Register/>}></Route>
                       <Route path='/login' element={<Login/>}></Route>
                   </Route>
               </Routes>
           </BrowserRouter>
       </ContextWrapper>
   );
}

export default App;