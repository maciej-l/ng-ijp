import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class IjpConnectionService {

  apiConfig = {
    key: '1487184056',
    location: {
      chabry: '5ccf7fc18200',
      pulaskiego: '5ccf7fc255ee',
      pileckiego: '6001940094f8',
      pasieka: '5ccf7fc17d7d',
      nowaWiesKrol: '5ccf7fc18052',
      grudzice: '60019400a82b',
      osAlSolid: 'a020a6036801'
    }
  };

  constructor(private http: Http) { }

    getDataFromChabry() {
      return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.chabry}&token=${this.apiConfig.key}`);
    }

    getDataFromPulaw() {
      return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.pulaskiego}&token=${this.apiConfig.key}`);
    }

    getDataFromGrosz() {
      return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.pileckiego}&token=${this.apiConfig.key}`);
    }

    getDataFromPas() {
      return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.pasieka}&token=${this.apiConfig.key}`);
    }

    getDataFromNwk() {
      return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.nowaWiesKrol}&token=${this.apiConfig.key}`);
    }

    getDataFromGrud() {
      return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.grudzice}&token=${this.apiConfig.key}`);
    }

    getDataFromSol() {
      return this.http.get(`http://api.looko2.com/?method=GetLOOKO&id=${this.apiConfig.location.osAlSolid}&token=${this.apiConfig.key}`);
    }
}
