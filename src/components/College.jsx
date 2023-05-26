import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player';


const College = () => {
  const videos = [
    {
        url: 'https://youtu.be/zQ9oNYltgTI',
        title: 'Cache: A short film',
        },
        {
        url: 'https://youtu.be/PPmMs_Yrqo4',
        title: 'Cat Beach Documentary',
        },
            
  ];


  return (
    <div>
      <Carousel>
        {videos.map((video, index) => (
          <div key={index}>
            <p className="mb-5 text-3xl font-branch">{video.title}</p>
            <ReactPlayer url={video.url} controls width="100%" height="50vw" />
          </div>
        ))}
      </Carousel>
      <p className='text-center font-cormorant text-lg'>scroll through the carousel to view</p>
    </div>
  );
};

export default College;
