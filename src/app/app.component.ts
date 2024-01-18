import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {CourseInterface} from './model/course'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  courseList : CourseInterface[] = COURSES;

  useGetItem(val){
    console.log("parent",val);
  }
}
