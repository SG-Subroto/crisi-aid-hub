import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

const DetailsActiveEnrollEvent = () => {
    const { id } = useParams();
    const [people, setPeople] = useState([1, 2, 3, 4, 5, 6])
    const [chartData] = useState({
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    return (
        <div>
            <Header />
            <div className='max-w-5xl mx-auto border-2 rounde-lg p-8 mt-2'>
                <img className='w-full' src="https://www.daily-sun.com/assets/news_images/2022/05/23/DS-7--23-05-2022-11.jpg" alt="" />
                <h1 className='mt-8 text-4xl font-bold'>Sunamganj Flood Relief</h1>
                <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, provident tenetur, cum corporis est blanditiis incidunt dolore earum vero, voluptatibus cupiditate reprehenderit quisquam. Explicabo iusto omnis reiciendis facere natus porro laborum dolorum cum modi beatae, nostrum possimus accusantium molestias impedit alias fugiat perspiciatis officia consequatur! Quae laudantium animi expedita labore quia omnis et ut sed perferendis reprehenderit voluptatibus tenetur cumque eveniet sunt blanditiis enim deserunt ducimus nostrum, ipsa suscipit incidunt! Accusantium et similique architecto maxime error expedita delectus, modi iste nulla, quam voluptate fugiat totam rerum distinctio tempora alias quasi incidunt laboriosam quidem deleniti obcaecati ratione nobis. Quibusdam, rerum pariatur?</p>
                <div className='mt-4'>
                    <div className='text-lg'><b>Execution Date: </b> <span>11/04/2022</span></div>
                    <div className='max-w-3xl mt-4'>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ "width": "20%" }}></div>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>Current ৳: 100000</p>
                            <p>Target ৳: 500000</p>
                        </div>
                        <p className='mt-4'>Initial Estimate Overhead Cost:  ৳ 10000</p>
                    </div>
                    <div className="mt-12">
                        <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
                    </div>

                    <h1 className='text-3xl mt-8 mb-4'>Relief Receiver</h1>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Photo
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Fullname
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        District
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    people.map((person, index) => (
                                        <tr class="border-b odd:bg-white even:bg-gray-50">
                                            <td class="px-6 py-4">
                                                <img className='h-14 w-14 rounded-full' src="https://www.microsoftalumni.com/s/1769/images/gid2/editor/alumni_profiles_meet_an_alum/tazin-shadid-300-px.png" alt="" />
                                            </td>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                Rahim Uddin
                                            </th>
                                            <td class="px-6 py-4">
                                                Sylhet
                                            </td>
                                            <td class="px-6 py-4">
                                                ৳ 10000
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsActiveEnrollEvent;