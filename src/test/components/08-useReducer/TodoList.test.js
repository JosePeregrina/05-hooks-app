import { shallow, mount } from 'enzyme';
import TodoList from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixures/demoTodos';

describe('<TodoList /> component', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // The option memoized from react 17 dosen't function with enzyme.find, so I
  // use the mount module from enzyme and evaluted the li components
  test('should contains 2 <TodoListItem />', () => {
    const wrapper = mount(
        <TodoList
          todos={demoTodos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      );

    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function))
  });
});
