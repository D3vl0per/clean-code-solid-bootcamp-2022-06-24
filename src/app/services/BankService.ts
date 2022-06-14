import {IAPIResult} from "../model/IAPIResult";

export default class BankService {

  static fetchData(bankname: string, cityname: string): Promise<Array<IAPIResult>> {
    const url = "https://nominatim.openstreetmap.org/search?format=json&type=bank&addressdetails=1";
    let query = `q='${bankname},${cityname}`;

    return fetch(url + '&' + query)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<Array<IAPIResult>>;
      });
  }

}
