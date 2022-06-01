import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  number = 0;
  text = 'hellow world!';
  data = '';

  date = new Date;

  constructor() { }

  ngOnInit(): void {
  }

}
