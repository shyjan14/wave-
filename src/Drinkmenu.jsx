import Iced_coffee from './iced';

import Hotcoffe from './Hot_coffee';
import Fruit_smooth from './fruit';
import { useState } from 'react';

export default function DrinkMenu(){
    const [state,setState]=useState([]);

    return(

        <div className="sub">
        <nav id='mynav'>
            <div id='mydiv'>
                <ul id='nav'>
                    {state=="iced"?<li className="nav1" onClick={()=>setState('iced')} style={{color:"aqua",textDecoration: "underline",textUnderlineOffset:"5px",textDecorationThickness:"5px"}}>Iced Coffee</li>:<li className="nav1" onClick={()=>setState('iced')}>Iced Coffee</li>}
                    {state=="hot"?<li className="nav1" onClick={()=>setState('hot')}style={{color:"aqua",textDecoration: "underline",textUnderlineOffset:"5px",textDecorationThickness:"5px"}}>Hot Coffee</li>:<li className="nav1" onClick={()=>setState('hot')}>Hot Coffee</li>}
                    {state=='fruit'?<li className="nav1" onClick={()=>setState('fruit')}style={{color:"aqua",textDecoration: "underline",textUnderlineOffset:"5px",textDecorationThickness:"5px"}}>Fruit Juice</li>:<li className="nav1" onClick={()=>setState('fruit')}>Fruit Juice</li>}
                </ul>
            </div>
        </nav>
        <div className='scroll-bar'>
        {state=='iced'?<Iced_coffee/>:state=='hot'?<Hotcoffe/>:<Fruit_smooth/>}
        </div>

        
       


    </div>
    )
}