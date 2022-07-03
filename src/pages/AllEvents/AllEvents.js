import React, { useState } from 'react';
import EventCard from '../../components/EventCard/EventCard';

const AllEvents = () => {
    const [allEvents, setAllEvents] = useState([1, 2, 3, 4, 5, 6, 7, 8])
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    allEvents.map((event, index) => (
                        <EventCard key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllEvents;