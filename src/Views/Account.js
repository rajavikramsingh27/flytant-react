import React from 'react'
import '../CSS/Account.css';

function Account() {
  return (
      <>


    <div className='twobox'>
        <div className='whitebox'>
        <div className='screensignin'>Sign in</div>
        <div className='screenicon'> 
         <div className='fac'></div>
         <div className='fac'></div>
        <div className='fac'></div>

        </div>
        <div className='or'>Or use your account</div>
         <div className='input'>
             <input className='naam' type="text" placeholder='Name'/>
         </div>
          <div className='input'>
             <input className='naam' type="text" placeholder='password'/>
         </div>
         <div className='or'>Forget your Password?</div>
         <div className='radsign'> Sign in </div>






        </div>
        <div className='radbox'> 
         <div className='create'>Hello, Friend!</div>
          <div className='enter'>Enter your parsonal details and</div> 
          <div className='enter'> Journey with us</div>
          <div className='sign'> Sign in </div>


        </div>

    </div>



    </>
  )
}

export default Account;