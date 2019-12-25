import React from 'react';
import Main from './Components/Main';
import Payment from './Components/Payment';
import Order from './Components/Orders';
import Merchant from './Components/Merchant';
import Button from './Components/Button';

const SideMenu = () => (
    <div style={{ height: '100vh'}} className="w-1/5 left-1 top-0 bg-white absolute mt-16">
        <Button />
        <Main />
        <Payment />
        <Order />
        <Merchant />
    </div>
);

export default SideMenu;