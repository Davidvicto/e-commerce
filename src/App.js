import React, { useState } from 'react';
import Header from './Common/Header/Header.jsx';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import './App.css';
import Pages from './Pages/Pages';
import Cart from './Common/Cart/Cart'
import Data from './components/flashDeals/Data'
import Sdata from './components/shop/Sdata';
import Footer from './components/footer/Footer.jsx';


function App() {
  // step 1: fetch data from database
  const { productItems } = Data
  const {  shopItems } = Sdata
  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    
    if(productExit){
        setCartItem(cartItem.map((item) => 
        (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item )))
    }else{
      setCartItem([...cartItem, {...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit.qty===1){
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    }else{
      setCartItem(cartItem.map((item) => (item.id === product.id ? {...productExit, qty: productExit.qty-1} :item )))
    }
  }
  return (
    <>
     <Router>
     <Header cartItem={cartItem}/>
    <Routes>
      <Route path="/" exact element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>}/>
      {/* </Route> */}
      <Route path="/cart" exact element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}/>
    </Routes>
    <Footer />
  </Router>
    </>
  );
}

export default App;
