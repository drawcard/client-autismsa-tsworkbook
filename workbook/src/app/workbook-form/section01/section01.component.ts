import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-section01',
  templateUrl: './section01.component.html',
  styleUrls: ['./section01.component.scss']
})
export class Section01Component implements OnInit {

  // Initialise Form Data Fields
  b1_q1 = new FormControl('');
  b1_q2 = new FormControl('');
  b1_q3 = new FormControl('');
  b1_q4 = new FormControl('');
  b1_q5 = new FormControl('');
  b1_q6 = new FormControl('');
  b1_q7 = new FormControl('');
  b1_q8 = new FormControl('');


  constructor() { }

  ngOnInit(): void {

  }

}
