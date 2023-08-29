export const CarsView = ` <div class="container-fluid">
        <!-- SECTION collapse form -->
        <section class="row ">
          <div class="col-12">

            <button onclick="app.CarsController.drawCreateForm()" class="btn btn-primary" type="button"
              data-bs-toggle="collapse" data-bs-target="#carFormCollapse" aria-expanded="false"
              aria-controls="collapseExample">
              List Car 🚘
            </button>

            <!-- SECTION collapse starts here -->
            <div class="collapse" id="carFormCollapse">
              <!-- STUB car form -->
              <!-- <form class="row p-2" onsubmit="app.CarsController.createCar()">

                <div class="form-floating mb-3 col-4">
                  <input required type="text" minLength="3" maxLength="15" class="form-control" id="carMake" name="make"
                    placeholder="Car Make">
                  <label for="carMake">Car Make</label>
                </div>

                <div class="form-floating mb-3 col-4">
                  <input required type="text" class="form-control" id="carModel" name="model" placeholder="Car Model">
                  <label for="carModel">Car Model</label>
                </div>

                <div class="form-floating mb-3 col-4">
                  <input required type="number" class="form-control" min="1950" id="carYear" name="year"
                    placeholder="Car Year">
                  <label for="carYear">Car Year</label>
                </div>

                <div class="form-floating mb-3 col-6">
                  <input required type="number" class="form-control" max="10000000" id="carPrice" name="price"
                    placeholder="Car Price">
                  <label for="carPrice">Car Price</label>
                </div>

                <div class="form-floating mb-6 col-2">
                  <select name="engineType" id="engineType">
                    <option value="unknown">unknown</option>
                    <option value="2 stroke">2 stroke</option>
                    <option value="4 cylinder">4 cylinder</option>
                    <option value="v6">v6</option>
                    <option value="v8">v8</option>
                    <option value="v10">v10</option>
                    <option value="v12">v12</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                    <option value="chuncko">CHONK</option>
                  </select>
                </div>

                <div class="form-floating mb-3 col-12">
                  <input required type="text" class="form-control" id="carimgUrl" name="imgUrl"
                    placeholder="Car imgUrl">
                  <label for="carimgUrl">Car Image Url</label>
                </div>

                <div class="form-floating">
                  <textarea required maxLength="144" class="form-control" placeholder="Please describe your car"
                    name="description" id="carDescription" style="height: 100px"></textarea>
                  <label for="carDescription">Car Description</label>
                </div>

               
                <div class="text-end">
                  <button type="submit" class="btn btn-info">Create Listing</button>

                </div>
              </form> -->
            </div>

          </div>
        </section>

        <!-- SECTION cars row -->
        <section class="row justify-content-center" id="cars">
          <!-- STUB car template -->
          <!-- <div class="col-md-10 elevation-5 rounded">
            <div class="row">
              <div class="col-md-4 p-0">
                <img class="img-fluid"
                  src="https://hips.hearstapps.com/hmg-prod/images/dsc00620-1677186777.jpg?crop=0.606xw:0.680xh;0.298xw,0.260xh&resize=640:*"
                  alt="">
              </div>
              <div class="col-md-8">
                <h1 class="text-center">1999 Honda Accord</h1>
                <div class="d-flex justify-content-around">
                  <span>Price: $00000</span>
                  <span>Engine Type: ....</span>
                </div>
                <p>Description....</p>
                <div class="d-flex align-items-center">
                  <img class="creator-img"
                    src="https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg"
                    alt="">
                  <span>Charles Francis Xavier</span>
                </div>
              </div>
            </div>
          </div> -->
        </section>
      </div>`