import { Component } from '@angular/core';
import { TaskServiceService } from '../Services/task-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tasks: string[];

  constructor(private taskService: TaskServiceService) {
    this.tasks = taskService.getImportantTask();
  }

  public noImportantTask(task: string, pos: number){
    this.taskService.addTask(task);
    this.tasks.splice(pos, 1);
  }

  public removeTask(pos: number){
    this.tasks.splice(pos, 1);
  }

  public taskComplete(task: string, pos: number){
    this.taskService.addCompletedImportantTask(pos);
  }
}
