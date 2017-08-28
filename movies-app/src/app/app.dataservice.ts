import { Injectable } from  '@angular/core' ;
import { MovieComponent } from './app.movie.component';

@Injectable()
export class MovieDataService {

    listmovies: MovieComponent[] = [];

    constructor() {}

    getAllMovies() : MovieComponent[] {
        return this.listmovies;
    }

    getMovieById(id: number) : MovieComponent {
        return this.listmovies
            .filter(movie => movie.id === id)
            .pop();
    }

  /*
  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }*/

}