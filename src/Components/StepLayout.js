import React from 'react';
import './StepLayout.css';
import Welcome from './Welcome';
import Search from './Search';
import Tickets from './Tickets';
import Successful from './Successful';
import Spectators from './Spectators';

export default function StepLayout({ state, send }) {
    const renderContent = () => {
        if (state.matches('initial')) return <Welcome send={send} />;
        if (state.matches('search')) return <Search send={send} state={state} />;
        if (state.matches('tickets')) return <Tickets send={send} />;
        if (state.matches('successful')) return <Successful send={send} />;
        if (state.matches('spectators')) return <Spectators send={send} state={state} />;
        return null;
    }
    return (
        <div className='step-layout'>
            {renderContent()}
        </div>
    )
}
