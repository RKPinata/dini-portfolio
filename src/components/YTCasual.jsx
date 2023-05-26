import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player';


const YTCasual = () => {
  const videos = [
    {
      url: 'https://youtu.be/e4-1_-A2dP8',
      title: 'Maishelloud promo',
    },
    {
      url: 'https://youtu.be/2UhWzyHSwFk',
      title: 'Guess the flavour',
    },
    {
      url: 'https://youtu.be/1VgmeQwDG84',
      title: 'EasyEat Merdeka ',
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

export default YTCasual;
