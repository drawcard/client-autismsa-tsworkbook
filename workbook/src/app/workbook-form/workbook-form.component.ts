import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-workbook-form',
  templateUrl: './workbook-form.component.html',
  styleUrls: ['./workbook-form.component.scss']
})
export class WorkbookFormComponent {
  formContent = this.fb.group({
    b1_q1: [null, Validators.required],
    b1_q2: [null, Validators.required],
    b1_q3: [null, Validators.required],
    b1_q4: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    alert('Thanks!');
  }
}
