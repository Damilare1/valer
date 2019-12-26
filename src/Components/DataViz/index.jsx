import React from 'react';
import Ruler from './Ruler';
import Brief from './Brief';
import Major from './Diagram/major';


const DataViz = () => {
    return (
    <div className="w-full bg-grey-100">
        <div  className="flex w-full justify-around">
            <Brief item={'Daily Transaction Volume'} digit={'2,342'}/>
            <Brief item={'Daily Transaction Value'} digit={'4,000,000'} isMoney/>
            <Brief item={'Total Transaction Volume'} digit={'452,000'}/>
            <Brief item={'Total Transaction Value'} digit={'4,000,000'} isMoney/>
        </div>
    <div className="flex w-full px-6 mb-2">
       <div className="bg-white">
       <Major />
       </div>
       <div style={{ marginLeft: 2 }} className="w-full">
       <div style={{ marginBottom: 2, height: 130 }} className="bg-white w-full px-10 py-2">
               <h5 className="text-xs font-bold">Orders</h5>
               <Ruler />
               <p className="text-xs">Pending Orders: <span style={{color:'#FDC203'}}>20</span></p>
               <p className="text-xs">Reconcilled Orders: <span style={{color:'#27AE60'}}>80</span></p>
               <p className="text-xs">Total Orders: <span style={{color:'#1860EC'}}>100</span></p>
       </div>
       <div style={{ height: 130 }} className="bg-white w-full px-10 py-2">
               <h5 className="text-xs font-bold">Payments</h5>
               <Ruler />
               <p className="text-xs">Un-reconcilled Payments: <span style={{color:'#FDC203'}}>20</span></p>
               <p className="text-xs">Reconcilled Payments: <span style={{color:'#27AE60'}}>80</span></p>
               <p className="text-xs">Total Payments: <span style={{color:'#1860EC'}}>100</span></p>
       </div>
       </div>
    </div>
    </div>
    )
}

export default DataViz

