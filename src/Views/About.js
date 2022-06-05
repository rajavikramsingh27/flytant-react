import '../CSS/About.css';
// import'../Views/Home.js';
import Header from '../Utils/Header';
import Footer from '../Utils/Footer';
import pick from '../Assets/Images/pick.png';
import camra from '../Assets/Images/camra.png';
import how from '../Assets/Images/how.png';
import hii from '../Assets/Images/hii.png';






function About() {
    return <>
        <Header></Header>
        <div className='about'>About</div>
        <div className='fast'>  Fastest Growing Platform Connecting Brands and Influencers</div>
        <div className='your'>Flytant is your Go-To Platform for Influencer Marketing. As a Brand we make it extremely easy and cost  </div>
        <div className='your'> effective to onboard Influencers. Similarly we ensure that Influencers can connect with brands directly</div>
        <div className='your'>and no mediation is required. </div>

        <div className='pick'>

            <div className='pickbox1'>
                <img className='firstpick' src={pick} alt="pick.png" />

            </div>
            <div className='pickbox2'>
                <img className='firstpick' src={camra} alt="camrass.png" />

            </div>

        </div>

        <div className='fast2'>Tailor-Made Platform for Brands  </div>
        <div className='your2'> We provide brands a complete Transparent way to post campaigns and Connect with Influencers </div>
        <div className='your2'> directly. Our app consists of some amazing features like Social Score, Social Search Engine, Social Profile</div>
        <div className='your2'>and many more that ensures hassle free methods to onboard influencers and promote your Products to </div>
        <div className='your2'> reach a global Audience.</div>


        <div className='pick'>

            <div className='pickbox1'>
                <img className='firstpick' src={hii} alt="hii.png" />

            </div>
            <div className='pickbox2'>
                <img className='firstpick' src={how} alt="how.png" />

            </div>

        </div>
        <div className='fast2'> Best Brand-Deals For Influencers </div>
        <div className='your2'> We ensure even micro influencers can monetise their social media content. As an influencer it's so easy to </div>
        <div className='your2'>connect with Brands. All you have to do is Download the App and Apply for Campaigns or Directly </div>
        <div className='your2'> message the Brands for Sponsorships.</div>

        <div className='grayitems'>
            <div className='graytext'>Get Onboard!</div>
            <div className='graytext2'>Fastest Growing Influencers Community </div>
            <div className='butten'>Download Now</div>


        </div>
        <div className='fast2'> Parental Touch </div>
        <div className='your2'> Flytant is a subsidiary of Flytant Developers Pvt. Ltd.</div>
        <div className='fast'>  </div>










        <Footer></Footer>
    </>
}
export default About;