import React from 'react'
import '../CSS/Media.css';
import Header from '../Utils/Header';
import Footer from '../Utils/Footer';
import Android from '../Assets/Images/Android.png';
import girls from '../Assets/Images/girls.png';
import icin from '../Assets/Images/icin.png';
import dancer from '../Assets/Images/dancer.png';
import music from '../Assets/Images/music.png';
import singing from '../Assets/Images/singing.png';


function Media() {
  return (
      <>
      <Header/>
      <div className='connecting'>
      <div className='connecting1'>
          <div className='conne'> Connecting</div> 
          <div className='conne' >Brands Influencer</div>
          <div className='find'> Find influencers and brands of your niche</div> 
          <div className='phone' >
              <div className='phone1' >
                   <img className='Android' src={Android} alt="Android.png" />
                  </div>
              <div className='phone2' > 
              <img className='Android' src={Android} alt="Android.png" />

              </div>

          </div>


      </div>
      <div className='connecting2'>
          <img className='girlimg' src={girls} alt="girls.png" />

      </div>


      </div>
      <div className='secoundbox'>
          <div className='secoundbox1'>
              <img className='step' src={dancer} alt="dancer.png" />

          </div>
          <div className='secoundbox2'>
          <div className='flytant'>Flytant For </div>
          <div className='flytant'>Influencer</div>
          <div className='the'> join the fastest growing influencers community ant get Sponcership  From Brands  to mantains your community</div>
          <div className='now'>Join Now</div>
          </div>

      </div>
      <div className='secoundbox'>
           <div className='secoundbox1'>
              <img className='step' src={music} alt="music.png" />

          </div>
           <div className='secoundbox2'>
          <div className='flytant'>Flytant For </div>
          <div className='flytant'>Brands</div>
          <div className='the'> Find the most facilites in your  brand Pormotion and rich Target Audiance and worldwide </div>
          <div className='now'>Promte now</div>
          </div>

      </div>
      <div className='secoundbox'>
          <div className='secoundbox1'>
              <img className='step' src={singing} alt="singing.png" />

          </div> 
          <div className='secoundbox2'>
          <div className='flytant'>Its all hear. </div>
          <div className='flytant'>All in one spot</div>
          <div className='the'> Find the most facilites in your  brand Pormotion and rich Target Audiance and worldwide </div>
          <div className='now'>Get onbord</div>
          </div>


      </div>

    <Footer/>
    

    </>
  )
}

export default Media;