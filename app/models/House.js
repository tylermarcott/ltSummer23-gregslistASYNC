


export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }




  // TODO: now we need to create our draw houses template that we are calling in our controller, of course it will draw undefined for each house BECAUSE WE HAVE AN EMPTY TEMPTY



  // NOTE: the API has numerous broken image links, disregard
  get HouseTemplate() {
    // build our template to draw our houses here.

    return `
    
        <section class="container-fluid">
      <div class="row card" id="houses">
        <div class="col-4">
          <img class="creator-img" src=${this.imgUrl} alt="house.img">
        </div>
        <div class="col-7">
          <div class="row">
            <div class="col-6">
              Year: ${this.year}
            </div>
            <div class="col-6">
              Price: ${this.price}
            </div>
          </div>

          <div class="row">
            <div class="col-3">
              Bedrooms: ${this.bedrooms}
            </div>
            <div class="col-3">
              Bathrooms: ${this.bathrooms}
            </div>
            <div class="col-3">
              Levels: ${this.levels}
            </div>
          </div>

          <div class="row">
            Description: <p>${this.description}</p>
          </div>
        </div>
        
      </div>
    </section>
    `
  }


  // TODO: HAVE TO FIGURE OUT HOW TO DRAW this form to the page. Then, I have to create functions to pull the data from the form

  static CreateHouseForm() {
    return ` <form class="row p-2" onsubmit="app.HousesController.createHouse()">

                <div class="form-floating mb-3 col-4">
                  <input required type="number" minLength="1920" class="form-control" id="houseYear" name="year"
                    placeholder="Year">
                  <label for="houseYear">Year</label>
                </div>

                <div class="form-floating mb-3 col-4">
                  <input required type="number" class="form-control" max="10000000" id="housePrice" name="price" placeholder="House Price">
                  <label for="housePrice">House Price</label>
                </div>

                <div class="form-floating mb-3 col-4">
                  <input required type="number" class="form-control" minLength = "1" maxLength = "2" id="houseBedrooms" name="bedrooms"
                    placeholder="House Bathrooms">
                  <label for="houseBathrooms">House Bathrooms</label>
                </div>

                <div class="form-floating mb-3 col-6">
                  <input required type="number" class="form-control" minLength = "1" maxLength = "2" id="houseBathrooms" name="bathrooms"
                    placeholder="House Bathrooms">
                  <label for="houseBathrooms">House Bathrooms</label>
                </div>

                <div class="form-floating mb-3 col-6">
                  <input required type="number" class="form-control" minLength = "1" maxLength = "2" id="houseLevels" name="levels"
                    placeholder="House Levels">
                  <label for="houseLevels">House Levels</label>
                </div>

                <div class="form-floating mb-3 col-12">
                  <input required type="text" class="form-control" id="houseimgUrl" name="imgUrl"
                    placeholder="House imgUrl">
                  <label for="houseimgUrl">House Image Url</label>
                </div>

                <div class="form-floating">
                  <textarea required maxLength="144" class="form-control" placeholder="Please describe your house"
                    name="description" id="houseDescription" style="height: 100px"></textarea>
                  <label for="houseDescription">House Description</label>
                </div>

               
                <div class="text-end">
                  <button type="submit" class="btn btn-info">Create Listing</button>

                </div>
              </form>`
  }



}





