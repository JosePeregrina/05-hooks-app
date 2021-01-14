const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
];

const todosReducer = (state = initialState, action) => {
    if (action){
        if (action.type === 'ADD'){
            return [...state, action.payload]
        }
    }
    
    return state;
};

let todos = todosReducer();

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
};

const add_todo = {
    type: 'ADD',
    payload: newTodo
}

todos = todosReducer(todos, add_todo);

console.log(todos);
