import React from 'react';
import './BaseLayout.css';
import { useMachine } from '@xstate/react';
import bookingMachine from '../Machine/bookingMachine';
import Nav from './Nav';
import StepLayout from './StepLayout';

export default function BaseLayout() {
    const [state, send] = useMachine(bookingMachine);
    console.log(state.value);
    console.log(state.context);
    return (
        <div className='base-layout'>
            <Nav state={state} send={send} />
            <StepLayout state={state} send={send} />
        </div>
    )
}
