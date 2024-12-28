"use client"

import { useState } from "react";

const SwitchButton = () => {
    const [active, setActive] = useState('lease');

    function handler(prop:any) {
        setActive(prop);
    }

    return ( 
        <div className="bg-[#DFDFDF] p-1 rounded-sm flex space-x-2 w-full justify-between">
            <div className={`rounded-sm px-3 py-1 leading-6 cursor-pointer ${active == 'buy' ? 'bg-[#36333D] text-white' : ''}`} onClick={()=>handler('buy')}>Buy</div>
            <div className={`rounded-sm px-3 py-1 leading-6 cursor-pointer ${active == 'lease' ? 'bg-[#36333D] text-white' : ''}`} onClick={()=>handler('lease')}>Lease</div>
        </div>
     );
}
 
export default SwitchButton;