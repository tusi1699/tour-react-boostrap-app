import React from 'react'
import about from '../assests/image/about.jpg'
import s1 from '../assests/image/s1.jpg'
import s2 from '../assests/image/s2.jpg' 
import s4 from '../assests/image/s4.jpg'
import s6 from '../assests/image/s6.jpg'
import about2 from '../assests/image/about2.jpg'
import blog1 from '../assests/image/blog1.jpg'
import blog2 from '../assests/image/blog2.jpg'
import blog3 from '../assests/image/blog3.jpg'


export default function () {
  return (
    <>
    <section id='content-section'>


      {/* about us */}
<div className='container'>
<div className='row'>
<div className="col-md-6 mt-5 ">
<img src={about} alt="about" className='img-fluid '  />
</div>
<div className="col-md-6 mt-5">
  <h1 className='text-primary fs-1 mt-5'>about us</h1>
  <h1 className='mt-4'><b className='fs-1'>Plan Your Trip with Tours</b></h1>
  <p className='mt-5'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<p className='mt-5'><span className='bi bi-right'>
2000+ Our Worldwide Guide</span><br/><br/>
100% Trusted Tour Agency<br/><br/>
24+ Years of Experience<br/><br/>
100% Travelers are Happy</p>
<button type='button' className='btn btn-lg bg-primary text-white p-2 mt-4'>Booking Now</button>
</div>
</div>
</div>


{/* most-populat-tour */}
<div className='container-fluid'>
  <div className='row'>
<div className="col-md-3 border border-2 mt-4">
<img src={s1} alt="s1" className='img-fluid' />
<p className='mt-3 ms-3 text-center'><span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-half text-warning ms-2'></span>
  4.07</p>
  <h3 className='text-center'>Discovery Best Tour</h3>
  <p className='fs-5 text-center'> <span className='bi bi-geo-alt-fill text-primary'></span>Central park west-USA</p>
  <p className='text-center'>From <b className='text-primary fs-3'> $39.00</b></p>
</div>

<div className="col-md-3 border border-2 mt-4">
<img src={s2} alt="s2" className='img-fluid' />
<p className='mt-3 ms-3 text-center'><span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-half text-warning ms-2'></span>
  4.07</p>
  <h3 className='text-center'>Dubai Stuuning Place</h3>
  <p className='fs-5 text-center'> <span className='bi bi-geo-alt-fill text-primary'></span>5th Avenue  - LONDON</p>
  <p className='text-center'>From <b className='text-primary fs-3'> $49.00</b></p>
</div>
<div className="col-md-3 border border-2 mt-4">
<img src={s4} alt="s4" className='img-fluid' />
<p className='mt-3 ms-3 text-center'><span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-half text-warning ms-2'></span>
  4.07</p>
  <h4 className='text-center'>Switzerlend best zurich</h4>
  <p className='fs-5 text-center'> <span className='bi bi-geo-alt-fill text-primary'></span>zermatt-USA</p>
  <p className='text-center'>From <b className='text-primary fs-3'> $49.00</b></p>
</div>

<div className="col-md-3 border border-2 mt-4 ">
<img src={s6} alt="s6" className='img-fluid' />
<p className='mt-3 ms-3 text-center'><span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-fill text-warning ms-2'></span>
<span className='bi bi-star-half text-warning ms-2'></span>
  4.07</p>
  <h3 className='text-center'>Paris -Eiffel Towr</h3>
  <p className='fs-5 text-center'> <span className='bi bi-geo-alt-fill text-primary'></span>northan central -Paris</p>
  <p className='text-center'>From <b className='text-primary fs-3'> $69.00</b></p>
</div>
</div>
</div>


{/* Experience */}
<div className='container-fluid  mt-4 exp'>
  <p className='text-center pt-5 text-white'>Statistics</p>
  <h3 className='text-white text-center mt-2'>We have over 10 years Experience</h3>

<div className='icon mt-4'>
  <div className='ms-3'>
  <p><span className='bi bi-geo-alt-fill fs-1  text-white'></span></p>
  <h1 className='text-white'>200+</h1>
  <p className='text-white'>Total Destinations</p>
</div>
<div className='ms-3'>
  <p><span className='bi bi-emoji-smile-fill fs-1 text-white'></span></p>
  <h1 className='text-white'>100+</h1>
  <p className='text-white'>Happy People</p>
</div>
<div className='ms-3'>
  <p><span className='bi bi-award-fill fs-1 text-white'></span></p>
  <h1 className='text-white'>30+</h1>
  <p className='text-white'>Awards Won</p>
</div>
<div className='ms-3'>
  <p><span className='bi bi-umbrella-fill fs-1 text-white'></span></p>
  <h1 className='text-white'>130+</h1>
  <p className='text-white'>Stunning Places</p>
  </div>
</div>
</div>

{/* Our Services */}
<div className='container-fluid mt-5'>
<h3 className='text-primary text-center'>Our Services</h3>
<h2 className='text-center'><b>Our Amazing Services for your<br/> Travel</b></h2>
<div className='our-service mt-5'>
<div className='col-md-3 service'>
  <p className='text-center mt-3'><span className='bi bi-geo-alt-fill fs-2  text-primary '></span></p>
  <h3 className='mt-3 text-center'><b>WildLife-Tours</b></h3>
  <p className='mt-3 text-center'>Lorem ipsum dolor sit Lorem ipsum<br/> dolor sit amet </p>
</div>

<div className='col-md-3 service'>
  <p className='text-center mt-3'><span className='bi bi-airplane-engines-fill fs-2  text-primary '></span></p>
  <h3 className='mt-3 text-center'><b>Advanture-Tours</b></h3>
  <p className='mt-3  text-center'>Lorem ipsum dolor sit Lorem ipsum<br/> dolor sit amet </p>
</div>

<div className='col-md-3 service'>
  <p className='text-center mt-3'><span className='bi bi-chat-heart-fill fs-2  text-primary '></span></p>
  <h3 className='mt-3 text-center'><b>Trip-Planing</b></h3>
  <p className='mt-3 text-center'>Lorem ipsum dolor sit Lorem ipsum<br/> dolor sit amet </p>
</div>
</div>
</div>


{/* Our Features */}
<div className='container mt-5'>
  <div className='row'>
    <div className="col-md-6">
<img src={about2} alt="about2"  className='img-fluid'/>
    </div>
    <div className="col-md-6 mt-5">
      <p className='text-primary'>Our Features</p>
    
      <h3><b>Why Choose Tours! </b></h3>
      <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className='feature1 mt-4'>
      <p className='mt-4'><span className='bi bi-stars fs-1 text-primary '></span></p>
      <div className='info ms-3 mt-3 '>
      <h4><b>Professional and Certified</b></h4>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
      </div>
    </div>

    <div className='feature1 mt-4'>
      <p className='mt-4'><span className='bi bi-airplane-engines-fill fs-1 text-primary'></span></p>
      <div className='info ms-3 mt-3 '>
      <h4><b>Get Instant Tour Bookings</b></h4>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
      </div>
    </div>
    </div>
  </div>
</div>
{/* Our Blog */}
<div className='container-fluid blog mt-5 p-4 '>
  <div className='row'>
    <p className='text-center text-primary fs-3 mt-5  ' >Our Blog</p>
    <h3 className='text-center'><b>Learn more from our latest Blog <br/>Posts</b></h3>

    
    <div className="col-md-3 border border-2 border-white ms-5 our-blog">
      <img src={blog1} alt="blog1" className='img-fluid' />
      <h4 className='mt-4 text-center'>Travel the most beautiful place in the world</h4>
      <p className='mt-3 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, recusandae.</p>
      <button type='button' className='btn btn-lg bg-primary text-white p-2 ms-4'>Read More</button>
    </div>

    <div className="col-md-3 border border-2 border-white ms-5 our-blog">
      <img src={blog2} alt="blog2" className='img-fluid' />
      <h4 className='mt-4 text-center'>A place where start new life with place</h4>
      <p className='mt-3 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, recusandae.</p>
      <button type='button' className='btn btn-lg bg-primary text-white p-2 ms-4'>Read More</button>
    </div>
  

    <div className="col-md-3 border border-2 border-white ms-5 our-blog">
      <img src={blog3} alt="blog3" className='img-fluid' />
      <h4 className='mt-4 text-center'>Top10 destinaton & Advaenture Trips</h4>
      <p className='mt-3 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, recusandae.</p>
      <button type='button' className='btn btn-lg bg-primary text-white p-2 ms-4'>Read More</button>
    </div>
  
  </div>
</div>
    </section>
    
    </>
  )
}
