import React from 'react';
import BookImg from '../../assets/hero_img.jpg';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-around gap-6 my-10 w-full bg-amber-50 p-10 rounded-2xl'>
            <div className=''>
                <h2 className='text-3xl mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ea!</h2>
                <button className='btn btn-primary'>Explore Books</button>
            </div>
            <img src={BookImg} alt="Books" className='rounded-2xl'/>
        </div>
    );
};

export default Banner;