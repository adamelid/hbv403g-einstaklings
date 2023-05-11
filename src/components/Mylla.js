import React, { useReducer } from 'react';
import Board from './Board';
import "./Mylla.css";

const reducer = (state, action) => {
    switch (action.type) {
        case 'JUMP':
            return {...state,
            xIsNext: action.payload.skref%2 === 0,
            history: state.history.slice(0, action.payload.skref + 1),
        };
        case 'MOVE':
            return {
                ...state,
                history: state.history.concat({
                    kassar: action.payload.kassar,
                }),
                xIsNext: !state.xIsNext,
            };
        default:
            return state;
            
    }
};

export default function Mylla() {
    const [state, dispatch] = useReducer(reducer, {
        xIsNext: true,
        history: [{ kassar: Array(9).fill(null) }],
    });
    const { xIsNext, history } = state;
    const jumpTo = (skref) => {
        dispatch({type:'JUMP', payload:{skref}});
    };
    const handleClick = (i) => {
        const current = history[history.length-1];
        const kassar = current.kassar.slice();
        const sigurvegari = reiknaSigur(kassar);
        if (sigurvegari || kassar[i]) {
            return;
        }
        kassar[i] = xIsNext ? 'X' : 'O';
        dispatch({ type: 'MOVE', payload: { kassar }});
    };
    const current = history[history.length-1];
    const sigurvegari = reiknaSigur(current.kassar);

    const status = sigurvegari? sigurvegari === 'Jafnt'?'Jafntefli': 'Sigurvegari er' + sigurvegari:
    'Næsti leikmaður er ' + (xIsNext?'X':'O');
    const moves = history.map((skref, move) => {
        const desc = move ? 'Fara tilbaka á #' + move: 'Hefja leik';
        return <li key={move}>
            <button onClick={()=> jumpTo(move)}>
                {desc}
            </button>
        </li>
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    onClick={(i) => handleClick(i)} 
                    kassar={current.kassar}
                ></Board>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ul>{moves}</ul>
            </div>
        </div>
    );
}
const reiknaSigur = (kassar) => {
    const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let erJafntefli = true;
    for(let i = 0; i < winnerLines.length; i++){
        const [a,b,c] = winnerLines[i];
        if(kassar[a] && kassar[a] === kassar[b] && kassar[b] === kassar[c]) {
            return kassar[a];
        }
        if(!kassar[a] || !kassar[b] || !kassar[c]) {
            erJafntefli = false;
        }
    }
    if (erJafntefli) return 'Jafnt';
    return null;
};