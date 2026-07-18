'use client';

import React, { useEffect, useState } from 'react';
import { WindowProvider, useWindow } from '@/contexts/WindowContext';
import Window from '@/components/Window';
import DesktopIcon from '@/components/DesktopIcon';
import Menubar from '@/components/Menubar';
import EventsWindow from '@/components/windows/EventsWindow';
import ArchiveWindow from '@/components/windows/ArchiveWindow';
import GamesWindow from '@/components/windows/GamesWindow';
import ShopWindow from '@/components/windows/ShopWindow';
import ContactWindow from '@/components/windows/ContactWindow';
import KyotoWindow from '@/components/windows/KyotoWindow';
import AboutWindow from '@/components/windows/AboutWindow';
import AlternativeRealityWindow from '@/components/windows/AlternativeRealityWindow';
import CedarOSWindow from '@/components/windows/CedarOSWindow';
import TradingWindow from '@/components/windows/TradingWindow';
import HtmlDayWindow from '@/components/windows/HtmlDayWindow';
import FoundMediaWindow from '@/components/windows/FoundMediaWindow';

interface DesktopIconDef {
  id: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
  openPath: string;
  isNew?: boolean;
}

const ICON_BOX_W = 140;
const ICON_BOX_H = 150;
const COLS = 5;
const COL_PITCH = 156;
const ROW_PITCH = 168;

/** Temporarily hide friends (games) icon and window; set to true to restore. */
const FRIENDS_UI_ENABLED = false;

const desktopIcons: DesktopIconDef[] = [
  // Row 1 — projects
  {
    id: 'archive',
    label: 'tearoom meetup archive',
    iconSrc: '/images/icons/archive.png',
    iconAlt: 'Archive',
    openPath: 'archive',
  },
  {
    id: 'kyoto',
    label: 'kyoto',
    iconSrc: '/images/icons/kyoto.png',
    iconAlt: 'Kyoto',
    openPath: 'kyoto',
  },
  {
    id: 'alternative-reality',
    label: '[[alternate reality]]: week!',
    iconSrc: '/images/icons/arg.png',
    iconAlt: '[[alternate reality]]: WEEK!',
    openPath: 'alternative-reality',
  },
  {
    id: 'cedar-os',
    label: 'cedar-os',
    iconSrc: '/images/icons/cedar.png',
    iconAlt: 'CEDAR-OS',
    openPath: 'cedar-os',
  },
  {
    id: 'happy-trading-post',
    label: 'happy trading post',
    iconSrc: '/images/icons/happytrading.png',
    iconAlt: 'happy trading post',
    openPath: 'happy-trading-post',
  },
  {
    id: 'html-2026',
    label: 'html day 2026',
    iconSrc: '/images/icons/html.png',
    iconAlt: 'HTML DAY 2026 shanghai',
    openPath: 'html-2026',
    isNew: true,
  },
  {
    id: 'found-media',
    label: 'found media vj battle',
    iconSrc: '/images/icons/vj-battle.png',
    iconAlt: 'Found Media VJ Battle Royale',
    openPath: 'found-media',
    isNew: true,
  },

  // Row 2 — info & utility
  {
    id: 'games',
    label: 'friends',
    iconSrc: '/images/icons/games.png',
    iconAlt: 'Games',
    openPath: 'games',
  },
  {
    id: 'shop',
    label: 'shop',
    iconSrc: '/images/icons/shop.png',
    iconAlt: 'Shop',
    openPath: 'shop',
  },
  {
    id: 'contact',
    label: 'contact',
    iconSrc: '/images/icons/contact.png',
    iconAlt: 'Contact',
    openPath: 'contact',
  },
  {
    id: 'about',
    label: 'about',
    iconSrc: '/images/icons/logo4.png',
    iconAlt: 'About',
    openPath: 'about',
  },
];

function DesktopContent() {
  const { windows, openWindow } = useWindow();
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const update = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const ready = vw > 0 && vh > 0;
  const rows = Math.ceil(desktopIcons.length / COLS);
  const gridSpanW = (COLS - 1) * COL_PITCH;
  const gridSpanH = (rows - 1) * ROW_PITCH;
  const GRID_Y_NUDGE = -48;
  const firstColCenterX = vw / 2 - gridSpanW / 2;
  const firstRowCenterY = (vh - 28) / 2 - gridSpanH / 2 + GRID_Y_NUDGE;

  const handleOpenWindow = (windowType: string) => {
    if (windowType === 'games' && !FRIENDS_UI_ENABLED) {
      return;
    }

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
        title: 'friends',
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
      'alternative-reality': {
        id: 'alternative-reality',
        title: '[[alternate reality]]: WEEK!',
        x: 200,
        y: 150,
        width: 900,
        height: 700,
        isVisible: true,
      },
      'cedar-os': {
        id: 'cedar-os',
        title: 'CEDAR-OS',
        x: 600,
        y: 120,
        width: 900,
        height: 700,
        isVisible: true,
      },
      'happy-trading-post': {
        id: 'happy-trading-post',
        title: 'happy trading post!',
        x: 1050,
        y: 180,
        width: 500,
        height: 800,
        isVisible: true,
      },
      'html-2026': {
        id: 'html-2026',
        title: 'HTML DAY 2026 shanghai',
        x: 350,
        y: 160,
        width: 900,
        height: 700,
        isVisible: true,
      },
      'found-media': {
        id: 'found-media',
        title: 'FOUND MEDIA VJ BATTLE ROYALE',
        x: 250,
        y: 120,
        width: 1280,
        height: 860,
        isVisible: true,
      },
    };

    openWindow(windowConfigs[windowType as keyof typeof windowConfigs]);
  };

  return (
    <div className='h-screen w-screen relative overflow-hidden'>
      <Menubar />

      {/* Desktop Icons */}
      <div className='absolute left-0 right-0 bottom-0 top-[28px] p-4'>
        <div className='flex flex-wrap gap-2 justify-start items-start content-start h-full overflow-auto p-2 md:block'>
          {ready &&
            desktopIcons
              .filter((icon) => FRIENDS_UI_ENABLED || icon.id !== 'games')
              .map((icon, i) => {
                const col = i % COLS;
                const row = Math.floor(i / COLS);
                const x = Math.round(
                  firstColCenterX + col * COL_PITCH - ICON_BOX_W / 2
                );
                const y = Math.round(
                  firstRowCenterY + row * ROW_PITCH - ICON_BOX_H / 2
                );
                return (
                  <DesktopIcon
                    key={icon.id}
                    id={icon.id}
                    label={icon.label}
                    index={i + 1}
                    isNew={icon.isNew}
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
                    x={x}
                    y={y}
                  />
                );
              })}
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
          {FRIENDS_UI_ENABLED && window.id === 'games' && <GamesWindow />}
          {window.id === 'shop' && <ShopWindow />}
          {window.id === 'contact' && <ContactWindow />}
          {window.id === 'kyoto' && <KyotoWindow />}
          {window.id === 'about' && <AboutWindow />}
          {window.id === 'alternative-reality' && <AlternativeRealityWindow />}
          {window.id === 'cedar-os' && <CedarOSWindow />}
          {window.id === 'happy-trading-post' && <TradingWindow />}
          {window.id === 'html-2026' && <HtmlDayWindow />}
          {window.id === 'found-media' && <FoundMediaWindow />}
        </Window>
      ))}

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
