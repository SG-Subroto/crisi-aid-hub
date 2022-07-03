import React, { useState } from 'react';
import ActiveEnrollEvent from '../../components/ActiveEnrollEvent/ActiveEnrollEvent';
import Header from '../../components/Header/Header';
import { Chart } from 'primereact/chart';

const DonorDashboard = () => {
    const [basicData] = useState({
        labels: ['Bidyanondo', 'JagoBD', 'BRAC', 'HumanAid', 'Ashar-Alo'],
        datasets: [
            {
                label: 'Donation',
                data: [16000, 5000, 8000, 5000, 15000],
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            }
        ]
    });



    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
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
            basicOptions
        }
    }

    const { basicOptions } = getLightTheme();
    return (
        <div>
            <Header />
            <div className='container mt-8'>
                <h1 className='mb-4 text-xl font-semibold'>Enroll Events</h1>
                <ActiveEnrollEvent />
            </div>

            <div className='container my-8'>
                <div className="card">
                    <h5 className='mb-4 text-xl font-semibold'>Donet Amount</h5>
                    <Chart type="line" data={basicData} options={basicOptions} />
                </div>
            </div>
        </div>
    );
};

export default DonorDashboard;