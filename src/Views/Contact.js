import '../CSS/Contact.css';
import Header from '../Utils/Header';
import Footer from '../Utils/Footer';



 
function Contact() {
    return <>
    <Header/>
    <div className='photobox'>How can we help you?</div> 
    <div className='smalltext'>Do you have a question or are you interested in working </div> 
    <div className='smalltext2'> with us? Just fill out the form below</div> 
    

    <div className='mytext'>
         <form>
           <label>
                 <input className='sonutext' type="text" placeholder="i'd like to ask about..."/> 
                 
           </label>   
         </form>

    </div>
  <div className='mydetails'>
      <input className='Name' type="text" placeholder="Name"/>
      <input className='email' type="text" placeholder="Email"/>
 
  </div>
  <div className='mytext'>
         <form>
           <label>
                 <input className='sonutext' type="text" placeholder='Type Massage Here'/> 
                 
           </label>   
         </form>

    </div>
    <div className='mybutten'>
          <button className='submit'>
               submit
          </button>
        
     </div>
     <div className='mytext'></div> 



    <Footer/>
   </> 
}
export default Contact;