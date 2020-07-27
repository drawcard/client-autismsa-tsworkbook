import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-workbook-form',
  templateUrl: './workbook-form.component.html',
  styleUrls: ['./workbook-form.component.scss']
})

export class WorkbookFormComponent {
  b1_q1 = new FormControl('');
  b1_q2 = new FormControl('');
  b1_q3 = new FormControl('');
  b1_q4 = new FormControl('');

  formComplete() {
    console.table(this);
  }
}
