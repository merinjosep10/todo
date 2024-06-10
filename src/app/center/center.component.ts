import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ITodo } from './todo';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-center',
  standalone: true,
  imports:[FormsModule,ReactiveFormsModule,NgFor],
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})

export class CenterComponent {
  todos :ITodo[]=[];
  newtodo : string;

  onSubmit()
  {
    const todo = {
      name: this.newtodo,
      checked: false,
      id: new Date()
  }
  this.todos.push(todo)
  this.newtodo='';
  console.table(this.todos)
  }
}
