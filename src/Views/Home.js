import '../CSS/Home.css';
// import'../Views/Home.js';
import Header from '../Utils/Header';
import Footer from '../Utils/Footer';
import Android from '../Assets/Images/Android.png';
// import App from '../Assets/Images/App.png';
import dancer from '../Assets/Images/dancer.png';
import dot from '../Assets/Images/dot.png';
import girls from '../Assets/Images/girls.png';
import icin from '../Assets/Images/icin.png';
// import logofly from '../Assets/Images/logofly.png';
import music from '../Assets/Images/music.png';
import singing from '../Assets/Images/singing.png';



function Home() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    return <>

        <Header></Header>
        <div className='box2'>
            <div className='company'>
                <div className='text'>Connecting</div>
                <div className='text'>Brands & Influencers</div>
                <div className='text2'>Find Influencers and brands of your niche</div>
                <div className='textimg'>
                    <div className='minibox'>
                        <img className='Third' src={Android} alt="Android.png" />

                    </div>
                    <div className='Apps'>
                        <img className='Third' src={Android} alt="Android.png" />

                    </div>
                </div>

            </div>
            <div className='companyimg'>
                <img className='secound' src={girls} alt="girls.png" />
            </div>
            <div className='iconbox'>
                <img className='play' src={icin} alt="icin.png" />

            </div>

        </div>
        <div className='black'>
            <div className='dance'>
                <img className='danceimg' src={dancer} alt="dancer.png" />

            </div>
            <div className='textfor'>
                <div className='inf'>Flytant For</div>
                <div className='influ'>Influencers</div>
                <div className='the'>
                    <div className='Join'>Join the fastest growing influencers </div>
                    <div className='Join'>community and Get Sponsorships </div>
                    <div className='Join'>from Brands to Monetise your</div>
                    <div className='Join'>Content</div>
                </div>
                <div className='Joinbutten'>Join Now</div>


            </div>
            <div className='dotsize'>
                <img className='dotimg' src={dot} alt="dot.png" />


            </div>
        </div>
        <div className='black2'>

            <div className='whiteblack'>R</div>
            <div className='dance2'>
                <img className='danceimg2' src={music} alt="music.png" />

            </div>
            <div className='textfor2'>
                <div className='inf'>Flytant For</div>
                <div className='influ'>Influencers</div>
                <div className='the'>
                    <div className='Join'>Join the fastest growing influencers </div>
                    <div className='Join'>community and Get Sponsorships </div>
                    <div className='Join'>from Brands to Monetise your</div>
                    <div className='Join'>Content</div>
                </div>
                <div className='Joinbutten'>Join Now</div>


            </div>



        </div>
        <div className='black3'>
            <div className='background2'></div>
            <div className='singingbox'>
                <img className='singimg' src={singing} alt="singing.png" />


            </div>
            <div className='textfor3'>
                <div className='inf'>Its all hear.</div>
                <div className='influ'>all in one spot.</div>
                <div className='the'>
                    <div className='Join6'>Flytant is the go to platform for  </div>
                    <div className='Join6'>Influencer Marketing .We provide a </div>
                    <div className='Join6'>holistic platform for influencers and</div>
                    <div className='Join6'>Brands to connect toghter</div>
                    <div className='Join6'>transparently and make the most of</div>
                    <div className='Join6'>thir Collaboration.</div>

                </div>
                <div className='Joinbutten3'>Get Onboard</div>

            </div>


        </div>
        <div className='black4'></div>
        <Footer></Footer>





    </>
}
export default Home;