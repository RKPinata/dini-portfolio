import React from 'react';
import VideoCarousel from './VideoCarouselEATestimonial';
import EasyEatTesti from './EasyEatTesti';
import MakanJom from './MakanJom';
import CasualRandom from './CasualRandom';
import YTCasual from './YTCasual';
import EZStreets from './EZStreets';
import Testimonials from './Testimonials';
import College from './College';
import { HiArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (

    /* Easy Eat Lifestories */
    <>
      <div name='work' className=' bg-zinc-900 text-gray-300 py-10'>
        <div className='grid md:grid-cols-2 justify-center items-center w-full h-full px-10 py-10'>
          <div className='flex flex-col justify-center md:pr-5 pb-10'>
              <p className='text-yellow-500 text-4xl font-cormorant font-light italic mb-3'>
              EasyEat Lifestories
              </p>
              <div className='font-cormorant text-xl'>
              A series that was originally my own idea that i have pitched to my Head of Department in EasyEat. It is made to be a mini documentary in vertical format to ease mobile scrollers. I believe that the audience should know about the history and background of restaurant owners. I planned and video shoot the flow for all the lifestories, including the interview questions, the cinematic theme, the sequencing, subtitling and all.
              </div>
              <p className='text-yellow-500 text-2xl font-branch font-light pt-3'>Clik the links to view Reels</p>
          </div>
          <div className=''>
            <EasyEatTesti />
          </div>
        </div>
      </div>
      
      {/* Makan Jom */}
      <div className='bg-zinc-800 text-gray-300 py-10'>
        <div className='text-center px-10 py-10'>
          <div className='flex flex-col justify-center md:pr-5 pb-10'>
              <p className='text-yellow-500 text-4xl font-cormorant font-light italic mb-3'>
              Makan Jom? Jom! (Used to be called “What’s for the weekend”)
              </p>
              <div className='font-cormorant text-xl'>
              This a food review series of our merchants’ restaurants. The flow, creative editing, planning, video shoots and subtitling are all edited by me.
              </div>
          </div>
          <div className='pb-10'>
            <MakanJom />

          </div>
        </div>
      </div>

      {/* CasualRandom */}
      <div className=' bg-zinc-900 text-gray-300 py-10 '>
        <div className='grid md:grid-cols-2 justify-center items-center w-full h-full px-10 py-10'>
          <div className='flex flex-col justify-center md:pr-5 pb-10'>
              <p className='text-yellow-500 text-4xl font-cormorant font-light italic mb-3'>
              Casual/Random Edits
              </p>
              <div className='font-cormorant text-xl'>
              It usually goes like, “Hey Dini, how many videos you got on your hand this week? Can you make a quick edit on bla….bla….bla….” - Boss
              </div>
              <p className='text-yellow-500 text-2xl font-branch font-light pt-3'>Reels in links and Youtube Videos in Carousel</p>
          </div>
          <div className=''>
            <CasualRandom />
          </div>
        </div>
        <YTCasual className='flex justify-center' />
      </div>

      {/* EZStreets */}
      <div className=' bg-zinc-800 text-gray-300 py-10'>
        <div className='grid md:grid-cols-2 justify-center items-center w-full h-full px-10 py-10'>
          <div className='flex flex-col justify-center md:pr-5 pb-10'>
              <p className='text-yellow-500 text-4xl font-cormorant font-light italic mb-3'>
              EasyEat On the Streets
              </p>
              <div className='font-cormorant text-xl'>
              A short interview Q&A with random people on the streets. I video shoot the footages, came up with the questions, the flow, the execution and creative edits of the videos.
              </div>
              <p className='text-yellow-500 text-2xl font-branch font-light pt-3'>Clink the links to view Reels</p>
          </div>
          <div className=''>
            <EZStreets />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className='bg-zinc-900 text-gray-300 py-10'>
        <div className='text-center px-10 py-10'>
          <div className='flex flex-col justify-center md:pr-5 pb-10'>
              <p className='text-yellow-500 text-4xl font-cormorant font-light italic mb-3'>
              Testimonials
              </p>
              <div className='font-cormorant text-xl'>
              Formal styled testimonials by our merchants that are shot and edited by me.
              </div>
          </div>
        </div>
      <Testimonials />
      </div>

      <div className='bg-zinc-800 text-gray-300 py-10'>
        <div className='text-center px-10 py-10'>
          <div className='flex flex-col justify-center items-center md:pr-5 pb-10'>
              <p className='text-yellow-500 text-4xl font-cormorant font-light italic mb-3'>
              College/University works
              </p>
              <div className='font-cormorant text-xl'>
              All of these videos are either shoot, produced, or edited by me.
              </div>
              <div className='py-3'>
                <a href="https://drive.google.com/file/d/10dq-2yTOLW45HQR-BLQb0CJd6EGUsvx3/view?usp=drivesdk">
                  <button className='text-white font-cormorant font-semibold italic text-xl flex justify-center items-center hover:text-yellow-600'>
                  1. <span className='underline'>The Forgotten Art of Theatre</span>
                  </button>
                </a>
                <a href="https://drive.google.com/file/d/1WSfc6-_WJrMVQ5g1aJlWZmGssVL0_jUE/view?usp=drivesdk">
                  <button className='text-white font-cormorant font-semibold italic text-xl flex justify-center items-center hover:text-yellow-600'>
                  2. <span className='underline '>Mania: A psycho horror film (I was the main character)</span>
                  </button>
                </a>
              </div>
          </div>
          
        </div>
        
      <College />
      </div>


      

      


    </>

    

    

    
    
  );
};

export default About;
