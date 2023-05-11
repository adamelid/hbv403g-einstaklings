import React from 'react';
import Kassi from './Kassi';

export default function Board(props) {
    return (
    <div className="board">
        <div>
            <Kassi 
                value={props.kassar[0]}
                onClick={() => {
                    props.onClick(0);
                }}
            />
            <Kassi 
                value={props.kassar[1]}
                onClick={() => {
                    props.onClick(1);
                }}
            />
            <Kassi 
                value={props.kassar[2]}
                onClick={() => {
                    props.onClick(2);
                }}
            />
        </div>
        <div>
            <Kassi 
                value={props.kassar[3]}
                onClick={() => {
                    props.onClick(3);
                }}
            />
            <Kassi 
                value={props.kassar[4]}
                onClick={() => {
                    props.onClick(4);
                }}
            />
            <Kassi 
                value={props.kassar[5]}
                onClick={() => {
                    props.onClick(5);
                }}
            />
        </div>
        <div>
            <Kassi 
                value={props.kassar[6]}
                onClick={() => {
                    props.onClick(6);
                }}
            />
            <Kassi 
                value={props.kassar[7]}
                onClick={() => {
                    props.onClick(7);
                }}
            />
            <Kassi 
                value={props.kassar[8]}
                onClick={() => {
                    props.onClick(8);
                }}
            />
        </div>
    </div>
    );
}