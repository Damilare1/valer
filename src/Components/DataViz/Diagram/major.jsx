import React, { useState, useEffect } from 'react';
import rD3 from 'react-d3-library';
import node from './index';

const { Component } = rD3;

const Major = () => {
    const [ d3, setD3 ] = useState('');
    useEffect(() => {
        setD3(node);
    }, []);

    return (
        <>
            <div className="flex justify-between w-full p-4 items-center">
                <div className="flex justify-between w-full">
                    <p className="text-sm font-bold">Today: 5, Aug 2018</p>
                    <select className="border border-grey-200 bg-white text-sm text-grey-600 w-40 h-8">
                        <option>1 Jan - 1 Jun</option>
                    </select>
                </div>
                <div className="text-sm font-light flex mx-8 w-20 items-center justify-between">
                    <button className="bg-grey-200 rounded h-6 shadow px-2 pb-1 text-grey-600 border border-grey-400">&lt;</button>
                    <button className="bg-grey-200 rounded h-6 shadow px-2 pb-1 text-grey-600 border border-grey-400">&gt;</button>
                </div>
            </div>
               <Component data={d3} />
        </>
    )
}

export default Major;