import React from 'react';

export default function Kassi(props) {
    return (
    <button className="btn" onClick={props.onClick}>{props.value}</button>
    );
}