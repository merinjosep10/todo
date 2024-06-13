import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ITodo } from './todo';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatDialogModule} from '@angular/material/dialog'
@Component({
  selector: 'app-center',
  standalone: true,
  imports:[FormsModule,ReactiveFormsModule,NgFor,NgIf,CommonModule,MatDialogModule],
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})

export class CenterComponent implements OnInit{
  todos :ITodo[]=[];
  newtodo : string;
  edittodo: string;
  todoToEdit: number;

  ngOnInit(): void {
    this.loadTodos();
  }
  loadTodos(){
    const todosJson = localStorage.getItem('todos');
    if (todosJson) {
      this.todos = JSON.parse(todosJson);
    }
  }
  onSubmit()
  {
    const todo = {
      name: this.newtodo,
      checked: false,
      id: new Date().getTime()
  }
  this.todos.push(todo)
  this.newtodo='';
  console.table(this.todos)
  localStorage.setItem('todos',JSON.stringify(this.todos));
  }
  delete_todo(i:number)
  {
    this.todos = this.todos.filter(obj => obj.id !== i);
    console.table(this.todos);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
  edit_todo()
  {
    const i = this.todoToEdit;
    for (let object of this.todos) {
      if (object.id === i) {
          object.name = this.edittodo;
          console.log(object.id)
      }
  }
  this.edittodo='';
  localStorage.setItem('todos',JSON.stringify(this.todos));
  }

  editButtonClicked(i: number) {
    this.todoToEdit = i;
    this.edittodo = this.todos.find(obj => obj.id === i)?.name || '';
  }
}
