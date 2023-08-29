import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"


// @ts-ignore
//NOTE: calling axios. will give an error, just use ignore error message lol
const _sandboxApi = axios.create({
  baseURL: "https://sandbox.codeworksacademy.com",
  timeout: 8000
})

class HousesService {
  async getHouses() {
    const response = await _sandboxApi.get('api/houses')

    // this passes the data objects from the API through our house constructor, creating a new class instance for each set of data (house)
    const mappedHouses = response.data.map(dataObj => new House(dataObj))

    console.log("here's our new class instances for our houses!", mappedHouses)

    AppState.houses = mappedHouses
  }

}

export const housesService = new HousesService()
