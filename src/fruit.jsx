import './style.css';
import Smoothie1 from './img/smoothie-1.png';
import Smoothie2 from './img/smoothie-2.png';
import Smoothie3 from './img/smoothie-3.png';
import Smoothie4 from './img/smoothie-4.png';
 export default function Fruit_smooth(){
    return (
        <div id='imge'>
            <div className='iced-menu'>
                <div >
                    <img src={Smoothie1} alt='tea' />
                </div>
                <div >
                    <div id='sub1'>
                    <div className='menu-head'>
                        <h3>Strawberry Smoothie</h3>
                        <h3 style={{color:"#96FEFF"}}>$12.50</h3>
                    </div>
                        <p>Here is a short description for the item along with a squared thumbnail.</p>

                    </div>
                </div>
            </div>
            <div className='iced-menu'>
                <div>
                    <img src={Smoothie2} alt='tea' />

                </div>
                <div>
                    <div id='sub1'>
                    <div className='menu-head'>
                        <h3>Red Berry Smoothie</h3>
                        <h3 style={{color:"#96FEFF"}}>$14.50</h3>
                    </div>
                        <p>Here is a list of 4 items or add more. You can use this template for commercial purposes.</p>

                    </div>
                </div>
            </div>
              <div className='iced-menu'>
                <div>
                    <img src={Smoothie4} alt='tea' />

                </div>
                <div>
                    <div id='sub1'>
                    <div className='menu-head'>
                        <h3>Pineapple Smoothie</h3>
                        <h3 style={{color:"#96FEFF"}}>$10.25</h3>
                    </div>
                        <p>You are not permitted to redistribute this template ZIP file on any other template websites.</p>

                    </div>
                </div>
            </div> 
            <div className='iced-menu'>
                <div>
                    <img src={Smoothie3} alt='tea' />

                </div>
                <div>
                    <div id='sub1'>
                    <div className='menu-head'>
                        <h3>Iced Latte</h3>
                        <h3 style={{color:"#96FEFF"}}>$10.25</h3>
                    </div>
                        <p>Contents are organized into 3 tabs. Please contact Tooplate if you have anything to ask.</p>

                    </div>
                </div>
            </div> 



        </div>
    )
}