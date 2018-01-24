import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  selectedMenu = 'home';

  selectMenu(menu) {
    this.selectedMenu = menu;
}

}
