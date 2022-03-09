import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { GestureController } from '@ionic/angular';
import { Input } from 'hammerjs';
import { TaskServiceService } from '../Services/task-service.service';

@Directive({
  selector: '[appLongPress]'
})
export class LongPressDirective implements AfterViewInit {

  @Output() press = new EventEmitter;  

  private active : boolean;
  private action : any;  

  constructor(
    private el : ElementRef,
    private gestureCtrl : GestureController,
    private taskService: TaskServiceService    
  ) { }

  ngAfterViewInit(){
    this.initGesture();
  }

    initGesture(){
      let gesture = this.gestureCtrl.create({
        el : this.el.nativeElement,
        gestureName : '', 
        threshold : 0,
        onStart : (ev) =>{
          this.active = true
          this.longPressCheck()
        },
        onEnd : (ev) =>{
          this.active = false
        },
      }, true);
      gesture.enable()
    }

    longPressCheck(){

      if(this.action){
        clearTimeout(this.action)
      }

      this.action == setTimeout(() =>{
        if(this.active){
          this.press.emit(true);
        }
      }, 1000)
    }
}
