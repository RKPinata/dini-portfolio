import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Photo from "../assets/Subject.png"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='md:w-full md:h-screen py-10 pt-[120px] bg-zinc-900'>
      {/* Container */}
      <div className='flex flex-col justify-center items-center md:w-full md:h-full'>
        <div className='grid md:grid-cols-2 justify-center px-10'>
          {/* Text */}
          <div className='flex flex-col justify-center md:pr-5 py-5 order-2 md:order-1'>
            <p className='text-zinc-50 text-4xl font-cormorant font-light'>
            I'm <span className='text-yellow-600' >Dini,</span>  a <span className='italic'>Kuala Lumpur</span> based <span className='italic'>Video Editor/Videographer</span>.
            I enjoy shooting videos and meeting people of different background and races. Being in the creative field, i constantly brainstorm of new ideas and whatever that might interest our target audience. I especially have an interest in editing cinematic styles.
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
          <div className='flex justify-center py-5'>
            <img src={Photo} alt="Image description" style={{ width: '400px', height: 'auto', }} className='rounded-full shadow-neomorphism' />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
