


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



  get HouseTemplate() {
    // build our template to draw our houses here.

    return `
    
        <section class="container-fluid">
      <div class="row card" id="houses">
        <div class="col-4">
          image here
          <img src="" alt="">
        </div>
        <div class="col-7">
          <div class="row">
            <h2>House Name</h2>
          </div>

          <div class="row">
            <div class="col-6">
              Year
            </div>
            <div class="col-6">
              Price
            </div>
          </div>

          <div class="row">
            <div class="col-3">
              bedrooms
            </div>
            <div class="col-3">
              bathrooms
            </div>
            <div class="col-3">
              levels
            </div>
          </div>

          <div class="row">
            <p>description</p>
          </div>
        </div>
        
      </div>
    </section>


    
    
    `
  }



}





