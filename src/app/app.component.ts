import {Component} from '@angular/core';
import {ViewModel} from "./model/ViewModel";
import {Bank} from "./controller/Bank";
import BankService from "./services/BankService";

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
    let data = await BankService.fetchData(bank, city);
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


}
