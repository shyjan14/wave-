import './style.css';
import Hotamericano from './img/hot-americano.png'
import Hotcappuccino from './img/hot-cappuccino.png'
import Hotespresso from './img/hot-espresso.png'
import Hotlatte from './img/hot-latte.png'
// import Hotcappuccino from './img/hot-cappuccino.png'
export default function Hotcoffe() {
    return (
        <div id='imge'>
            <div className='iced-menu'>
                <div >
                    <img src={Hotamericano} alt='tea' />
                </div>
                <div >
                    <div id='sub1'>
                        <div className='menu-head'>
                            <h3>Hot Americano</h3>
                            <h3 style={{color:"#96FEFF"}}>$8.50</h3>
                        </div>
                        <p>Here is a short description for the item along with a squared thumbnail.</p>

                    </div>
                </div>
            </div>
            <div className='iced-menu'>
                <div>
                    <img src={Hotcappuccino} alt='tea' />

                </div>
                <div>
                    <div id='sub1'>
                        <div className='menu-head'>
                            <h3>Hot Cappuccino</h3>
                            <h3 style={{color:"#96FEFF"}}>$9.50</h3>
                        </div>
                        <p>Here is a list of 4 items that can add more as you need. Only content area will be scrolling.</p>

                    </div>
                </div>
            </div>
            <div className='iced-menu'>
                <div>
                    <img src={Hotespresso} alt='tea' />

                </div>
                <div>
                    <div id='sub1'>
                        <div className='menu-head'>
                            <h3> Hot Espresso</h3>
                            <h3 style={{color:"#96FEFF"}}>$7.50</h3>
                        </div>
                        <p>Left side logo and main menu are fixed. The video background is fixed.</p>

                    </div>
                </div>
            </div>
            <div className='iced-menu'>
                <div>
                    <img src={Hotlatte} alt='tea' />

                </div>
                <div>
                    <div id='sub1'>
                    <div className='menu-head'>
                        <h3> Hot Latte</h3>
                        <h3 style={{color:"#96FEFF"}}>$6.50</h3>
                    </div>
                        <p>Page contents are organized into 3 tabs to show different lists of items.</p>

                    </div>
                </div>
            </div>



        </div>
    )

}