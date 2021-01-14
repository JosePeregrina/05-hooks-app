import { shallow } from 'enzyme'
import TodoAdd from '../../../components/08-useReducer/TodoAdd'
import { demoTodos } from '../../fixures/demoTodos'

describe('The components <TodoAdd />', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />)
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should not call the function handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit')
        const e = {preventDefault: () => {} }
        formSubmit(e)

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })

    test('should call the function handleAddTodo with one arg', () => {
        const value = 'Aprender React'
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} })

        expect(handleAddTodo).toHaveBeenCalled()
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
        expect(handleAddTodo).toHaveBeenCalledWith({ 
            id: expect.any(Number),
            desc: value,
            done: false
        });
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
    
    
})
