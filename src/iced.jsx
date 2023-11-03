import './style.css';
import Icedcappuccino from './img/iced-cappuccino.png'
import Icedespresso from './img/iced-espresso.png'
import Icedlatte from './img/iced-latte.png'
export default function Iced_coffee() {
    return (
        <div id='imge'>
        <div className='iced-menu'>
            <div >
            <img src="https://www.tooplate.com/templates/2121_wave_cafe/img/iced-americano.png" alt='tea' />
            </div>
            <div >
                <div id='sub1'>
                <div className='menu-head'>
                    <h3>Iced Americano</h3>
                    <h3 style={{color:"#96FEFF"}}>$10.25</h3>
                </div>
                    <p>Here is a short description for the first item. Wave Cafe Template is provided by Tooplate.</p>

                </div>
            </div>
        </div>
        <div className='iced-menu'>
            <div>
            <img src={Icedcappuccino} alt='tea' />
           
            </div>
            <div>
                <div id='sub1'>
                <div className='menu-head'>
                    <h3>Iced Cappuccino</h3>
                    <h3 style={{color:"#96FEFF"}}>$12.50</h3>
                </div>
                    <p>Here is a list of 4 items or add more. You can use this template for commercial purposes.</p>

                </div>
            </div>
        </div>
        <div className='iced-menu'>
            <div>
            <img src={Icedespresso} alt='tea' />
           
            </div>
            <div>
                <div id='sub1'>
                <div className='menu-head'>
                    <h3>Iced Espresso</h3>
                    <h3 style={{color:"#96FEFF"}}>$14.25</h3>
                </div>
                    <p>You are not permitted to redistribute this template ZIP file on any other template websites.</p>

                </div>
            </div>
        </div>
        <div className='iced-menu'>
            <div>
            <img src={Icedlatte} alt='tea' />
           
            </div>
            <div>
                <div id='sub1'>
                <div className='menu-head'>
                    <h3>Iced Latte</h3>
                    <h3 style={{color:"#96FEFF"}}>$11.50</h3>
                </div>
                    <p>Contents are organized into 3 tabs. Please contact Tooplate if you have anything to ask.</p>

                </div>
            </div>
        </div>
        
        

    </div>
    )
}