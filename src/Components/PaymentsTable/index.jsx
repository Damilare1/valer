import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { PaidItems } from '../Data';

const Payment = () => (
    <div className="px-4 w-full" >
        <h4 className="text-2xl">Payments</h4>
        <div className="inline-flex my-4 w-full items-center">
            <p className="w-1/4 mr-2 text-sm">Showing <span className="text-customBlue">20</span> out of 500 payments</p>
            <div className="w-1/3 border-b border-grey-400 inline-flex items-center mr-4">
                <FontAwesomeIcon className="text-custom-grey-800" icon={faSearch} />
                <input className="w-full"/>
            </div>
            <div className="inline-flex w-1/3 items-center text-sm">
                <p>Show</p>
                <select className="mx-2 px-4 py-2 w-3/5 bg-white border border-grey-400 shadow">
                    <option>All</option>
                    <option>Reconcilled</option>
                    <option>Un-reconcilled</option>
                    <option>Settled</option>
                    <option>Unsettled</option>
                </select>
            </div>
        </div>
        <table className="w-full">
            <tr style={{ backgroundColor: "#EAEEF0", color: "#7F8FA4"}} className="font-light">
                <th >Item Type</th>
                <th className="py-2 px-10">Price</th>
                <th className="px-10">Transaction No</th>
                <th className="px-10">Time</th>
                <th className="px-10 text-left"></th>
                <th className="px-10 text-left"></th>
            </tr>
            <tbody>
                {
                    PaidItems.map(item => (
                        <tr className="border-b border-grey-500 text-sm bg-white">
                        <td className="flex items-center px-10 py-5">
                            <p 
                                className="rounded-full bg-grey-800 text-center text-white flex items-center justify-center mr-6" 
                                style={{width: 40, height: 40}}>
                                {item.itemLogo}
                            </p>{item.name}</td>
                        <td className="px-10"><p className="text-center">${item.price}</p></td>
                        <td className="px-10">{item.transactionNumber}</td>
                        <td className="px-10">{item.time}</td>
                        <td className="px-10 inline-flex items-center">
                            <div style={{ color:`${item.payment === "Reconciled" ? '#27AE60' : (item.payment === "Un-Reconciled" ? '#7F8FA4' : (item.payment === "Pending" ? '#EBC315' : '' ))}` }} className="mr-6 py-2 px-4 rounded-l-full rounded-r-full inline-flex border items-center">
                                <FontAwesomeIcon className="text-xs mr-2" icon={faCircle}/> 
                                <span className="text-xs">{item.payment}</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <FontAwesomeIcon className="text-grey-400 text-2xl" icon={faAngleDown} />
                            </div>
                        </td>
                    </tr>     
                    ))
                }
            </tbody>
        </table>
    </div>
)

export default Payment;