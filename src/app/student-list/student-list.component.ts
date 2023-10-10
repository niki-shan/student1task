import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IData } from '../models/data';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
 @Input() getStdArr: Array<IData> = []
  
  constructor() { }

  ngOnInit(): void {
  }

}