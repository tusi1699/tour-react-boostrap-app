import React from 'react'
import Navbar from './Navbar'
import { Container,Row } from 'react-bootstrap'
export default function Slider() {
  return (
    <>
    <Navbar/>
<section id='slider-section'>
  <div className='container-fluid mt-5 p-5' >
<h1 className='fs-1 mt-5'>Travel & Adventures</h1>
<p className='mt-5'>
Discover amzaing places at exclusive deals.</p>
<button type='button' className='btn btn-lg bg-primary p-3 mt-5 '>Explor More</button>


</div>
</section>
    
    </>
  )
}
