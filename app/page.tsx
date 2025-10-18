'use client';

import React, { useState } from 'react';
import { WindowProvider, useWindow } from '@/contexts/WindowContext';
import Window from '@/components/Window';
import DesktopIcon from '@/components/DesktopIcon';
import EventsWindow from '@/components/windows/EventsWindow';
import ArchiveWindow from '@/components/windows/ArchiveWindow';
import GamesWindow from '@/components/windows/GamesWindow';
import ShopWindow from '@/components/windows/ShopWindow';
import ContactWindow from '@/components/windows/ContactWindow';
import KyotoWindow from '@/components/windows/KyotoWindow';
import AboutWindow from '@/components/windows/AboutWindow';

interface DesktopIcon {
  id: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
  openPath: string;
  x?: number;
  y?: number;
}

const ICON_SPACING = 120;

const desktopIcons: DesktopIcon[] = [
  {
    id: 'events',
    label: 'Events',
    iconSrc: '/images/icons/events.png',
    iconAlt: 'Events',
    openPath: 'events',
    x: 0,
    y: 0,
  },
  {
    id: 'archive',
    label: 'Meetup Archive',
    iconSrc: '/images/icons/archive.png',
    iconAlt: 'Archive',
    openPath: 'archive',
    x: ICON_SPACING,
    y: 0,
  },
  {
    id: 'games',
    label: 'Cool things from friends',
    iconSrc: '/images/icons/games.png',
    iconAlt: 'Games',
    openPath: 'games',
    x: ICON_SPACING * 2,
    y: 0,
  },
  {
    id: 'shop',
    label: 'Shop',
    iconSrc: '/images/icons/shop.png',
    iconAlt: 'Shop',
    openPath: 'shop',
    x: ICON_SPACING * 3,
    y: 0,
  },
  {
    id: 'contact',
    label: 'Contact',
    iconSrc: '/images/icons/contact.png',
    iconAlt: 'Contact',
    openPath: 'contact',
    x: ICON_SPACING * 4,
    y: 0,
  },
  {
    id: 'kyoto',
    label: 'Kyoto',
    iconSrc: '/images/icons/kyoto.png',
    iconAlt: 'Kyoto',
    openPath: 'kyoto',
    x: ICON_SPACING * 5,
    y: 0,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    iconSrc: '/images/icons/instagram.png',
    iconAlt: 'Instagram',
    openPath: 'https://www.instagram.com/rect_repair/',
    x: ICON_SPACING * 6,
    y: 0,
  },
  {
    id: 'about',
    label: 'About',
    iconSrc: '/images/icons/logo4.png',
    iconAlt: 'About',
    openPath: 'about',
    x: ICON_SPACING * 7,
    y: 0,
  },
];

function DesktopContent() {
  const { windows, openWindow } = useWindow();

  const handleOpenWindow = (windowType: string) => {
    const existingWindow = windows.find((w) => w.id === windowType);
    if (existingWindow) {
      return; // Window already open
    }

    const windowConfigs = {
      events: {
        id: 'events',
        title: 'Events Calendar',
        x: 100,
        y: 100,
        width: 800,
        height: 600,
        isVisible: true,
      },
      archive: {
        id: 'archive',
        title: 'Archive',
        x: 200,
        y: 150,
        width: 800,
        height: 600,
        isVisible: true,
      },
      games: {
        id: 'games',
        title: 'Cool things from friends',
        x: 150,
        y: 250,
        width: 600,
        height: 500,
        isVisible: true,
      },
      shop: {
        id: 'shop',
        title: 'Consumerism',
        x: 400,
        y: 100,
        width: 500,
        height: 400,
        isVisible: true,
      },
      contact: {
        id: 'contact',
        title: 'Contact',
        x: 200,
        y: 150,
        width: 500,
        height: 400,
        isVisible: true,
      },
      kyoto: {
        id: 'kyoto',
        title: '《京都存在维修计划》/Reality Restoration Project: Kyoto',
        x: 300,
        y: 200,
        width: 800,
        height: 600,
        isVisible: true,
      },
      about: {
        id: 'about',
        title: 'About',
        x: 250,
        y: 150,
        width: 600,
        height: 500,
        isVisible: true,
      },
    };

    openWindow(windowConfigs[windowType as keyof typeof windowConfigs]);
  };

  return (
    <div className='h-screen w-screen relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-white'></div>

      {/* Desktop Icons */}
      <div className='absolute inset-0 p-4'>
        <div className='flex flex-wrap gap-2 justify-start items-start h-full overflow-auto p-2'>
          {desktopIcons.map((icon) => (
            <DesktopIcon
              key={icon.id}
              id={icon.id}
              label={icon.label}
              icon={
                <img
                  src={icon.iconSrc}
                  alt={icon.iconAlt}
                  className='w-24 h-24'
                />
              }
              onClick={() => {
                if (icon.openPath.startsWith('http')) {
                  window.open(icon.openPath, '_blank');
                } else {
                  handleOpenWindow(icon.openPath);
                }
              }}
              x={icon.x}
              y={icon.y}
            />
          ))}
        </div>
      </div>

      {/* Windows */}
      {windows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          initialX={window.x}
          initialY={window.y}
          initialWidth={window.width}
          initialHeight={window.height}
        >
          {window.id === 'events' && <EventsWindow />}
          {window.id === 'archive' && <ArchiveWindow />}
          {window.id === 'games' && <GamesWindow />}
          {window.id === 'shop' && <ShopWindow />}
          {window.id === 'contact' && <ContactWindow />}
          {window.id === 'kyoto' && <KyotoWindow />}
          {window.id === 'about' && <AboutWindow />}
        </Window>
      ))}

      {/* Floating Footer */}
      <div className='fixed bottom-2 left-2 text-xs text-gray-600 z-10 pointer-events-none'>
        ©2025 [[rect*]]repair
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <WindowProvider>
      <DesktopContent />
    </WindowProvider>
  );
}
