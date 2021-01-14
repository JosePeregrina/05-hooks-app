import { todoreducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixures/demoTodos';

describe('todoReducer', () => {
  test('debe de retornar es estado por defecto', () => {
    const state = todoreducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test('debe de agregar un todo', () => {
    const newTodo = { id: 3, desc: 'Aprender Mongo', done: false };
    const action = { type: 'ADD', payload: newTodo };
    const state = todoreducer(demoTodos, action);
    const testState = [...demoTodos, newTodo];

    expect(state).toEqual(testState);
  });

  test('debe de eliminar un todo', () => {
    const action = { type: 'DELETE', payload: 2 };
    const state = todoreducer(demoTodos, action);
    const testState = demoTodos.filter((todo) => todo.id !== action.payload);

    expect(state.length).toBe(1);
    expect(state).toEqual(testState);
  });

  test('debe de hacer el toogle un todo', () => {
      const action = {type:'TOGGLE', payload: 1};
      const state = todoreducer(demoTodos, action);

      expect(state[0].done).toBeTruthy();
      expect(state[1]).toEqual(demoTodos[1]);
  });
});
