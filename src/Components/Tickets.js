import React from 'react';
import Button from './Button';

export default function Tickets({ send }) {
    const next = () => {
        send('FINISH')
    }

    const back = () => {
        send('BACK')
    }

    return (
        <div>
            <h3 className='step-title'>Selecciona el concierto</h3>
            <p className='step-children'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='step-buttons'>
                <Button type="secondary" onClick={back}>Volver</Button>
                <Button onClick={next}>Comprar</Button>
            </div>
        </div>
    )
}
