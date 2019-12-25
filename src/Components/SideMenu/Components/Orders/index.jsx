import React from 'react';
import { faList } from '@fortawesome/free-solid-svg-icons';
import Item from '../Item';

const OrderMenu = () => (
    <div className="mt-10">
    <h4 className="px-10 font-hairline text-custom-grey text-sm">Orders</h4>
    <Item icon={faList} item="All Orders"/>
    <Item icon={faList} item="Pending Orders"/>
    <Item icon={faList} item="Reconcilled Orders"/>
    </div>
);

export default OrderMenu;