import express from 'express';

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log(`Request ${req.method}: ${req.url} [${JSON.stringify(req.body)}]`);
  next();
})

let courses = [
  {
    id: 1,
    description: 'Angular Core Deep Dive',
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
    category: 'INTERMEDIATE',
    lessonsCount: 10
  },
  {
    id: 2,
    description: 'RxJs In Practice Course',
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    longDescription: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
    category: 'ADVANCED',
    lessonsCount: 10
  },
  {
    id: 3,
    description: 'NgRx In Depth',
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    longDescription: 'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics',
    category: 'ADVANCED',
    lessonsCount: 10
  },
  {
    id: 4,
    description: 'Angular Testing Course',
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    longDescription: 'In-depth guide to Unit Testing and E2E Testing of Angular Applications',
    category: 'ADVANCED',
    lessonsCount: 10
  },
  {
    id: 5,
    description: 'Angular Architecture Course',
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    longDescription: 'Learn the core RxJs Observable pattern as well and many other Design Patterns for building Angular Applications',
    category: 'ADVANCED',
    lessonsCount: 10
  },
  {
    id: 6,
    description: 'Angular Material Course',
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    longDescription: 'Build Applications for the future with the latest version of Angular and Angular Material Design',
    category: 'ADVANCED',
    lessonsCount: 10
  },
  {
    id: 7,
    description: 'Angular Service Workers Course',
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    longDescription: 'Learn how to build Angular Applications that work offline',
    category: 'ADVANCED',
    lessonsCount: 10
  },
  {
    id: 8,
    description: 'PWA In Depth',
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    longDescription: 'Learn Angular Progressive Web Applications, build the future of the Web Today',
    category: 'ADVANCED',
    lessonsCount: 10
  },
  {
    id: 9,
    description: 'Angular Security Course - Web Security Fundamentals',
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    longDescription: 'Learn Web Security Fundamentals and apply them to Angular Applications',
    category: 'ADVANCED',
    lessonsCount: 10
  },
  {
    id: 10,
    description: 'Angular Advanced Course',
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    longDescription: 'The Advanced Angular Course - Build Apps Like a Pro',
    category: 'ADVANCED',
    lessonsCount: 10
  }
]
app.get('/api/courses', (req, res) => {
  res.send(courses);
})

app.put('/api/courses/:id', (req, res) => {
  console.log(req.headers)
  if (!req.headers['x-auth']) {
    return res.status(401).json({error: 'Not authenticated'});
  }
  const index = courses.findIndex(course => course.id == req.params.id);
  courses[index].description = req.body.description;
  courses[index].iconUrl = req.body.iconUrl;
  courses[index].longDescription = req.body.longDescription;
  courses[index].category = req.body.category;
  courses[index].lessonsCount = req.body.lessonsCount;
  console.log(courses.at(index));
  res.send(courses.at(index));
})

app.listen(9000, () => {
  console.log('Server is running on port 9000');
})
