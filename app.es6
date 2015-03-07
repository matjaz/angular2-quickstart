import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@Template({
  url: 'app.html'
})
class MyAppComponent {
  constructor() {
    this.name = 'Matt';
  }

  updateName(name) {
    this.name = name;
  }
}

bootstrap(MyAppComponent);
