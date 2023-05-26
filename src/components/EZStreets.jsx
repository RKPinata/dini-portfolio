import React from 'react';

function EZStreets(){
  const links = [
    { name: 'Interview 1', url: 'https://www.instagram.com/reel/CgRTGYgJNGS/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Interview 2', url: 'https://www.instagram.com/reel/Cg6d8QsJVR6/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Interview 3', url: 'https://www.instagram.com/reel/ChZZaFuJj4J/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Interview 4', url: 'https://www.instagram.com/reel/CiXIUabpBIv/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Interview 5', url: 'https://www.instagram.com/reel/Ci4leKlJQwE/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Interview 6', url: 'https://www.instagram.com/reel/Cj6_g9Vpkzu/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Interview 7', url: 'https://www.instagram.com/reel/Cke_jF8J7yR/?igshid=ZWQyN2ExYTkwZQ==' },
  ];

  return (
    <div>
      <ul className='text-white font-branch text-center text-3xl '>
        {links.map((link, index) => (
          <li key={index} className='hover:text-yellow-600'>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EZStreets;
