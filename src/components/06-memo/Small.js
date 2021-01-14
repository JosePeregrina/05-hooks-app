import React, { memo } from 'react'

function Small ({value}) {
    console.log('Me volví a llamar');
    return (
        <small>{value}</small>
    )
}

export default memo(Small)