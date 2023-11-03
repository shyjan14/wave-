import './style.css';
import special1 from './img/special-01.jpg'
import special2 from './img/special-02.jpg'
import special3 from './img/special-03.jpg'
import special4 from './img/special-04.jpg'
import special5 from './img/special-05.jpg'
import special6 from './img/special-06.jpg'

export default function Special() {
    return (
        <div className='special-menu'>
            <div className='special'>
                <img src={special1} alt="" />
                <div className='one'>
                    <h2 style={{color:"#3CC",marginLeft:"20px"}}>Special One</h2>
                    <p>Here is a short text description for the first special item.
                        You are not allowed to redistribute this template ZIP file.</p>
                </div>
            </div>
            <div className='special'>
                <img src={special2} alt="" />
                <div className='one'>
                    <h2 style={{color:"#3CC"}}>Second Item</h2>
                    <p>You are allowed to download, modify and use this template for your commercial or non-commercial websites.</p>
                </div>
            </div>
            <div className='special'>
                <img src={special3} alt="" />
                <div className='one'>
                    <h2  style={{color:"#3CC"}}> Third Special Item </h2>
                    <p>Pellentesque in ultrices mi, quis mollis nulla. Quisque sed commodo est, quis tincidunt nunc.</p>
                </div>
            </div>
            <div className='special'>
                <img src={special4} alt="" />
                <div className='one'>
                    <h2  style={{color:"#3CC"}}>Special Item Fourth</h2>
                    <p>Vivamus finibus nulla sed metus sagittis, sed ultrices magna aliquam. Mauris fermentum.</p>
                </div>
            </div>
            <div className='special'>
                <img src={special5} alt="" />
                <div className='one'>
                    <h2  style={{color:"#3CC"}}>Sixth Sense</h2>
                    <p>Here is a short text description for sixth item. This text is four lines.</p>
                </div>
            </div>
            <div className='special'>
                <img src={special6} alt="" />
                <div className='one'>
                    <h2  style={{color:"#3CC"}}>Seventh Item</h2>
                    <p>Curabitur eget erat sit amet sapien aliquet vulputate quis sed arcu.</p>
                </div>
            </div>

        </div>
    )
}