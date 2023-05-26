import React from 'react';

function ExternalLinks(){
  const links = [
    { name: 'EasyEat Father’s Day', url: 'https://www.instagram.com/reel/Ce8pJPQJT5Q/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'EasyEat Raya reels', url: 'https://www.instagram.com/reel/CeLbixNJkMN/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Types of Eaters', url: 'https://www.instagram.com/reel/Cf1JIvzpqHy/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Types of Waiters', url: 'https://www.instagram.com/reel/CggxlhUJCAE/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'What to eat for lunch?', url: 'https://www.instagram.com/reel/ChmOq0oJLjE/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'New Intern vibe check', url: 'https://www.instagram.com/reel/Ciru1oypq_t/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Pink Day', url: 'https://www.instagram.com/reel/CjPy0t4p64T/?igshid=ZWQyN2ExYTkwZQ==' }
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

export default ExternalLinks;
