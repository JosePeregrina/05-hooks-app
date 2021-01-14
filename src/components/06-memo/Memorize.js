import React, { useState } from 'react';
import Small from './Small';
import useCounter from '../../hooks/useCounter';
import '../effects.css';

export default function Memorize() {
  const { counter, increment } = useCounter(10);
  const [show, setshow] = useState(true);
  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button onClick={increment} className='btn btn-primary mr-2'>
        +1
      </button>
      <button onClick={() => setshow(!show)} className='btn btn-info ml-3'>
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
}
