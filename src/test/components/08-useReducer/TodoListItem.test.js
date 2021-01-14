import { shallow } from 'enzyme';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixures/demoTodos';

describe('<TodoListItem />', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  let wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  beforeEach(() => {
    wrapper = shallow(
      <TodoListItem
        todo={demoTodos[0]}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
  });

  test('debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de llamar a la función borrar con el id del todo', () => {
    wrapper.find('button').simulate('click', demoTodos[0].id);

    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  test('debe de llamar a la función toogle con el id del todo', () => {
    wrapper.find('p').simulate('click', demoTodos[0].id);

    expect(handleToggle).toHaveBeenCalled();
    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  test('debe de mostrar este texto correctamente ', () => {
      const message = wrapper.find('p').text().trim() 
      expect(message.includes(demoTodos[0].desc)).toBe(true);
  })

  test('debe de tener la clase complete si el todo esta completado', () => {
    const wrapper = shallow(
        <TodoListItem
          todo={demoTodos[1]}
          index={1}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      );

      expect(wrapper.find('p').hasClass('complete')).toBeTruthy()
  })
  
  
});
