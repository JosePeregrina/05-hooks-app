import React, { useCallback, useState } from 'react'
import {ShowIncrement} from './ShowIncrement';
import '../effects.css'

export default function CallbackHook() {
    const [counter, setCounter] = useState(10);

    const increment = useCallback( (num) => {
        setCounter( c => c + num )
    }, [ setCounter ])

    return (
        <div>
            <h1>UseCallback Hook: {counter} </h1>
            <hr/>
            <ShowIncrement increment={ increment } />
        </div>
    )
}
