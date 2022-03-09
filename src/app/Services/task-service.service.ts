import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasks: string[];
  private completedTasks: string[];  
  private importantTasks: string[];

  constructor() { 
    this.tasks=[];
    this.completedTasks = [];
    this.importantTasks = [];
  }

  public addTask(task: string){
    this.tasks.push(task);
  }

  public addCompletedTask(pos: number) {
    this.completedTasks.push(this.tasks[pos]);
    this.removeTask(pos);
  }
  
  public removeTask(pos: number){
    this.tasks.splice(pos,1);
  }

  public getTasks(){
    return this.tasks;
  }

  public getCompletedTasks() {
    return this.completedTasks;
  }  

  public uncompletedTasks(pos: number){
    this.tasks.push(this.completedTasks[pos]);
    this.completedTasks.splice(pos,1); 
  }  

  public addImportantTask(pos: number){
    this.importantTasks.push(this.tasks[pos]);
    this.removeTask(pos);
  }

  public getImportantTask(){
    return this.importantTasks;
  }

  public removeImportantTask(pos:number){
    this.importantTasks.splice(pos,1);
  }

  public addCompletedImportantTask(pos: number){
    this.completedTasks.push(this.importantTasks[pos]);
    this.removeImportantTask(pos);
  }

}

