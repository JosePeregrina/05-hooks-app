import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './Layout.css';

export default function Layout() {
  const [boxSize, setboxSize] = useState({});
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const pQoute = useRef();
  useLayoutEffect(() => {
    setboxSize(pQoute.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Breaking Bad Layout Effect</h1>
      <hr />
      <figure className='text-end'>
        <blockquote className='blockquote'>
          <p ref={pQoute}>{quote}</p>
        </blockquote>
      </figure>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className='mt-1 btn btn-primary' onClick={increment}>
        Next Quote
      </button>
    </div>
  );
}
