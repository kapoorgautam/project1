import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import pro2 from "../assets/project2.jpg"
import pro4 from "../assets/project4.webp"
import React from 'react'
import "./AboutcardStyles.css";


const AboutContent = () => {
  return (
    <>
 
    <div className="about">
      <div className="left">
        <h1> why choose us...</h1>
        <p>
        Currently working in Jivisha advanced medical centre,paschim vihar,Delhi...
Treated 200 + patient in clinical practice..
Also have 6 months experience from "Rohtak PGIMS"

</p>
{/* my self gautam */}

        <Link to="/Contact" className="btn"> Contact </Link>
          <div>
          <div className="acard">
       <h1 className="plans-heading">SERVICES WE PROVIDE</h1>
        <div className="card1-container">
       
            <div className="acard1">
                <h3> HOME SERVICE</h3>
                <span className="bar"></span>
                <p className="btc"> Rs.500</p>
                
                <p> Responsive Design </p>
            
            </div>
            <div className="acard1">
                <h3> CLINICSL SERVICE </h3>
                <span className="bar"></span>
                <p className="btc"> rs.300</p>
               
                <p> Responsive Design </p>
              
            </div>
            <div className="acard1">
                <h3> ONLINE SERVICE </h3>
                <span className="bar"></span>
                <p className="btc"> Rs.200</p>
                
                <p> Responsive Design </p>
              
            </div>
            <div className="acard1">
                <h3> ONLINE SERVICE </h3>
                <span className="bar"></span>
                <p className="btc"> Rs.200</p>
                
                <p> Responsive Design </p>
              
            </div>
            <div className="acard1">
                <h3> ONLINE SERVICE </h3>
                <span className="bar"></span>
                <p className="btc"> Rs.200</p>
                
                <p> Responsive Design </p>
              
            </div>
              
              
        </div>
      
    </div>
          </div>

      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={pro4} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={pro2} className="img" alt="true" />
          </div>
        </div>
      </div>


    </div></>

  )
}

export default AboutContent
