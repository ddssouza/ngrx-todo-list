import { TodoItem } from '../models/todo.model';
import { refreshTodosDone } from './todo.actions';
import { TodosReducer } from './todo.reducers';
import { initialTodoState } from './todo.state';

describe('TodosReducer', () => {
  describe('Action: refreshTodosDone', () => {
    it('should update the state', () => {
      const todoStub: TodoItem[] = [
        {
          id: 123,
          date: '01/01/2021',
          description: 'some description',
          isComplete: false,
        },
      ];
      const action = refreshTodosDone({ todos: todoStub });

      const state = TodosReducer(initialTodoState, action);
      const expected = {
        ...initialTodoState,
        todos: todoStub,
      };

      expect(state).toEqual(expected);
    });
  });
});
