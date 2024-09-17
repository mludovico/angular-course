import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
    console.log('CourseService instance created');
  }

  loadCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:9000/api/courses');
  }

  saveCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`http://localhost:9000/api/courses/${course.id}`, course);
  }
}

export function provideCourseService() {
  return {
    provide: CourseService,
    useClass: CourseService,
  };
}
