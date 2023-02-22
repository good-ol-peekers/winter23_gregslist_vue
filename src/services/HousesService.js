import { AppState } from "../AppState.js";
import { api } from "./AxiosService";
class HousesService {

    async getHouses() {
        const res = await api.get('auth/api/houses')
        console.log('get houses', res.data)
        AppState.houses = res.data
        console.log(AppState.houses)
    }


}

export const housesService = new HousesService()