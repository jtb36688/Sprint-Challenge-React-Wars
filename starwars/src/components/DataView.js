import React from 'react'

function DataView(props) {
    if (props.selected.name !== 'nobody') {
    return (
        <div>
        <h1>{props.selected.name} InfoCard</h1>
        <p>Born: {props.selected.birth_year}</p>
        <p>Gender: {props.selected.gender}</p>
        <p>Height: {props.selected.height}</p>
        <p>Eye color: {props.selected.eye_color}</p>
        <p>Hair color: {props.selected.hair_color}</p>
        </div>
    )
    }
    else {
        return ''
    }
}


export default DataView;