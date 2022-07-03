import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const EventCard = () => {
    const navigate = useNavigate();
    const handleEventDetails = (id) => {
        navigate(`/event/${id}`)
    }
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://www.daily-sun.com/assets/news_images/2022/05/23/DS-7--23-05-2022-11.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Sunamganj Flood Relief</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button onClick={() => handleEventDetails(1)} className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Details</button>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">৳ 1000000</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">৳ 50000</span>
                </div>
            </div>
        </div>
    );
};

export default EventCard;