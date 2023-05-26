import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player';


const Testimonials = () => {
  const videos = [
    {
        url: 'https://youtu.be/LjsbxAM1qso',
        title: '7Beradik',
        },
        {
        url: 'https://youtu.be/Ro-4hBS5--o',
        title: 'Yu Mee Cafe',
        },
        {
        url: 'https://youtu.be/ND5scgZasm0',
        title: 'Bruh Kitchen',
        },
        {
        url: 'https://youtu.be/VT7qpVvUSek',
        title: 'Dhuha Cafe',
        },
        {
        url: 'https://youtu.be/we7fG6JDuTU',
        title: 'Dapur Beriani',
        },
        {
        url: 'https://youtu.be/selTwyvrZko',
        title: 'Kafe Sarawak Johor',
        },
        {
        url: 'https://youtu.be/F1cfY_5VmZw',
        title: 'Bulldozer Bistro',
        },
        {
        url: 'https://youtu.be/LUf9utRefBo',
        title: 'Cham’s Dessert House',
        },
        {
        url: 'https://youtu.be/zU3lEgS_4O8',
        title: 'Foodle',
        },
        {
        url: 'https://youtu.be/0Ag0iYMP5mg',
        title: 'Brew9',
        },
        {
        url: 'https://youtu.be/dGsIjr_pnXA',
        title: 'Barnyard Restaurant and Bar',
        },
        {
        url: 'https://youtu.be/M_XRm3OMuh0',
        title: 'Alwi’s Foods',
        },
        {
        url: 'https://youtu.be/aN0h5hZ4-mQ',
        title: 'Barfellows',
        },
        {
        url: 'https://youtu.be/XfelCSIjzuQ',
        title: 'Thai Boy',
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

export default Testimonials;
