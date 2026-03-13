'use client';

import React, { useState, useRef, useEffect } from 'react';
import { DesktopIconProps } from '@/types/window';
import CustomDraggable from './CustomDraggable';

export default function DesktopIcon({
  id,
  label,
  icon,
  onClick,
  x = 0,
  y = 0,
}: DesktopIconProps) {
  const [position, setPosition] = useState({ x, y });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);

  useEffect(() => {
    console.log('desktop icon re-rendered');
  }, []);

  const handleDrag = (e: MouseEvent, data: { x: number; y: number }) => {
    setPosition({ x: data.x, y: data.y });
    // Check if we've moved more than 5 pixels
    const distance = Math.sqrt(
      Math.pow(data.x - dragStartRef.current.x, 2) +
        Math.pow(data.y - dragStartRef.current.y, 2)
    );
    if (distance > 5) {
      hasMovedRef.current = true;
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
    hasMovedRef.current = false;
    dragStartRef.current = { x: position.x, y: position.y };
  };

  const handleDragStop = () => {
    setIsDragging(false);
    // Reset after a short delay to allow click event to check the flag
    setTimeout(() => {
      hasMovedRef.current = false;
    }, 100);
  };

  const handleClick = (e: React.MouseEvent) => {
    // Only trigger onClick if we haven't moved during drag
    if (!hasMovedRef.current) {
      onClick();
    }
  };

  const iconComponent = (
    <div className={`desktop-icon ${id === 'alternative-reality' ? 'desktop-icon-arg-glow' : ''}`} onClick={handleClick}>
      <div className='retro-icon w-24 h-24 flex-col'>{icon}</div>
      <div className='desktop-icon-label'>{label}</div>
    </div>
  );

  return (
    <>
      {/*  mobile normal flexbox layout*/}
      <div className='md:hidden'>{iconComponent}</div>
      {/* desktop , use CustomDraggable positioning*/}
      <CustomDraggable
        position={position}
        onDrag={handleDrag}
        onStart={handleDragStart}
        onStop={handleDragStop}
        handle='.desktop-icon'
        bounds='parent'
        className='hidden md:block'
      >
        {iconComponent}
      </CustomDraggable>
    </>
  );
}
