import {
  AfterViewInit,
  Component,
  QueryList,
  untracked,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Course} from "./courses/model/course";
import {Observable} from "rxjs";
import {CourseService} from "./courses/services/course.service";
import {CourseCardComponent} from "./courses/course-card/course-card.component";
import {COURSES} from "./db-data";
import {RouterOutlet} from "@angular/router";
import {FilterByCategoryPipe} from "./courses/pipes/filter-by-category.pipe";
import {SignalButtonComponent} from "./signal-button/signal-button.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    CourseCardComponent,
    FilterByCategoryPipe,
    SignalButtonComponent
  ],
  standalone: true
})

export class AppComponent implements AfterViewInit {
  title = 'angular deep dive course!';
  data = 'Angular';
  // @ts-ignore
  coreCourses$: Observable<Course[]>;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    console.log(this.courseService)
    this.coreCourses$ = this.courseService.loadCourses();
  }

  inputClicked(newValue: string) {
    this.title = newValue;
  }


  onCourseClicked(course: Course) {
    this.courseService.saveCourse(course).subscribe(
      () => {
        console.log('Course saved');
      }
    );
  }

  @ViewChild('card1')
  card1!: CourseCardComponent;
  @ViewChild('card2')
  card2!: CourseCardComponent;

  @ViewChildren(CourseCardComponent)
  cards!: QueryList<CourseCardComponent>;

  ngAfterViewInit() {
    console.log(this.cards)
    this.cards.changes.subscribe(cards => {
      console.log(cards)
    })
  }

  onAddCourse() {
    console.log('Adding new course')
    COURSES[0].category = 'ADVANCED';
    // this.coreCourses.push({
    //   id: 5,
    //   title: 'New Course',
    //   description: 'This is a new course',
    //   iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    //   category: 'BEGINNER',
    //   lessonsCount: 10
    // })
  }

  protected readonly untracked = untracked;
  protected readonly COURSES = COURSES;
}
