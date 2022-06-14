export class Bank {
  bankIconURL: string;
  countryIconURL: string;

  constructor(country_code: string, bankname: string) {
    this.bankIconURL = "https://icon-library.com/images/bank-icon-vector/bank-icon-vector-8.jpg";
    switch (country_code) {
      case 'sk':
        this.countryIconURL = "https://cdn.countryflags.com/thumbs/slovakia/flag-400.png";
        break;
      case 'hu':
        this.countryIconURL = "https://cdn.countryflags.com/thumbs/hungary/flag-400.png";
        break;
      default:
        this.countryIconURL = "https://banner2.cleanpng.com/20180410/bvw/kisspng-computer-icons-globe-world-clip-art-globe-5acd31f76797c0.3831539515233971114243.jpg";
    }
    ;
    switch (bankname) {
      case 'OTP Bank':
        this.bankIconURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Otp_bank_Logo.svg/345px-Otp_bank_Logo.svg.png";
        break;
      case 'OTP banka':
        this.bankIconURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Otp_bank_Logo.svg/345px-Otp_bank_Logo.svg.png";
        break;
      case 'CIB Bank':
        this.bankIconURL = "https://www.szamlazz.hu/wp-content/uploads/2021/05/cib_300x200.png";
        break;
      case 'Všeobecná úverová banka':
        this.bankIconURL = "https://giffy.cz/img/loga/vub_banka.png";
        break;
      default:
        throw new Error('Unknown Bank Type');
    }
  }
}
