import { Component } from '@angular/core';
import { TaskServiceService } from '../Services/task-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public tasks: string[];

  constructor(private taskService: TaskServiceService) {
    this.tasks = taskService.getCompletedTasks();
  }    

  public removeTask(pos: number){
    this.tasks.splice(pos,1);
  }

  public uncompleteTask(task: string, pos: number){
    this.taskService.addTask(task)
    this.tasks.splice(pos, 1)
  }

}
