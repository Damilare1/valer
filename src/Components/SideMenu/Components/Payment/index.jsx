import React from 'react';
import { faDotCircle, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import Item from '../Item';

const OrderMenu = () => (
    <div className="mt-10">
    <h4 className="px-10 font-hairline text-custom-grey text-sm">Payments</h4>
    <Item icon={faFileAlt} item="All Payments"/>
    <Item icon={faFileAlt} item="Reconcilled Payments"/>
    <Item icon={faFileAlt}  item="Un - Reconcilled Payments"/>
    <Item icon={faDotCircle} item="Manual Settlement"/>
    </div>
);

export default OrderMenu;