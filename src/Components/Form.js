import "./FormStyles.css"
import React from 'react'



const Form = () => {
  return (
   
     <><div className="form">
        <div className="left">
        <form>
        <label>Name</label>
        <input type="text"></input>
         <div>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
         <label class="form-check-label" for="flexRadioDefault1">MALE</label>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
        <label class="form-check-label" for="flexRadioDefault2">FEMALE </label>
        </div>
        <label>Age</label>
        <input type="int"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>CONTACT NO</label>
        <input type="text"></input>
        <label>Condition for which you seek physiotherapy</label>
        <textarea rows="6" placeholder="Type your Condition HERE!" />
        <button className="btn">Submit</button>
        </form>
         </div>
     
      
      
       


    
      
      </div>
      
      <div class="mapouter">
      <div class="gmap_canvas">
       {/* eslint-disable-next-line */}
      <iframe width="100%" height="100%" id="gmap_canvas" 
      
      src="https://maps.google.com/maps?q=N.K. physiotherapy clinic A-26, shiv bux park, Shiv Park, Nangloi, Delhi, 110041&t=&z=12&ie=UTF8&iwloc=&output=embed"
      frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      
      
      </div>
      </div></>
  )
}

export default Form
