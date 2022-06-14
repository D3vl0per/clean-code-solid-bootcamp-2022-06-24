import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render Budapest OTP', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const okResponse = new Response(JSON.stringify([
      {
        "place_id": 17802899,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 1985472286,
        "boundingbox": [
          "47.4269015",
          "47.4270015",
          "19.0702578",
          "19.0703578"
        ],
        "lat": "47.4269515",
        "lon": "19.0703078",
        "display_name": "OTP Bank, Karácsony Sándor utca, Csepel-Belváros, 21st district, Budapest, XXI. kerület, Central Hungary, 1211, Hungary",
        "class": "amenity",
        "type": "bank",
        "importance": 0.201,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/money_bank2.p.20.png",
        "address": {
          "amenity": "OTP Bank",
          "road": "Karácsony Sándor utca",
          "suburb": "Csepel-Belváros",
          "city_district": "21st district",
          "city": "Budapest",
          "district": "XXI. kerület",
          "region": "Central Hungary",
          "postcode": "1211",
          "country": "Hungary",
          "country_code": "hu"
        }
      }
    ]), {
      status: 200,
      statusText: 'OK',
    });
    spyOn(window, 'fetch').and.returnValue(Promise.resolve(okResponse));
    const app = fixture.componentInstance;
    await app.search('budapest', 'otp');
    expect(window.fetch).toHaveBeenCalled();
    expect(app.widgetModel).toEqual({
      bankIconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Otp_bank_Logo.svg/345px-Otp_bank_Logo.svg.png',
      countryIconURL: 'https://cdn.countryflags.com/thumbs/hungary/flag-400.png',
      display_name: 'OTP Bank, Karácsony Sándor utca, Csepel-Belváros, 21st district, Budapest, XXI. kerület, Central Hungary, 1211, Hungary'
    });
    expect(app.terminalModel).toEqual({
      bank: 'OTP Bank',
      country: 'Hungary',
      city: 'Budapest',
      road: 'Karácsony Sándor utca'
    });
  });

  it('should render Szeged OTP', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const okResponse = new Response(JSON.stringify([
      {
        "place_id": 67432311,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 6151694962,
        "boundingbox": [
          "46.2548157",
          "46.2549157",
          "20.1373178",
          "20.1374178"
        ],
        "lat": "46.2548657",
        "lon": "20.1373678",
        "display_name": "OTP Bank, Bakay Nándor utca, Móraváros, Szeged, Szegedi járás, Csongrád-Csanád County, Southern Great Plain, Great Plain and North, 6724, Hungary",
        "class": "amenity",
        "type": "bank",
        "importance": 0.201,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/money_bank2.p.20.png",
        "address": {
          "amenity": "OTP Bank",
          "road": "Bakay Nándor utca",
          "suburb": "Móraváros",
          "city": "Szeged",
          "municipality": "Szegedi járás",
          "county": "Csongrád-Csanád County",
          "region": "Southern Great Plain",
          "postcode": "6724",
          "country": "Hungary",
          "country_code": "hu"
        }
      },
    ]), {
      status: 200,
      statusText: 'OK',
    });
    spyOn(window, 'fetch').and.returnValue(Promise.resolve(okResponse));
    const app = fixture.componentInstance;
    await app.search('szeged', 'otp');
    expect(window.fetch).toHaveBeenCalled();
    expect(app.widgetModel).toEqual({
      bankIconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Otp_bank_Logo.svg/345px-Otp_bank_Logo.svg.png',
      countryIconURL: 'https://cdn.countryflags.com/thumbs/hungary/flag-400.png',
      display_name: 'OTP Bank, Bakay Nándor utca, Móraváros, Szeged, Szegedi járás, Csongrád-Csanád County, Southern Great Plain, Great Plain and North, 6724, Hungary'
    });
    expect(app.terminalModel).toEqual({
      bank: 'OTP Bank',
      country: 'Hungary',
      city: 'Szeged',
      road: 'Bakay Nándor utca'
    });
  })

  it('should render Bratislava OTP', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const okResponse = new Response(JSON.stringify([
      {
        "place_id": 9663363,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 987539341,
        "boundingbox": [
          "48.1456393",
          "48.1457393",
          "17.107093",
          "17.107193"
        ],
        "lat": "48.1456893",
        "lon": "17.107143",
        "display_name": "OTP banka, Michalská, Vnútorné mesto, Historické jadro, Slavín, Bratislava, Old Town, District of Bratislava I, Region of Bratislava, Bratislava, Slovakia",
        "class": "amenity",
        "type": "bank",
        "importance": 0.201,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/money_bank2.p.20.png",
        "address": {
          "amenity": "OTP banka",
          "road": "Michalská",
          "neighbourhood": "Vnútorné mesto",
          "suburb": "Slavín",
          "city": "Bratislava",
          "county": "District of Bratislava I",
          "state": "Region of Bratislava",
          "country": "Slovakia",
          "country_code": "sk"
        }
      },
    ]), {
      status: 200,
      statusText: 'OK',
    });
    spyOn(window, 'fetch').and.returnValue(Promise.resolve(okResponse));
    const app = fixture.componentInstance;
    await app.search('bratislava', 'otp');
    expect(window.fetch).toHaveBeenCalled();
    expect(app.widgetModel).toEqual({
      bankIconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Otp_bank_Logo.svg/345px-Otp_bank_Logo.svg.png',
      countryIconURL: 'https://cdn.countryflags.com/thumbs/slovakia/flag-400.png',
      display_name: 'OTP banka, Michalská, Vnútorné mesto, Historické jadro, Slavín, Bratislava, Old Town, District of Bratislava I, Region of Bratislava, Bratislava, Slovakia'
    });
    expect(app.terminalModel).toEqual({
      bank: 'OTP banka',
      country: 'Slovakia',
      city: 'Bratislava',
      road: 'Michalská'
    });
  })

  it('should render Budapest CIB', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const okResponse = new Response(JSON.stringify([
      {
        "place_id": 765449,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 272566074,
        "boundingbox": [
          "47.4942829",
          "47.4943829",
          "19.0550167",
          "19.0551167"
        ],
        "lat": "47.4943329",
        "lon": "19.0550667",
        "display_name": "CIB Bank, Pilvax köz, Pest, Belváros, 5th district, Budapest, V. kerület, Central Hungary, 1052, Hungary",
        "class": "amenity",
        "type": "bank",
        "importance": 0.201,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/money_bank2.p.20.png",
        "address": {
          "amenity": "CIB Bank",
          "road": "Pilvax köz",
          "suburb": "Pest",
          "city_district": "5th district",
          "city": "Budapest",
          "district": "V. kerület",
          "region": "Central Hungary",
          "postcode": "1052",
          "country": "Hungary",
          "country_code": "hu"
        }
      }
    ]), {
      status: 200,
      statusText: 'OK',
    });
    spyOn(window, 'fetch').and.returnValue(Promise.resolve(okResponse));
    const app = fixture.componentInstance;
    await app.search('budapest', 'cib');
    expect(window.fetch).toHaveBeenCalled();
    expect(app.widgetModel).toEqual({
      bankIconURL: 'https://www.szamlazz.hu/wp-content/uploads/2021/05/cib_300x200.png',
      countryIconURL: 'https://cdn.countryflags.com/thumbs/hungary/flag-400.png',
      display_name: 'CIB Bank, Pilvax köz, Pest, Belváros, 5th district, Budapest, V. kerület, Central Hungary, 1052, Hungary'
    });
    expect(app.terminalModel).toEqual({
      bank: 'CIB Bank',
      country: 'Hungary',
      city: 'Budapest',
      road: 'Pilvax köz'
    });
  });

  it('should render Szeged CIB', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const okResponse = new Response(JSON.stringify([
      {
        "place_id": 46803350,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 3898859842,
        "boundingbox": [
          "46.252891",
          "46.252991",
          "20.1497076",
          "20.1498076"
        ],
        "lat": "46.252941",
        "lon": "20.1497576",
        "display_name": "CIB Bank, 2, Széchenyi tér, Belváros, Szeged, Szegedi járás, Csongrád-Csanád County, Southern Great Plain, Great Plain and North, 6720, Hungary",
        "class": "amenity",
        "type": "bank",
        "importance": 0.201,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/money_bank2.p.20.png",
        "address": {
          "amenity": "CIB Bank",
          "house_number": "2",
          "road": "Széchenyi tér",
          "suburb": "Belváros",
          "city": "Szeged",
          "municipality": "Szegedi járás",
          "county": "Csongrád-Csanád County",
          "region": "Southern Great Plain",
          "postcode": "6720",
          "country": "Hungary",
          "country_code": "hu"
        }
      }
    ]), {
      status: 200,
      statusText: 'OK',
    });
    spyOn(window, 'fetch').and.returnValue(Promise.resolve(okResponse));
    const app = fixture.componentInstance;
    await app.search('szeged', 'cib');
    expect(window.fetch).toHaveBeenCalled();
    expect(app.widgetModel).toEqual({
      bankIconURL: 'https://www.szamlazz.hu/wp-content/uploads/2021/05/cib_300x200.png',
      countryIconURL: 'https://cdn.countryflags.com/thumbs/hungary/flag-400.png',
      display_name: 'CIB Bank, 2, Széchenyi tér, Belváros, Szeged, Szegedi járás, Csongrád-Csanád County, Southern Great Plain, Great Plain and North, 6720, Hungary'
    });
    expect(app.terminalModel).toEqual({
      bank: 'CIB Bank',
      country: 'Hungary',
      city: 'Szeged',
      road: 'Széchenyi tér'
    });
  });

  it('should render Bratislava CIB', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const okResponse = new Response(JSON.stringify([
      {
        "place_id": 3442326,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 432361271,
        "boundingbox": [
          "48.1530097",
          "48.1531097",
          "17.121728",
          "17.121828"
        ],
        "lat": "48.1530597",
        "lon": "17.121778",
        "display_name": "Všeobecná úverová banka, Krížna, Blumentál, Oblasť Obchodná, Pokrok, Bratislava, District of Bratislava I, Region of Bratislava, Bratislava, Slovakia",
        "class": "amenity",
        "type": "bank",
        "importance": 0.101,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/money_bank2.p.20.png",
        "address": {
          "amenity": "Všeobecná úverová banka",
          "road": "Krížna",
          "neighbourhood": "Blumentál",
          "suburb": "Pokrok",
          "city": "Bratislava",
          "county": "District of Bratislava I",
          "state": "Region of Bratislava",
          "country": "Slovakia",
          "country_code": "sk"
        }
      }
    ]), {
      status: 200,
      statusText: 'OK',
    });
    spyOn(window, 'fetch').and.returnValue(Promise.resolve(okResponse));
    const app = fixture.componentInstance;
    await app.search('bratislava', 'cib');
    expect(window.fetch).toHaveBeenCalled();
    expect(app.widgetModel).toEqual({
      bankIconURL: 'https://giffy.cz/img/loga/vub_banka.png',
      countryIconURL: 'https://cdn.countryflags.com/thumbs/slovakia/flag-400.png',
      display_name: 'Všeobecná úverová banka, Krížna, Blumentál, Oblasť Obchodná, Pokrok, Bratislava, District of Bratislava I, Region of Bratislava, Bratislava, Slovakia'
    });
    expect(app.terminalModel).toEqual({
      bank: 'Všeobecná úverová banka',
      country: 'Slovakia',
      city: 'Bratislava',
      road: 'Krížna'
    });
  });

});
