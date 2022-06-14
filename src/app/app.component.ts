import {Component} from '@angular/core';
import {ViewModel} from "./model/ViewModel";
import {IAPIResult} from "./model/IAPIResult";
import {Bank} from "./controller/Bank";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  terminalModel: any = {};
  widgetModel:  any = {};

  async search(city: string, bank: string) {
    if(city ==='bratislava' && bank == "cib") bank = 'vub';
    let data = await this.fetchData(bank, city);
    let apiResult = data[0];
    let bankname = apiResult.address.amenity;
    let bankObj = new Bank(apiResult.address.country_code, bankname);
    let viewModel = {
      bank: apiResult.address.amenity,
      country: apiResult.address.country,
      city: apiResult.address.city,
      road: apiResult.address.road,
      bankIconURL: bankObj.bankIconURL,
      countryIconURL: bankObj.countryIconURL,
      display_name: apiResult.display_name
    } as ViewModel;
    this.terminalModel = {
      bank: viewModel.bank,
      country: viewModel.country,
      city: viewModel.city,
      road: viewModel.road
    };
    this.widgetModel = {
      bankIconURL: viewModel.bankIconURL,
      countryIconURL: viewModel.countryIconURL,
      display_name: viewModel.display_name
    };
  }

  url = "https://nominatim.openstreetmap.org/search?format=json&type=bank&addressdetails=1";
  fetchData(bankname: string, cityname: string): Promise<Array<IAPIResult>> {
    let query = `q='${bankname},${cityname}`;
    return fetch(this.url + '&' + query)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<Array<IAPIResult>>;
      });
  }
}
