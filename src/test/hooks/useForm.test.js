import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('useForm', () => {
  const initialForm = { name: 'jose', email: 'example@example.com' };
  test('debe de regresar un formulario por defecto como primer', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formState, handleFormChange, reset] = result.current;

    expect(formState).toEqual(initialForm);
    expect(typeof handleFormChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('debe de cambiar el valor del formulario (el name)', () => {
    const e = {
      target: {
        name: 'name',
        value: 'Fernando',
      },
    };
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleFormChange] = result.current;
    act(() => {
      handleFormChange(e);
    });

    const [formState] = result.current;
    expect(formState.name).not.toEqual(initialForm.name);
    expect(formState.name).toBe(e.target.value);
  });

  test('debe de re-establecer el formulario con reset', () => {
    const e = {
        target: {
          name: 'name',
          value: 'Fernando',
        },
      };
      const { result } = renderHook(() => useForm(initialForm));
      const [, handleFormChange, reset] = result.current;
      act(() => {
        handleFormChange(e);
        reset()
      });

    const [formState] = result.current;
    expect(formState).toEqual(initialForm);
  });
});
