import './style.css';
// import IcedAmericanoImage from './iced-americano.png';

import { useState } from 'react';
import DrinkMenu from './Drinkmenu';
import Contact from './contact';
import Special from './special';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faComments,faMugHot,faUsers,faMartiniGlass} from '@fortawesome/free-solid-svg-icons';

export default function Main() {

const [menu,setMenu]=useState('drink');


    return (

        <>
            <section className="head-section">
                <div className="head-sub" >


                    <div className="sub">

                        <div id='myid1'>
                            <div id='dash' className='menu item1' style={{backgroundColor:'white'}}>
                                <h1 style={{color:'#099'}}> <FontAwesomeIcon icon={faCoffee} size='2x' className='icon-move'/><b>Wave Cafeeeeeeeeeeeeee</b></h1>
                            </div>
                            {
                            menu=='drink'?<div onClick={()=>setMenu('drink')} className='menu' style={{ height: "126px",backgroundColor:'#099',color:'white' }}>
                                <h2 ><FontAwesomeIcon icon={faMugHot}  className='icon-move'/>Drink Menu</h2>
                            </div>:  <div onClick={()=>setMenu('drink')} className='menu' style={{ height: "126px", }}>
                                <h2><FontAwesomeIcon icon={faMugHot}  className='icon-move'/>Drink Menu</h2>
                            </div>
                            }
                          
                            {menu=="about"?<div onClick={()=>setMenu('about')} className='menu' style={{height: "126px",backgroundColor:'#099',color:'white' }}>
                                <h2 ><FontAwesomeIcon icon={faUsers}  className='icon-move'/>About Us</h2>
                            </div>:<div onClick={()=>setMenu('about')} className='menu' style={{height: "126px" }}>
                                <h2 ><FontAwesomeIcon icon={faUsers}  className='icon-move'/>About Us</h2>
                            </div>}
                            {menu=="special"?<div onClick={()=>setMenu('special')} className='menu' style={{  height: "126px",backgroundColor:'#099',color:'white' }}>
                                <h2><FontAwesomeIcon icon={faMartiniGlass}  className='icon-move'/>Special Items</h2>
                            </div>:<div onClick={()=>setMenu('special')} className='menu' style={{  height: "126px" }}>
                                <h2><FontAwesomeIcon icon={faMartiniGlass}  className='icon-move'/>Special Items</h2>
                            </div>}
                            {menu=="contact"?<div onClick={()=>setMenu('contact')} className='menu' style={{  height: "126px",backgroundColor:'#099',color:'white' }}>
                                <h2><FontAwesomeIcon icon={faComments}  className='icon-move'/>Contact</h2>
                            </div>:<div onClick={()=>setMenu('contact')} className='menu' style={{  height: "126px" }}>
                                <h2><FontAwesomeIcon icon={faComments}  className='icon-move'/>Contact</h2>
                            </div>}
                            

                            


                        </div>


                    </div>

                <div className='sub'>

                {menu=='drink'?<DrinkMenu/>:menu=='special'?<Special/>:menu=='contact'?<Contact/>:null}

                </div>

                {/* {menu=='contact'?:null} */}
                





                </div>


            </section>


        </>
    )
}