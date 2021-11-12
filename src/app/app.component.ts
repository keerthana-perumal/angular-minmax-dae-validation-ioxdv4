import { Component } from '@angular/core';
import moment from 'moment';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = moment(new Date()).format('YYYY-MM-DD');

  maxDate = '2021-11-21';

  date = new FormControl('', [
    Validators.required,
    Validators.min(moment(new Date()).millisecond()),
  ]);
}
