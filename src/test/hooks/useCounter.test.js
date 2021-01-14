import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';

describe('Pruebas en UseCounter', () => {
  test('debe de retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('debe de retornar el counter con un valor definido', () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test('debe de incrementar el counter en 1', () => {
      const { result } = renderHook( () => useCounter() );
      const { increment } = result.current;
      act(() => increment());
      const {counter} = result.current;
      expect(counter).toBe(11)
  })

  test('debe de decrementar el counter en 1', () => {
      const { result } = renderHook( () => useCounter() );
      const { decrement } = result.current;

      act(() => {
          decrement()
      })
      const { counter } = result.current;
      expect(counter).toBe(9);
  })

  test('debe de resetear el counter a 10', () => {
    const { result } = renderHook( () => useCounter() );
    const { decrement, reset } = result.current;

    act(() => {
        decrement()
        reset()
    })
    const { counter } = result.current;
    expect(counter).toBe(10);
})
  
});
