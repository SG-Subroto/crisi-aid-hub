import React, { useState } from 'react';
import EnrollEventCard from '../EnrollEventCard/EnrollEventCard';

const ActiveEnrollEvent = () => {
    const [enrollEvent, setEnrollEvent] = useState([1, 2, 3, 4])
    return (
        <div className=''>
            <div className='grid grid-cols-3 gap-4'>
                {
                    enrollEvent.map((event, index) => (
                        <EnrollEventCard key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default ActiveEnrollEvent;