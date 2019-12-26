import React from 'react';
import NavHeader from '../../Components/NavHeader';
import SideMenu from '../../Components/SideMenu';
import PaymentTable from '../../Components/PaymentsTable';
import DataViz from '../../Components/DataViz';

const Home = () => {
    return (
        <div className="bg-grey-100">
            <NavHeader />
            <SideMenu />
            <div style={{ top: 80, left: 290 }} className="absolute w-4/5 bg-grey-100">
            <DataViz />
            <PaymentTable />
            </div>
        </div>
    )
}

export default Home;