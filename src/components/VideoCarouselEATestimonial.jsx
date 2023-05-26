import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player';


const VideoCarousel = () => {
  const videos = [
    {
      url: 'https://youtu.be/Ro-4hBS5--o',
      title: 'Video 1',
    },
    {
      url: 'https://youtu.be/Ro-4hBS5--o',
      title: 'Video 2',
    },
    {
      url: 'https://youtu.be/ND5scgZasm0',
      title: 'Video 3',
    },
  ];


  return (
    <Carousel>
      {videos.map((video, index) => (
        <div key={index}>
          <ReactPlayer url={video.url} controls width="100%" height="100%" />
          <p className="mt-2 text-lg font-medium">{video.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default VideoCarousel;
