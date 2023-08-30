import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";




function _drawHouses() {
  console.log('drawing houses')
  let content = ''
  AppState.houses.forEach(house => content += house.HouseTemplate)
  setHTML('houses', content)
}





export class HousesController {
  constructor() {
    console.log('hello from the houses controller!')
    this.getHouses()
    AppState.on('houses', _drawHouses)  //upon changed state in houses array, emit and call _drawHouses
  }


  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      Pop.error(error.message)
    }
  }


  async createHouse() {
    try {

      // TODO: we need to create a form first so we can grab data from it.

    }


    catch (error) {
      Pop.error(error.message)
    }
  }



}