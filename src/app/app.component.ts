import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IData } from './models/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  studentArray: Array<IData>=[
  
  ]


  
constructor(){}

  ngOnInit(): void {
    
  }

  title = 'student1task';

  getStdObj(std:IData){
    console.log(std);
    this.studentArray.push(std)
}
 
}
