import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-book-list-simple-example',
  templateUrl: './book-list-simple-example.component.html',
  styleUrls: ['./book-list-simple-example.component.scss']
})
export class BookListSimpleExampleComponent implements OnInit {

 
  @Input() totalContinuous: number;
  @Input() totalAlgorithms: number;
  @Input() totalProgrammer: number;
  constructor() { }

  ngOnInit(): void {
    this.totalContinuous = 0;
    this.totalAlgorithms = 0;
    this.totalProgrammer = 0;
  }

}
