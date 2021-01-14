import React from 'react';
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export default function MultipleCustomHooks() {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad App</h1>
      <hr />
      {loading ? (
        <div className='alert alert-info text-center'>loading</div>
      ) : (
          <figure className='text-end'>
            <blockquote className='blockquote'>
              <p>{quote}</p>
            </blockquote>
            <figcaption className='blockquote-footer'>{author}</figcaption>
          </figure>
          
      )}
      <button className='mt-1 btn btn-primary' onClick={increment}>
            Next Quote
          </button>
    </div>
  );
}
