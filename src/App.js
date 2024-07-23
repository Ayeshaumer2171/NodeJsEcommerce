import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProductsList from './components/ProductList';
import AddProducts from './components/AddProducts';
import UpdateProducts from './components/UpdateProducts';

function App() {
  return (
    <BrowserRouter>
     < Nav />
     <Routes>
      <Route element={<PrivateComponent />} >
      <Route path='/' element={<ProductsList />}/>
      <Route path='/add' element={<AddProducts />}/>
      <Route path='/update/:id' element={<UpdateProducts />}/>
      <Route path='/logout' element={<h1>this is LOGOUT  component</h1>}/>
      <Route path='/profile' element={<h1>this is PROFILE component</h1>}/> 
          
      </Route>

      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>


     </Routes>
     <Footer />
    </BrowserRouter>
   
  );
}

export default App;
