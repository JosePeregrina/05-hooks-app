import React, { useContext } from 'react'
import { UserContext } from './Usercontext'

export default function AboutScreen() {
    const { user, setUser } = useContext( UserContext )

    const handleClick = () => {
        setUser({})
    }
    return (
        <div>
            <h1>About Screen</h1>
            <hr />
            <pre>
                {
                    JSON.stringify(user, null, 3)
                }
            </pre>
            <button className='btn btn-danger' onClick={handleClick}>Logout</button>
        </div>
    )
}