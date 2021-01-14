import React, { useMemo, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import '../effects.css';

export default function MemoHook() {
  const { counter, increment } = useCounter(3500);
  const [show, setshow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log('Ahi vamos...');
    }
    return `${iteraciones} iteraciones realizadas`;
  };

  const memoProcesoOesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>MemoHook</h1>
      <h4>
        Counter: <small>{counter}</small>
      </h4>
      <hr />

      <p>{memoProcesoOesado}</p>

      <button onClick={increment} className='btn btn-primary'>
        +1
      </button>
      <button onClick={() => setshow(!show)} className='btn btn-info ms-3'>
        Show / Hide {JSON.stringify(show)}
      </button>
    </>
  );
}
