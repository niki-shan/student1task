import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IData } from '../models/data';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
@Output() emittstdData : EventEmitter<IData> = new EventEmitter<IData>();


@ViewChild("fname") fname !: ElementRef;
@ViewChild("lname") lname !: ElementRef;
@ViewChild("contact") contact !: ElementRef;

  
  




  constructor() { }

  ngOnInit(): void {
  }

   
  onstdAdd(){
    let stdobj : IData = {
      fname : this.fname.nativeElement.value,
      lname : this.lname.nativeElement.value,
      contact : this.contact.nativeElement.value
     
   }
  this.emittstdData.emit(stdobj)
    
}
  
  
}
