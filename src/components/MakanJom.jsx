import React from 'react';

function MakanJom(){
  const links = [
    { name: 'Yu Mee Cafe', url: 'https://www.instagram.com/reel/Ci2AhFNJr5I/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'WTF Bangsar', url: 'https://www.instagram.com/reel/ChJ4iQ-Jnqt/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Kafe Port Black', url: 'https://www.instagram.com/reel/CmOY-xpJK4q/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: "Kate's Home Bakery", url: 'https://www.instagram.com/reel/CmxylWfqnSp/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: "Papa Jenggo's Johor", url: 'https://www.instagram.com/reel/CnV3oHTqczE/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Blue Ginger', url: 'https://www.instagram.com/reel/CnofFzbqhQh/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Busy Bean Coffee', url: 'https://www.instagram.com/reel/CoMhB3EpmDR/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Mee Rebus House', url: 'https://www.instagram.com/reel/Cod7NaDpssO/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: "Darsa's Restaurant", url: 'https://www.instagram.com/reel/Cov8n0Qqc7k/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: "Bulldozer's Cafe", url: 'https://www.instagram.com/reel/Co6O7jbpvfS/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Wheelerz Cafe', url: 'https://www.instagram.com/reel/CpB-TPbpEFs/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Proper Cafe', url: 'https://www.instagram.com/reel/CpM6l2iImbp/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Pelicana Chicken', url: 'https://www.instagram.com/reel/CpmAFv0JImM/?igshid=ZWQyN2ExYTkwZQ==' },
    
  ];

  const links2 = [
    { name: 'Uncle Botak BBQ', url: 'https://www.instagram.com/reel/CrlCnnLI5qc/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Ceylon Kitchen', url: 'https://www.instagram.com/reel/Cr2NWplpPCe/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Ruang Temu TTDI', url: 'https://www.instagram.com/reel/CsaRAXEJ3_1/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Queen B', url: 'https://www.instagram.com/reel/CkPjHX_Je7I/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Nobile Coffee', url: 'https://www.instagram.com/reel/Ckz0llIp7kq/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Kafe Sarawak Johor', url: 'https://www.instagram.com/reel/Cl8YfVDp_i6/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Foodle.my', url: 'https://www.instagram.com/reel/ChcCEGzp8Qv/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Dimanche Patisserie', url: 'https://www.instagram.com/reel/Ch_92x9JN9X/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: 'Kyungjoo BBQ', url: 'https://www.instagram.com/reel/CikB0TjpM_D/?igshid=ZWQyN2ExYTkwZQ==' },
    { name: "Chico Cheezy's Cafe", url: 'https://www.instagram.com/reel/Cfvv-1TpmoB/?igshid=ZWQyN2ExYTkwZQ==' }

  ]

  return (
    <div className='flex flex-col md:flex-row justify-center gap-5'>
      <ul className='text-white font-branch text-center text-3xl '>
        {links.map((link, index) => (
          <li key={index} className='hover:text-yellow-600'>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className='text-white font-branch text-center text-3xl '>
        {links2.map((link, index) => (
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

export default MakanJom;
