import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  selectedMenu = '';

  selectMenu(menu) {
    if (this.selectedMenu === 'red') {
    this.selectedMenu = 'black';
    } else {
      this.selectedMenu = 'black';
    }
}

}
