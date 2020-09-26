import React from 'react';
import './style.css'


const Home = () => {
    return ( <React.Fragment>
        
  <div className="headern">
    <div className="slidern">
      <div className="containern">
        <div className="intro">
          <h2>MY RESUME PAGE</h2>
        </div>
      </div>
</div></div>   

<div className="my-skills">
    <div className="containern">
      <div className="skills">
        <h2>My skills</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt Duis aute irure dolor in
          reprehenderit .</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit .</p>
        <a href="tel:+989373834352"><button type="button" className="my-button" name="button">Contact Me</button></a>
      </div>
    
      <div className="progress">
        <ul>
          <li><div className="technique">
          <h3>Html / CSS</h3>
          <div><span style={{width :'150%'}}>83%</span></div>
        </div>
        </li>

          <li><div className="technique">
          <h3>Java Script</h3>
          <div><span style={{width :'98%'}}>68% </span></div>
        </div>
        </li>
          <li>
          <div className="technique">
          <h3>Graphic Design</h3>
          <div><span style={{width :'40%'}}>40% </span></div>
        </div>
          </li>
        </ul>
        
        
        
        
      </div>
    </div>
  </div>
  


  <div className="resume">
    <div className="containern">
      <h2>Resume</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor. </p>
      <a href="http://s14.picofile.com/file/8409226668/resume.html.html" target="_blank" download="resume"> <button type="button" className="my-button" name="button">Download Resume</button></a>
    </div>
  </div>
  
  <div className="testimonials">
    <div className="containern">
      <q>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt Duis aute irure dolor in
        reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit</q>
      
    </div>
  </div>
  <div className="portfolio">
    <div className="containern">
      <h2 className="he">Portfolio</h2>
      <p className="paragrph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit. </p>
     
    </div>
  </div>

  
  <div class="contact-me">
    <div class="container">
      <div class="info">
        <h2>Contact Me</h2>
        <p class="paragrph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit. </p>
        <address class="paragrph">
          Emam street <br />
          Tehran <br />
           <br></br>
        </address>
        
        <p class="paragrph">
          <strong>Email:</strong> alikalantari7777@gmail.com.com <br/>
          <strong>Phone:</strong> +989373834352
        </p> 
      </div> </div> 
      <form class="form">
        <label>Name *</label>
        <input type="text" name="Name" value="Your Name"/>
        <label>Email Adress *</label>
        <input type="email" name="Email Adress" value="Your Email Adress" />
        <label>Message *</label>
        <textarea name="Message" rows="10" cols="80">Your Message</textarea>
        <input type="submit" name="Contact Me" value="Contact Me"/>
      </form>
    </div>


    <div class="footer">
    <div class="container">
      <div class="footer-folat">
      <span class="he">Copyright &copy; A_K_15</span>
      <ul>
        <li><a href="https://www.linkedin.com/in/ali-kalantari-60480b19a"><i class="fa fa-fw fa-linkedin"></i></a></li>
        <li><a href="https://github.com/ali-start15"><i class="fa fa-fw fa-github"></i></a></li>
        <li><a href="alikalantari7777@gmail.com" title="My E-mail"><i class="fa fa-fw fa-envelope"></i></a></li>
      </ul>
      </div>
<div class="footer-float">
      <div class="bigThink">
        <h4 class="he">Big Thanks</h4>
        <a href="http://laitec.ir/">Laitec</a>
      </div>
      </div>
    </div>
  </div>



    </React.Fragment>
        
    
        
);
}
 
export default Home;