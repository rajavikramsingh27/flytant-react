
// import './Header.css';
import '../CSS/Header.css';
import logofly from '../Assets/Images/logofly.png';


function Header() {
    return <> 
    <div className='box'>
    <div className='logobox'>
        <div className='logo1'>
            <img className='first' src={logofly} alt="logofly.png"/>


        </div>
        <div className='logo2'> Flytant</div>
        <div className='logo3'> Contact</div>

    </div> 
    
    
    </div>
    
             
    </>
}


export default Header;