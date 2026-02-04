'use client';

import React from 'react';

export default function AboutWindow() {
  return (
    <div className='h-full bg-white text-black p-6'>
      <div className='space-y-4 text-sm leading-relaxed'>
        <p>
                  [[rect*]]repair is an art-game collective focusing on making and facilitating experimental games, alternative game jams, community events and public interventions through self-organized events and collaborations with friends and sometimes institutions (ദ്ദി˙ ᴗ ˙ ). Usually happening in Shanghai/Asia.
        </p>
        <p>
          Members generally involves{' '}
          <a href="https://joannalyu.com/" className="text-blue-600 hover:underline"  target="_blank" rel="noopener noreferrer">joanna</a>
          {', '}
          <a href="https://viola.city/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">viola</a>
          {', '}
          tianqi
          {', '}
          <a href="https://www.instagram.com/yueminanada/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">yuemin</a>.
        </p>
        <img  src="/images/icons/logo4.png" alt="logo" className="w-200 h-200">
        </img>
        ^ the logo is a person pushing two bins
      </div>
    </div>
  );
}
