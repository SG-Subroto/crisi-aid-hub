import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

const DetailsActiveEvent = () => {
    const { id } = useParams();
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
                    <div className='mt-4'>
                        <form>
                            <input className='px-4 py-2 border border-indigo-600' type="number" name="amount" placeholder='Enter amount' />
                            <button className='px-4 py-2 bg-indigo-600 text-white border border-indigo-600'>Payment</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsActiveEvent;