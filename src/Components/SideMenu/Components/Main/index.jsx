import React from 'react';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import Item from '../Item';

const Main = () => (
    <div className="mt-4">
    <h4 className="px-10 font-hairline text-custom-grey text-sm">Main</h4>
    <Item isActive icon={faTachometerAlt} item="Overview"/>
    </div>
);

export default Main;