import '../CSS/Career.css';
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
   

    return <>
    <Header/>
    <div className='photobox'>
    <img className='photobox1' src={woman3} alt="woman3.png" />

    </div>
    <div className='textwe'>We're Hiring</div>

    <div className='smalltext'>Leave us a message. We’ll contact you soon </div> 
    
    <div className='mynam'>
         <form>
           <label>
                 <input className='sonu' type="text" placeholder='Name'/> 
                 <input className='sonumail' type="text" placeholder='Email'/>
           </label>   
         </form>
         
    </div>
    <div className='mytext'>
         <form>
           <label>
                 <input className='sonutext' type="text" placeholder='Type Massage Here'/> 
                 
           </label>   
         </form>

    </div>

     <div className='mytext'>
          <input className='chouse'  type="file" name='file' onChange={(e) => this.onchange(e)}/>
          

   
     </div>
     <div className='mybutten'>
          <button className='submit'>
               submit
          </button>
        
     </div> 
     <div className='mytext'></div>


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