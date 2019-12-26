import React, { useState, useEffect } from 'react';
import rD3 from 'react-d3-library';
import node from '../Diagram/mini';

const { Component } = rD3;

const Brief = ({ item, digit, isMoney }) => {
    const [ d3, setD3 ] = useState();
    useEffect(() => {
        setD3(node)
    }, [])
    return(
    <div className="bg-white flex p-2 shadow-md my-2">
        <div className="w-full">
            <p className="text-xs">{item}</p>
            <p className="font-bold text-sm">{isMoney ? `₦${digit}`: digit}</p>
        </div>
        <div>
            <Component data={d3}/>
        </div>
    </div>
)}

export default Brief