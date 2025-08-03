import React from 'react';
import boy from '../../assets/images/boy.svg';

export default function Home() {
  return (<>
    <section id='home'>
      <div className='bg-green text-white flex flex-col justify-center items-center'>
      <img width='250px' className='mb-3' src={boy} alt="boy" />
        <h2 className="mt-4 uppercase font-bold text-5xl">start Framework</h2>

        <div className='mt-6 flex justify-center items-center mb-6'>
          <span className='light-line'></span>
          <i className="fa-solid fa-star mx-3"></i>
          <span className='light-line'></span>
        </div>

        <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </section>
  </>)
}
