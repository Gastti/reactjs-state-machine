import React, { useState } from 'react'
import Button from './Button';

export default function Spectators({ send, state }) {
    const [value, setValue] = useState('');

    const next = () => {
        send('CONTINUE')
    }

    const back = () => {
        send('BACK')
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const addSpectator = (e) => {
        e.preventDefault();
        send('ADD', { newSpectator: value })
        setValue('');
    }

    const { spectators } = state.context;

    return (
        <div>
            <h3 className='step-title'>Agrega espectadores</h3>
            <form onSubmit={addSpectator}>
                <input value={value} name="spectator" onChange={onChangeInput} />
                <Button type='submit'>Agregar</Button>
            </form>
            <ul className='spectators-list'>
                {spectators?.map(spectator => (<li key={spectator}>{spectator}</li>))}
            </ul>
            <div className='step-buttons'>
                <Button type="secondary" onClick={back}>Volver</Button>
                <Button onClick={next}>Siguiente</Button>
            </div>
        </div>
    )
}

