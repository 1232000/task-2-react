import { useState } from 'react';

export default function Contact() {
  const [input, setInput] = useState({
    userName : '' ,
    userAge : '' ,
    userEmail : '' ,
    userPassword : '' 
  });

    return (
    <>
    <section>
      <div className='bg-white flex flex-col items-center pt-7'>

        <h2 className="uppercase font-bold mb-3 text-navy lg:text-4xl text-3xl">conatct section</h2>

        <div className='text-white flex justify-center items-center mb-3'>
          <span className='dark-line'></span>
          <i className="fa-solid fa-star mx-3 text-navy"></i>
          <span className='dark-line'></span>
        </div>

       <form className='w-1/2 pt-9'>
         <div className="flex flex-col w-full gap-6">

          <div className="relative">
            <label htmlFor="userName" className={`absolute start-0 text-teal-500 transition-all duration-700 ${input.userName? "top-0":"bottom-0 opacity-0"}`}>userName : </label>
            <input id="userName" onChange={(e)=> setInput((prev)=>({...prev , userName:e.target.value}))} name="userName" type="text" className="mt-5 relative border-0 border-b border-gray-300 rounded-lg p-3 text-black outline-0 w-full" placeholder="userName" aria-label="Username"  />
          </div>

          <div className="relative">
            <label htmlFor="userAge" className={`absolute start-0 text-teal-500 transition-all duration-700 ${input.userAge? "top-0" : "bottom-0 opacity-0"}`}>userAge : </label>
            <input id="userAge" onChange={(e)=> setInput((prev)=>({...prev , userAge:e.target.value}))} name="user" type="text" className="mt-5 border-0 border-b border-gray-300 rounded-lg p-3 text-black outline-0 w-full" placeholder="userAge" aria-label="userAge"/>
          </div>

          <div className="relative">
            <label htmlFor="userEmail" className={`absolute start-0 text-teal-500 transition-all duration-700 ${input.userEmail? "top-0" :"bottom-0 opacity-0" }`}>userEmail : </label>
            <input id="userEmail" onChange={(e)=> setInput((prev) => ({...prev , userEmail:e.target.value}))} name="useEmail" type="email" className="mt-5 border-0 border-b border-gray-300 rounded-lg p-3 text-black outline-0 w-full" placeholder="userEmail" aria-label="userEmail"/>
          </div>

          <div className="relative">
            <label htmlFor="userPassword" className={`absolute start-0 text-teal-500 transition-all duration-700 ${input.userPassword? "top-0" : "bottom-0 opacity-0"}`}>userPassword : </label>
            <input id="userPassword" onChange={(e)=> setInput((prev)=> ({...prev , userPassword: e.target.value}))} name="userPassword" type="password" className="mt-5 border-0 border-b border-gray-300 rounded-lg p-3 text-black outline-0 w-full" placeholder="userPassword" aria-label="userPassword"/>
          </div>
        </div>
        
        <button type="button" className="rounded-sm p-2 flex bg-green text-white my-10">Send Message</button>
       </form>
      </div>
    </section>
    </>)
}