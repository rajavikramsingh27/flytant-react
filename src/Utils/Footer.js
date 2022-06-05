import '../CSS/Footer.css';
import logofly from '../Assets/Images/logofly.png';
import Apps from '../Assets/Images/Apps.png';
import Android from '../Assets/Images/Android.png';
import { useNavigate } from "react-router-dom"



function Footer() {

    let navigate = useNavigate();


    return <>


        <div className='black5'>
            <div className='box1234'>

                <img className='logofly' src={logofly} alt="logofly.png" />
                <div className='name'>Flytant</div>
                <div className='brand'>connecting Brands & Infliencers</div>

                <div className='radiousbox'>
                    <div className='radious'>
                        <i className="fa-brands fa-instagram-square"></i>

                    </div>
                    <div className='radious'>
                        <i className="fa-brands fa-youtube"></i>

                    </div>
                    <div className='radious'>
                        <i className="fa-brands fa-facebook"></i>

                    </div>
                    <div className='radious'>
                        <i className="fa-brands fa-linkedin"></i>

                    </div>
                    <div className='radious'>
                        <i className="fa-brands fa-twitter-square"></i>

                    </div>
                    <div className='radious'>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                </div>
                
            </div>
            <div className='box23'>
                <div className='home' onClick={() => {
                    window.scrollTo(0, 0)
                    navigate("/Home")
                }} >Home</div>
                <div className='home' onClick={() => {
                    navigate("/About")
                    window.scrollTo(0, 0)
                }} >About </div>
                <div className='home' onClick={() =>{
                    navigate("/Blogs")
                    window.scrollTo(0, 0) 
                }}>Blogs</div>
                <div className='home'onClick={() =>{
                    navigate("/Career")
                    window.scrollTo(0, 0)

                }}
                >Career</div>
            </div>
            <div className='box23'>
                <div className='home' onClick={() =>{
                     navigate("/Contact")
                     window.scrollTo(0, 0)
                }}
                >Contact</div>
                <div className='home' onClick={() =>{
                     navigate("/Terms")
                     window.scrollTo(0, 0)
                }}
                > Terms</div>
                <div className='home' onClick={() =>{
                    navigate("/Ads")
                    window.scrollTo(0, 0)
                }}
                >Ads</div>
                <div className='home' onClick={() =>{
                    navigate("/Priveacy")
                    window.scrollTo(0, 0)
                }}
                >Priveacy</div>
            </div>
            <div className='box1234'>
                <div className='Get'>Get the apps!</div>
                <div className='mark'>
                    <img className='thaapp' src={Apps} alt="Apps.png" />

                </div>
                <div className='mark'>
                    <img className='thaapp' src={Android} alt="Android.png" />

                </div>

            </div>


        </div>
        
        <div className='line'>
            @ Flytant 2022
        </div>




    </>
}


export default Footer;