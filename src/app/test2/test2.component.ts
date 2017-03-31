import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {


  title:string="";

  constructor() { }

  ngOnInit() {
    this.title="hello";
  }



}
