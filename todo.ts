import {Component, View, bootstrap, For} from 'angular2/angular2';

@Component({
  selector: 'todo-app'
})
@View({
  templateUrl: 'todo.html',
  directives: [For]
})
class TodoApp {

  list: any;

  constructor() {
    this.list = [
      {title: "un"},
      {title: "deux"},
      {title: "trois"},
      {title: "quatre"}
    ]
  }
  
  completeMe(todo) {
    todo.completed = !todo.completed;
  }

  toggleAll($event) {
    var isComplete = $event.target.checked;
    this.list.forEach((todo)=> {
      todo.completed = isComplete;
    });
  }

}

bootstrap(TodoApp);
