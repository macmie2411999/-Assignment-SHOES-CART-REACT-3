import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="main_carousel">
          <div class="container_carousel">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner" id="carousel-shoes">

                {/* Slide Shoes here */}

              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div class="main_products">
          <div class="container_products">
            <p class="products_title"> - Product Feature - </p>
            <div class="row row-cols-1 row-cols-md-3 g-4" id="product_features">

              {/* List Elements */}

            </div>
          </div>
        </div>
      </div>

    )
  }
}
