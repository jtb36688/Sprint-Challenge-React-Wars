import React from "react";
import Char from './Char.js'

function CharList(props) {
    return (
        <div>
        <ul className='ULClass'>
        {props.swList.map((char, index) => (
            <Char
            onClick={() => props.onClick(char.name)}
            char={char}
            key={index}
            name={char.name}
            />
        ))}
        </ul>
        </div>
    );
}

export default CharList;