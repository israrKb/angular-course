import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseInterface} from '../model/course'

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
  @Input({required:true}) 
  course:CourseInterface;
  @Output()
  courseSelected = new EventEmitter<CourseInterface>();

  @Input()
  index:number;

  constructor () {
  }

  ngOnInit(): void {
  }

  useCardClicked(){
    this.courseSelected.emit(this.course);
  }
  
  useSetClass(){
    return {'beginner':this.course.category=="BEGINNER",'course-card':true}
  }

  useSetStyle(){
    return {'background-image':'url('+this.course.iconUrl+')'};
  }
}
