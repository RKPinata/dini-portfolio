import React from 'react';

function ExternalLinks(){
  const links = [
    { name: 'CRG Guys Klang', url: 'https://www.instagram.com/reel/CqCVqXxpN4e/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Brew 9', url: 'https://www.instagram.com/reel/Cg1XTDRJG1y/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Yu Mee Cafe', url: 'https://www.instagram.com/reel/CimqMP-JzpC/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Dimanche Patisserie', url: 'https://www.instagram.com/reel/CjMrZ7qpaaZ/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Wheelerz Cafe Johor', url: 'https://www.instagram.com/reel/Cjo7K9-JgmJ/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Dapur Beriani', url: 'https://www.instagram.com/reel/Cl6Gk_WpmEh/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Bruh Kitchen Johor', url: 'https://www.instagram.com/reel/CkM-c4Hp0cs/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Kafe Sarawak Johor', url: 'https://www.instagram.com/reel/CnG7-tRoUKF/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: "Cham's Dessert House", url: 'https://www.instagram.com/reel/CquVJKEJcUb/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Bulldozer Bistro', url: 'https://www.instagram.com/reel/Cnlo9kKqGd2/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: "Kate's home bakery", url: 'https://www.instagram.com/reel/CmdeutLq_xO/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'WTF Bangsar', url: 'https://www.instagram.com/reel/ChhGHCsJHn-/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: '7 Beradik Johor', url: 'https://www.instagram.com/reel/CkxFcc-JdW8/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Dhuha Cafe', url: 'https://www.instagram.com/reel/ClVG4Q7JxpT/?igshid=ZWQyN2ExYTkwZQ==' },
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
