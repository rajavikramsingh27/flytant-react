import '../CSS/Ads.css';
import Header from '../Utils/Header';
import Footer from '../Utils/Footer';
import woman3 from '../Assets/Images/woman3.png';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';

import instapick from '../Assets/Images/instapick.png';
import youtube from '../Assets/Images/youtube.png';
import twitter from '../Assets/Images/twitter.png';
import mail from '../Assets/Images/mail.png';
import faceb from '../Assets/Images/faceb.png';

import link from '../Assets/Images/link.png';






function Career() { 
     const arrFlytant = [
          "You may see various kinds of ads on Flytant, including Sponsored Ads, Promoted Ads and Promoted Posts. We can show these ads to you when you are logged in or logged out of Flytant. They are clearly marked with a “Sponsored” icon. You can interact with most promoted content in much the same way as organic content.",


     ]
      const arrFlytantname = [
           "Your activity on Flytant, the information you provide to Flytant, and our relationships with ad partners all help to make the sponsored content more relevant for you.",
           "When you use Flytant to follow, Like, search, view, or interact with posts or Flytant accounts, we may use these actions to customise Flytant Ads for you. Have more fun with For example, if you search for a specific term, we may show you promoted content related to that topic. We also might customize ads using other information about you, such as your profile information; your mobile device location (if location features are turned on); your IP address; or the apps installed on your device. This helps us show you local ads and other ads that you might prefer.",
           "Flytant may also personalise ads based on information that Flytant and our affiliates collect and that our ad partners share with us, such as a hashed email address, a mobile device identifier, or browser-related information (a browser cookie ID).",
           "This helps Flytant display ads about things you’ve already shown interest in from brands and businesses that you may like.. You could also see this business as a Promoted Account in one of your “Who to Follow” suggestions.",

      ]
   

    return <>
    <Header/>
    <div className='privacy'>Flytant Ads</div>
    <div className='These'>We want to show you ads that are meaningful and you find them interesting and useful. Here’s an overview of how Flytant Ads work.  </div>
    
   



    <div className='dataName'>what are Flytant Ads?
               {
                    arrFlytant.map(data => 
                         <div className='dataprivacy'>{data}</div>
                    )
               }

               
          </div>
          <div className='dataName'>Why you see certain Ads?
               {
                    arrFlytantname.map(data => 
                         <div className='dataprivacy'>{data}</div>
                    )
               }

               
          </div>
          
          <div className='blankbox'></div>


     <div className='icon'>
    <div className='icontext'>Or connect with us on</div>
    <div className='mini'>
    <div className='collam'>
        <img className='collamimg' src={instapick} alt="instapick.png" />


    </div>
    <div className='collam'>
         <img className='collamimg' src={youtube} alt="youtube.png" />


    </div>
    <div className='collam'>
         <img className='collamimg' src={faceb} alt="faceb.png" />


    </div>
    <div className='collam'>
         <img className='collamimg' src={link} alt="link.png" />


    </div>
    <div className='collam'>
         <img className='collamimg' src={twitter} alt="twitter.png" />


    </div>
    <div className='collam'>
         <img className='collamimg' src={mail} alt="mail.png" />


    </div></div>

</div>

    



    <Footer/>
   </>
}
export default Career;