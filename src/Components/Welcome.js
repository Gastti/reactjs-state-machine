import React from 'react'
import './StepLayout.css';
import Button from './Button';

export default function Welcome({ state, send }) {
    const start = () => {
        send('START');
    }
    return (
        <div>
            <h3 className='step-title'>Hola, Usuario!</h3>
            <p className='step-children'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='step-buttons'>
                <Button onClick={start}>Comenzar</Button>
            </div>
        </div>
    )
}
