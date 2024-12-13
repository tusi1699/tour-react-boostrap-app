import React from 'react'

export default function Navbar() {
  return (
    <>
    <section id='navbar-section'>
    <nav class="nav navbar navbar-expand-md fixed-top shadow p-3 bg-white">
{/* <!-- logo --> */}
<a href="#" class="text-dark navbar-brand fs-2">Tours
</a>
<button type="button" class="btn btn-outline-danger navbar-toggler" data-bs-toggle="collapse" data-bs-target="#togg-click">
<span class="bi bi-grid-3x3-gap"></span>
</button>
{/* <!-- main navigations --> */}
<div class="collapse navbar-collapse links" id="togg-click">
<ul class="navbar-links">
<li><a href="#" class="text-danger">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Service</a></li>
<li class="dropdown"><a class="dropdown-toggle" data-bs-toggle="dropdown" href="#">Blocks</a>
<ul class="dropdown-menu bg-dark text-white">
<li><a href="#">News</a></li>
<li><a href="#">Testimonials</a></li>
<li><a href="#">New News</a></li>
</ul>
</li>
<li class="dropdown"><a class="dropdown-toggle" data-bs-toggle="dropdown" href="#">Blogs</a>
<ul class="dropdown-menu bg-dark text-white">
<li><a href="#">Add Blogs</a></li>
<li><a href="#">Blogs Post</a></li>
</ul>
</li>
<li><a href="#">Work</a></li>
<li><a href="#">Contact</a></li>
</ul>
</div>
</nav>
</section>
    </>
  )
}
