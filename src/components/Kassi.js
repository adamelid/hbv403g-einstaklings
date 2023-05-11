import React from 'react';
import { useParams } from 'react-router-dom';

export default function Kassi(props) {
    const { slug } = useParams()
    return (
    <button className="btn" onClick={props.onClick}
        style={{backgroundImage: `url('../images/${slug}.jpg')`}}>
        {props.value}
    </button>
    );
}