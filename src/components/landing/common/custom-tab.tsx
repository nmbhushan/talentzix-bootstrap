"use client";
import React, { useEffect, useState } from 'react';

const CustomTab = ({tab, className}:any) => {

    const [tabActive, setTabActive] = useState(tab[0].id);
    
    const handler = (data:any) => {
       setTabActive(tabActive);
    }

    return (
        <div className={`border-b my-4 flex flex-wrap items-center space-x-4 ${className}`}>
            {tab.map((item:any, i:number) => ( 
            <div key={i} onClick={() => handler(item.id)} className={`p-3 border-b cursor-pointer ${item.id == tabActive ? 'border-black text-black' : 'text-[#C1C1C1] border-transparent' }`} >{item.name}
            {console.log(tabActive)}
            </div>
            ))}
          
        </div>
    );
}

export default CustomTab;