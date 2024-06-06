
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../images/1.png';
import '../../Styles/Herosection.css';

const Herosection = () => {
  return (
    <div>
      <div id="carousel-1" className="carousel slide carousel-fade banner-carousel" data-bs-ride="carousel">
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100">
            <img
              className="w-100 d-block position-absolute h-100 fit-cover"
              src={image}
              alt="Slide Image"
              style={{ zIndex: -1 }}
            />
            <div className="container d-flex flex-column justify-content-center h-100">
              <div className="row">
                <div className="col-11 col-md-8 col-xl-8">
                  <div className="banner-text">
                    <h1 className='website'>Furry Friends Haven</h1>
                    <p className="my-3 fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a className="btn home-button me-2" role="button" href="#">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
