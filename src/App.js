import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import MenuPage from './Pages/MenuPage';
import OrderPage from './Pages/OrderPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';



export const UserContext = createContext();

function App() {

  const [home, setHome] = useState(true)
  const value = { home, setHome };

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<HomePage />} />
              <Route path='menu' element={<MenuPage />} />
              <Route path='order' element={<OrderPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
        
      </UserContext.Provider>
    </div>
    
      
  );
}

export default App;
