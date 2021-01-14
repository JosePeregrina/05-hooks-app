import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en use Fetch', () => {
  test('debe de retornar la información pordefecto', () => {
    const { result } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    );
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('debe tener la info deseada, loading false , erro false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data.length).not.toBe(0);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('debe de manejar elerror', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://reqres.in/apidd/users?page=2')
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo cargar la info');
  });
});
