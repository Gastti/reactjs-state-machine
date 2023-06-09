import React from 'react';
import './Nav.css';
import Button from './Button';

export default function Nav({ state, send }) {
    const goBack = () => {
        send('CANCEL')
    }

    return (
        <div className='nav'>
            <h2>Ticket<span>market</span></h2>
            {!state.matches('initial') && <Button onClick={goBack}>Cancelar</Button>}
        </div>
    )
}
