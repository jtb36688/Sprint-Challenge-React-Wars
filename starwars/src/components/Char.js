import React from 'react';

function Char(props) {
    return (
        <li name='Owen Lars' className='LiClass' onClick={props.onClick}>{props.name}</li>
    )
}


export default Char;