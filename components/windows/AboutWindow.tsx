'use client';

import React from 'react';

export default function AboutWindow() {
  return (
    <div className='h-full'>
      <div className='h-full bg-white text-black overflow-auto px-6 pt-6 pb-10 space-y-4 text-base leading-relaxed'>
        <p>
          [[rect*]]repair is an art-game collective making and facilitating experimental games, community events, and public interventions. Through self-organized and collaborative projects, we're building shared infrastructure for creating, publishing, and exhibiting playful media across independent scenes.
        </p>
        <p>
          [[rect*]]repair is based in Shanghai/Asia, and works with friends, peer collectives, and institutions around the world. Our work has appeared at A MAZE Festival, Tank Shanghai, Modern Art Museum Shanghai, Kyoto Art Center among others, with brand collaborations including FREITAG.
        </p>
        <p>
          We&apos;re open for commissions, partnerships, co-hosting, game exchanges, and other forms of working together! Get in touch (ദ്ദി˙ ᴗ ˙ )
        </p>
        <p>
          members:{' '}
          <a href="https://joannalyu.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">joanna</a>
          {', '}
          <a href="https://viola.city/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">viola</a>
          {', '}
          tianqi
          {', '}
          <a href="https://www.instagram.com/yueminanada/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">yuemin</a>.
        </p>
        <img src="/images/icons/logo4.png" alt="logo" className="w-200 h-200" />
        <p className="text-xs text-gray-600">^ the logo is a person pushing two bins</p>

        <hr className="border-gray-300 my-4" />

        <p>
          修四边形是一个常驻上海/亚洲的艺术游戏小组，致力于创作、组织实验游戏、社群活动与公共介入。我们通过自组织与合作，和全世界的好朋友、独立社群与机构一同搭建游戏性媒介的创作、发表与展示平台。
        </p>
        <p>
          修四边形的作品曾在柏林 A MAZE Festival、上海油罐艺术中心、艺仓美术馆、京都艺术中心等地展出，并与 FREITAG 等品牌展开合作。
        </p>
        <p>
          来和我们一起工作！委托、合作、联合策划、游戏交换等各种形式合作都欢迎来信 (ദ്ദി˙ ᴗ ˙ )
        </p>
        <p>
          四边形修理者：
          <a href="https://joannalyu.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">joanna</a>
          、
          <a href="https://viola.city/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">viola</a>
          、tianqi、
          <a href="https://www.instagram.com/yueminanada/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">yuemin</a>
          。
        </p>
      </div>
    </div>
  );
}
