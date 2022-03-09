import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { TaskServiceService } from '../Services/task-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public tasks: string[];
  public task: string;  

  constructor(private taskService: TaskServiceService) {
    this.tasks = taskService.getTasks();
    this.task="";    
  }

  public addTask(){
    this.tasks.push(this.task);
    this.task=""
  }

  public removeTask(pos: number) {
    this.tasks.splice(pos, 1);
  }

  public taskComplete(comp_task: string, pos: number) {        
    this.taskService.addCompletedTask(pos);   
  }

  public importantTask(pos: number){    
    this.taskService.addImportantTask(pos);        
  }

}
