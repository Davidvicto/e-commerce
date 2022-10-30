import React from 'react';
import Discount from '../components/discount/Discount';
import FlashDeals from '../components/flashDeals/flashDeals';
import Home from '../components/mainpages/Home'
import NewArrivals from '../components/NewArrival/NewArrivals';
import Shop from '../components/shop/Shop';
import TopCate from '../components/top/topCate';
import Annu from '../components/announcement/Annu'
import Wrapper from '../components/wrapper/Wrapper';

const Pages=({ productItems, addToCart, CartItem, shopItems }) => {
    return(
        <>
            <Home CartItem={CartItem}/>
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <NewArrivals />
            <Discount />
            <Shop shopItems={shopItems} addToCart={addToCart}/>
            <Annu />
            <Wrapper />
        </>
    );
}
export default Pages