import React, { useState } from 'react';
import Button from './Button';

export default function Search({ send, state }) {
    const [country, setCountry] = useState('Argentina');

    const next = () => {
        send('CONTINUE', { selectedCountry: country })
    }

    const back = () => {
        send('BACK')
    }

    const handleSelectChange = (e) => {
        setCountry(e.target.value)
    }

    const { countries } = state.context;
    const countriesList = countries?.map(country => country.name.common).sort();
    
    return (
        <div>
            <h3 className='step-title'>Selecciona tu país</h3>
            <p className='step-children'>
                <select onChange={handleSelectChange}>
                    {countriesList?.map(country => (<option key={country}>{country}</option>))}
                </select>
            </p>
            <div className='step-buttons'>
                <Button type="secondary" onClick={back}>Volver</Button>
                <Button onClick={next}>Siguiente</Button>
            </div>
        </div>
    )
}
