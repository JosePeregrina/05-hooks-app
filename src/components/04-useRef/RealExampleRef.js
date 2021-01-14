import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css';

export default function RealExampleRef() {
  const [show, setshow] = useState(false);
  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button
        className='btn btn-outline-primary'
        onClick={() => {
          setshow(!show);
        }}>
        Show / Hide
      </button>
    </div>
  );
}
