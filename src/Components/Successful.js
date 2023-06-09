import React from 'react';
import Button from './Button';

export default function Successful({ send }) {
    const back = () => {
        send('RESTART');
    }
    return (
        <div>
            <h3 className='step-title'>Compra exitosa!</h3>
            <p className='step-children'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='step-buttons'>
                <Button onClick={back}>Regresar al inicio</Button>
            </div>
        </div>
    )
}
