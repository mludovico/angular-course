import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../model/course";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  imports: [
    NgClass,
    NgStyle
  ],
  standalone: true
})
export class CourseCardComponent {
  @Input({
    required: true
  })
  course!: Course;

  onCourseViewClick(description: string) {
    console.log('Course card component clicked');
    this.courseSelected.emit({...this.course, description});
  }

  @Output()
  courseSelected = new EventEmitter<Course>();

  courseClasses() {
    return {
      'beginner': this.course.category === 'BEGINNER',
      'intermediate': this.course.category === 'INTERMEDIATE', // 'intermediate' is not a valid class name, it should be 'INTERMEDIATE
      'advanced': this.course.category === 'ADVANCED',
    }
  }

  oddEven() {
    return this.course.id % 2 === 0 ? 'is-even' : 'is-odd';
  }
}
