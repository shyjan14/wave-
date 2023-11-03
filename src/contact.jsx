import './style.css';


 export default function Contact(){
    return(
        <div className='contact1'>
            <div className='contact'>
                <h2 style={{color:"#3CC"}}>Contact Wave</h2>
                <p>Wave Cafe Template has a video background. You can use this layout for your websites. 
                    Please contact Tooplate's Facebook page. Tell your friends about our website.</p>
            </div>
            <div className='area'>
                <form action="">
                    <input type="text" name='name' placeholder='Name'/><br></br>
                    <input type="email" name='eamil' placeholder='Email'/>
                </form>
                <textarea name='Message'  rows={6} message>

                </textarea>
                 
            </div>
        </div>
    )
}