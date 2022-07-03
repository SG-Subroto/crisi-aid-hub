import React, { useState } from 'react';
import EventCard from '../EventCard/EventCard';

const ActiveEvent = () => {
    const [events, setEvents] = useState([1, 2, 3, 4])
    return (
        <div className='container mt-8'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    events.map((event, index) => <EventCard key={index} />)
                }
            </div>
        </div>
    );
};

export default ActiveEvent;