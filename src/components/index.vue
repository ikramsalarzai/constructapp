<template>
  <div class="container-fluid">
    <div class="row home_row py-5">
      <div class="col-lg-12 m-auto   text-center">
        <h1>
          Stylish Design for
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[ "Home.", "Office.", "School .", "Flat.", "fun!" ]'
          ></span>
        </h1>
        <h2>Do Smart Work not Hard Work.</h2>
      </div>
    </div>
  <div class="row my-3 px-5">
      <div class="col-lg-12">
        <!--Carousel Wrapper-->
        <div
          id="multi-item-example"
          class="carousel slide carousel-multi-item"
          data-ride="carousel"
        >
          <!--Indicators-->
          <ol class="carousel-indicators">
            <li
              data-target="#multi-item-example"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>
            <li data-target="#multi-item-example" data-slide-to="2"></li>
          </ol>
          <!--/.Indicators-->

          <!--Slides-->
          <div class="carousel-inner" role="listbox">
            <!--First slide-->
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-3 col-6 clearfix">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/4.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">
                      Interrior Designing
                    </figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>

                <div class="col-md-3 col-6 clearfix">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/5.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">
                      Exterior Designing
                    </figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>

                <div class="col-md-3 col-6 clearfix d-none d-md-block">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/4.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">
                      Accessories
                    </figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>

                <div class="col-md-3 col-6 clearfix clearfix d-none d-md-block">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/56.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">Floor</figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <!--Second slide-->
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-3 col-6">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/2.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">Walls</figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>

                <!-- <div class="col-md-4 col-4 clearfix  ">
                                <figure class="border-bottom">
                                    <img class="card-img-top img-fluid w-100" src="./2.jpg" />
                                    <figcaption class="font-weight-bold mt-2">
                                        Song title
                                    </figcaption>
                                    <figcaption class="mb-4">Singer name</figcaption>
                                </figure>
                            </div> -->

                <div class="col-md-3 col-6 clearfix">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/3.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">
                      Blinds
                    </figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>

                <div class="col-md-3 col-6 clearfix d-none d-md-block">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/1.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">
                      Accessories
                    </figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>
                <div class="col-md-3 col-6 clearfix d-none d-md-block">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/2.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">
                      Accessories
                    </figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-3 col-6">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/2.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">Walls</figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>

                <!-- <div class="col-md-4 col-4 clearfix  ">
                                <figure class="border-bottom">
                                    <img class="card-img-top img-fluid w-100" src="./2.jpg" />
                                    <figcaption class="font-weight-bold mt-2">
                                        Song title
                                    </figcaption>
                                    <figcaption class="mb-4">Singer name</figcaption>
                                </figure>
                            </div> -->

                <div class="col-md-3 col-6 clearfix">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/3.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">
                      Blinds
                    </figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>

                <div class="col-md-3 col-6 clearfix d-none d-md-block">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/1.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">
                      Accessories
                    </figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>
                <div class="col-md-3 col-6 clearfix d-none d-md-block">
                  <figure class="border-bottom">
                    <img
                      class="card-img-top img-fluid w-100"
                      src="@/assets/images/2.jpg"
                    />
                    <figcaption class="font-weight-bold mt-2">
                      Accessories
                    </figcaption>
                    <figcaption class="my-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas eum cupiditate adipisci dolorum maiores magnam,
                      voluptate atque. Harum distinctio,
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <!-- 3rd -->
          </div>
          <!--/.Slides-->
        </div>
        <!--/.Carousel Wrapper-->
      </div>

  </div>
    <div class="row bg-light1">
      <div class="col-lg-6 m-auto p-2">
        <h2 class="secondheading">
          We Follow the trends of the world interior design and bring them to
          reality.
        </h2>
        <br />
        <p class="font-weight-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          tempora, ipsam ad nobis consectetur voluptatum adipisci quo quos
          repudiandae.
        </p>
      </div>
      <div class="col-lg-6 p-2">
        <img src="../assets/images/1.jpg" class="w-100 mt-5" alt="" srcset="" />
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-lg-12 mt-5">
        <div class="card-deck">
          <div class="card bg-warning">
            <img class="card-img-top" src="holder.js/100x180/" alt="" />
            <div class="card-body">
              <h4 class="card-title">Outdoor Furnishing</h4>
              <p class="card-text">
                1 Statement-Worthy Outdoor Furnishing Collections Launched at
                the Milan Furniture Fair 2021
              </p>
            </div>
            <div class="card-footer">
              <div class="btn btn-outline-light">Read more</div>
            </div>
          </div>
          <div class="card bg-success">
            <img class="card-img-top" src="holder.js/100x180/" alt="" />
            <div class="card-body">
              <h4 class="card-title">Educational Design</h4>
              <p class="card-text">
                2 International Schools Show Educational Design is Smarter Than
                Ever
              </p>
            </div>
            <div class="card-footer">
              <div class="btn btn-outline-light">Read more</div>
            </div>
          </div>
          <div class="card bg-danger">
            <img class="card-img-top" src="holder.js/100x180/" alt="" />
            <div class="card-body">
              <h4 class="card-title">Young Designer</h4>
              <p class="card-text">
                3 Young Designer Highlights from the Lost Graduation Show in
                Milan
              </p>
            </div>
            <div class="card-footer">
              <div class="btn btn-outline-light">Read more</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 signup text-white bg-primary text-center my-3 py-5">
        <h3 class="pb-3">Experience industry leading rendering technology.</h3>
        <p>What are you waiting for?</p>
        <div class="w-100 mt-5">
          <div class="btn btn-light px-5">Sign up</div>
          <div class="btn btn-outline-light ml-3">Learn about us</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    var TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName("txt-rotate");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
    };
  },
};
</script>

 
<style >
* {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}
.carousel .carousel-indicators li {
  background-color: red;
}

.carousel .carousel-indicators li.active {
  background-color: blue;
}

.carousel-indicators li {
  width: 50px;
  height: 5px;
  border-radius: 2px;
}

.carousel-indicators {
  bottom: -25px;
}

.Models {
  margin-top: 70px;
}

.modelpic {
  /* you need to match the shadow color to your background or image border for the desired effect*/
  box-shadow: 0 0 8px 8px rgb(255, 246, 246) inset;
}
h1 {
  font-size: 3.5em;
}
.card-text {
  color: white;
  margin: 0.4em 0;
}
.home_row {
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../assets/images/bg.png'); */

  background: url("../assets/images/bg-home.jpg") no-repeat center top;
  background-size: cover;
  background-attachment: fixed !important;
  height: 85vh;
  color:rgb(255, 255, 255);
}

.secondheading {
  font-family: Mukta;
  line-height: 30px;
  letter-spacing: 0px;
  font-weight: 700;
  margin: 0 auto;
  color: rgb(24, 24, 24);
  width: 100%;
 
}

.bg-light1 {
  background: url("../assets/images/8.jpg") no-repeat center top;
  background-size: cover;
  background-attachment: scroll;
   height: 70vh;
}
</style>


 