
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../images/2.png';
import image2 from '../../images/3.png';
import css from './../../Styles/furryfriends.css'
const furryfriends = () => {
  return (
    <div>
    <section>
<div class="container py-4 py-xl-5">
  <div class="col-md-8 col-xl-6 text-center mx-auto">
  <p class="ab-3">About Us </p>
    <h2 class="mb-4">Furry Friends Family</h2>
</div>
  <div class="row gy-4 gy-md-0">
      <div class="col-md-6">
          <div class="row gx-4 gy-3 mt-3 mt-mb-0 mt-xl-0 row-cols-1 row-cols-md-2 row-cols-xl-3" data-bss-baguettebox>
            <div class="p-xl-1 m-xl-3 p-md-2 m-md-2"><img class="rounded img-fluid w-100 fit-cover"  src={image1} /></div>
            <div class="p-xl-1 m-xl-3 p-md-2 m-md-2"><img class="rounded img-fluid w-100 fit-cover"  src={image2} /></div>
         </div>
         </div>
         <div class="col-md-6 d-md-flex align-items-md-center">
          <div>
              <h2 class="text-uppercase fw-bold pet-shop-heading">Welcome to Our Pet Shop</h2>
              <p class="my-2">At Our Pet Shop, we believe that pets are not just animals; they are beloved members of our families. Our passion for animals and commitment to their well-being drive everything we do.</p>
              <p class="my-3"></p>
          </div>
      </div>
  </div>
</div>
</section>
    </div>
  )
}

export default furryfriends