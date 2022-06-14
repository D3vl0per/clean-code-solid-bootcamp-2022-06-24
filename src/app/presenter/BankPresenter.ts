import {Bank} from "../controller/Bank";
import {ViewModel} from "../model/ViewModel";

export default class BankPresenter {

  getModel(apiResult: any) {
    let bankname = apiResult.address.amenity;
    let bankObj = new Bank(apiResult.address.country_code, bankname);

    let result = {
      bank: apiResult.address.amenity,
      country: apiResult.address.country,
      city: apiResult.address.city,
      road: apiResult.address.road,
      bankIconURL: bankObj.bankIconURL,
      countryIconURL: bankObj.countryIconURL,
      display_name: apiResult.display_name
    } as ViewModel;

    return result;
  }
}
