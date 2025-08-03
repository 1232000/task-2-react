import Modal from '../Modal/Modal'
import house from '../../assets/images/house.png'
import cake from '../../assets/images/cake.png'
import circus from '../../assets/images/circus.png'
import { useState } from 'react'

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

    return (
    <>
    <section>
            <div className='bg-white flex flex-col justify-center items-center'>
        <h2 className="uppercase font-bold mb-3 text-navy md:text-4xl text-3xl pt-5">portfolio component</h2>
        <div className='text-white flex justify-center items-center mb-3'>
          <span className='dark-line'></span>
          <i className="fa-solid fa-star mx-3 text-navy"></i>
          <span className='dark-line'></span>
        </div>

        <div className="container mx-auto lg:px-28 md:px-9 p-3 pb-6">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-11'>

            <div className='col-span-1'>
              <div className='relative overflow-hidden'>
                <img className='w-full rounded-xl' src={house} alt="house"/>
                <div className='layer rounded-xl flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 hover:bg-teal-500/85 cursor-pointer duration-700'
                onClick={() => {setSelectedImage(house); setIsOpen(true); }}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              <div className='relative overflow-hidden'>
                <img className='w-full rounded-xl' src={cake} alt="cake"/>
                <div className='layer rounded-xl flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 hover:bg-teal-500/85 cursor-pointer duration-700'
                onClick={() => {setSelectedImage(cake); setIsOpen(true); }}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              <div className='relative overflow-hidden'>
                <img className='w-full rounded-xl' src={circus} alt="circus"/>
                <div className='layer rounded-xl flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 hover:bg-teal-500/85 cursor-pointer duration-700'
                onClick={() => {setSelectedImage(circus); setIsOpen(true); }}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              <div className='relative overflow-hidden'>
                <img className='w-full rounded-xl' src={house} alt="house"/>
                <div className='layer rounded-xl flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 hover:bg-teal-500/85 cursor-pointer duration-700'
                onClick={() => {setSelectedImage(house); setIsOpen(true); }}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              <div className='relative overflow-hidden'>
                <img className='w-full rounded-xl' src={cake} alt="cake"/>
                <div className='layer rounded-xl flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 hover:bg-teal-500/85 cursor-pointer duration-700'
                onClick={() => {setSelectedImage(cake); setIsOpen(true); }}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          
            <div className='col-span-1'>
              <div className='relative overflow-hidden'>
                <img className='w-full rounded-xl' src={circus} alt="circus"/>
                <div className='layer rounded-xl flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 hover:bg-teal-500/85 cursor-pointer duration-700'
                onClick={() => {setSelectedImage(circus); setIsOpen(true); }}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} imageSrc={selectedImage} />

    </>)
}