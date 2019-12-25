import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ item, icon, isActive }) => (
    <div style={{left: "0", right: "0", top: "6.22%", bottom: "86.05%" }} className={`${isActive ? 'pl-1' : ''} w-full bg-customBlue my-2`}>
    <div 
        style={{ lineHeight: '15px', backgroundColor: `rgb(255,255,255,${ isActive ? 0.8 : 1 })` }}
        className={`flex text-sm items-center h-full py-3 ${isActive ? 'px-9' : 'px-10'} w-full font-hairline text-custom-grey`}>
        <FontAwesomeIcon icon={icon}/>
        <p className="pl-2">{item}</p>
    </div>
    </div>
)

export default Item;