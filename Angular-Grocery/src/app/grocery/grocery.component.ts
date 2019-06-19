import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css', './grocery.component.css']
})
export class GroceryComponent implements OnInit {
  error: string  = " ";

  constructor() { }

  ngOnInit() {
  } 

  task: string;
  tasks = [];

  onClick(){
    if(this.task && this.task.length >= 1){
      this.tasks.push({name: this.task});
      this.task = '';
      this.error = ' ';
    } else {
      this.error = "enter atleast one character!"
    }
    
  }

  onChange(){
    if(this.task && this.task.length >= 1){
      this.error = ' ';
    } else {
      this.error = "enter atleast one character!"
    }
    
  }

}
