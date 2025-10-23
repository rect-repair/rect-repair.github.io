'use client';

import React from 'react';

const contactMethods = [
  {
    id: 1,
    name: 'Email',
    description: '',
    icon: '/images/icons/email.png',
    action: 'mailto:rectanglerepair@gmail.com',
    color: 'text-arngren-blue'
  },
  {
    id: 2,
    name: 'Instagram',
    description: '',
    icon: '/images/icons/instagram.png',
    action: 'https://www.instagram.com/rect_repair/',
    color: 'text-arngren-blue'

  },
  
  {
    id: 3,
    name: 'GitHub',
    description: '',
    icon: '/images/icons/github.png',
    action: 'https://github.com/rect-repair',
    color: 'text-arngren-blue'
  },
  {
    id: 4,
    name: 'Wechat',
    description: '',
    icon: '/images/icons/wechat.png',
      action: 'https://mp.weixin.qq.com/s/rb_z1VrImr9Y8xuC-Lcqlg',
    color: 'text-arngren-blue'
  },
  {
    id: 5,
    name: 'Red Note',
    description: '',
    icon: '/images/icons/rednote.png',
      action: 'https://www.xiaohongshu.com/user/profile/5f32378b0000000001007d1f',
    color: 'text-arngren-blue'
  },

];

export default function ContactWindow() {
  const handleContactClick = (action: string) => {
    window.open(action, '_blank');
  };

  return (
    <div className="h-full bg-white text-black">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img src="/images/icons/contact.png" alt="Contact" className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-bold text-arngren-blue">Get in Touch</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white border-1 border-black p-3 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              onClick={() => handleContactClick(method.action)}
            >
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <img src={method.icon} alt={method.name} className="w-12 h-12" />
                </div>
                <h3 className={`font-bold text-sm ${method.color} mb-1`}>
                  {method.name}
                </h3>
                <p className="text-xs text-black">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
