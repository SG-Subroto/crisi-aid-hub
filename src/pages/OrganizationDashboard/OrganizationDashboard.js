import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const OrganizationDashboard = () => {
    const [basicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Releif Received According to Month',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40, 87, 100, 101, 52, 66]
            }
        ]
    });


    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };


        return {
            basicOptions,
        }
    }

    const { basicOptions, horizontalOptions, multiAxisOptions, stackedOptions } = getLightTheme();
    return (
        <div>
            <div className='grid grid-cols-3 gap-8'>
                <div className='h-40 shadow-lg flex justify-center items-center text-center'>
                    <div>
                        <h1 className='block text-2xl font-bold '>Total Event:</h1>
                        <p className='block text-xl mt-4'>12</p>
                    </div>
                </div>
                <div className='h-40 shadow-lg flex justify-center items-center text-center'>
                    <div>
                        <h1 className='block text-2xl font-bold '>Active Event:</h1>
                        <p className='block text-xl mt-4'>12</p>
                    </div>
                </div>
                <div className='h-40 shadow-lg flex justify-center items-center text-center'>
                    <div>
                        <h1 className='block text-2xl font-bold '>Total Amount:</h1>
                        <p className='block text-xl mt-4'>12000000</p>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <div className="card">
                    <h5>Relief Received</h5>
                    <Chart type="bar" data={basicData} options={basicOptions} />
                </div>
            </div>
        </div>
    );
};

export default OrganizationDashboard;