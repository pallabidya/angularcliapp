import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
/**
 * @title Dynamic grid-list
 */
/*@Component({
  selector: 'grid-list-dynamic-example',
  templateUrl: 'my-form.component.html',
  //styleUrls: ['grid-list-dynamic-example.css'],
})*/

