import {Pipe, PipeTransform} from "@angular/core";
import {Course} from "../model/course";

@Pipe({
  name: 'filterByCategory',
  pure: false,
  standalone: true
})
export class FilterByCategoryPipe implements PipeTransform {
    transform(courses: Course[], category: string) {
        return courses.filter(course => course.category === category);
    }
}
