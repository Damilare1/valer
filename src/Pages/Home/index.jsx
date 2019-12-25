import React from 'react';
import NavHeader from '../../Components/NavHeader';
import SideMenu from '../../Components/SideMenu';
import PaymentTable from '../../Components/PaymentsTable';

const Home = () => {
    return (
        <div className="bg-grey-200">
            <NavHeader />
            <SideMenu />
            <PaymentTable />
        </div>
    )
}

export default Home;