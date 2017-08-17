import { Injectable } from '@angular/core';

@Injectable()
export class StatusService {

  constructor() { }

  // check the value of IJP
  checkValueOfIjp(IJPVal): string {
    if (IJPVal >= 0 && IJPVal <= 1) {
      return 'data__bcg-dgreen';
    } else if (IJPVal >= 2 && IJPVal <= 3) {
      return 'data__bcg-green';
    } else if (IJPVal >= 4 && IJPVal <= 5) {
      return 'data__bcg-yellow';
    } else if (IJPVal >= 6 && IJPVal <= 7) {
      return 'data__bcg-orange';
    } else if (IJPVal >= 8 && IJPVal <= 9) {
      return 'data__bcg-red';
    } else if (IJPVal >= 10) {
     return 'data__bcg-black';
    }
  }

  // check the value of PM 2.5
  checkValueOfPm25(PM25Val): string {
    if (PM25Val >= 0 && PM25Val <= 12) {
      return 'data__bcg-dgreen';
    } else if (PM25Val >= 13 && PM25Val <= 36) {
      return 'data__bcg-green';
    } else if (PM25Val >= 37 && PM25Val <= 60) {
      return 'data__bcg-yellow';
    } else if (PM25Val >= 61 && PM25Val <= 84) {
      return 'data__bcg-orange';
    } else if (PM25Val >= 85 && PM25Val <= 120) {
      return 'data__bcg-red';
    } else if (PM25Val > 121) {
      return 'data__bcg-black';
    }
  }

  // check value of PM 10
  checkValueOfPm10(PM10Val): string {
    if (PM10Val >= 0 && PM10Val <= 20) {
      return 'data__bcg-dgreen';
    } else if (PM10Val >= 21 && PM10Val <= 60) {
      return 'data__bcg-green';
    } else if (PM10Val >= 61 && PM10Val <= 100) {
      return 'data__bcg-yellow';
    } else if (PM10Val >= 101 && PM10Val <= 140) {
      return 'data__bcg-orange';
    } else if (PM10Val >= 141 && PM10Val <= 200) {
      return 'data__bcg-red';
    } else if (PM10Val > 201) {
      return 'data__bcg-black';
    }
  }
}
