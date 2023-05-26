import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Photo from "../assets/Subject.png"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-900'>
      {/* Container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='grid md:grid-cols-2 justify-center px-10'>
          {/* Text */}
          <div className='flex flex-col justify-center md:pr-5 py-5'>
            <p className='text-zinc-50 text-4xl font-cormorant font-light'>
            I'm <span className='text-yellow-600' >Dini Tan,</span>  a <span className='italic'>Kuala Lumpur</span> based <span className='italic'>Video Editor/Videographer</span>.
            I bla bla bla bla... insert more text
            </p>
          
            <div>
              <Link to='work' smooth={true} duration={500}>
                <button className='text-white font-cormorant font-semibold italic text-xl group py-3 my-2 flex items-center hover:text-yellow-600'>
                  View Work
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 ' />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          {/* Photo */}
          <div className='flex justify-center'>
            <img src={Photo} alt="Image description" style={{ width: '400px', height: 'auto', }} className='rounded-full shadow-neomorphism' />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
