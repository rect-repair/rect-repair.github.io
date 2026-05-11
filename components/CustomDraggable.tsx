'use client';

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
interface CustomDraggableProps {
  children: React.ReactNode;
  position: { x: number; y: number };
  onDrag: (e: any, data: { x: number; y: number }) => void;
  onStart?: () => void;
  onStop?: () => void;
  handle?: string;
  bounds?: string;
  className?: string;
}

export default function CustomDraggable({
  children,
  position,
  onDrag,
  onStart,
  onStop,
  handle = '.draggable-handle',
  bounds = 'parent',
  className = '',
}: CustomDraggableProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState(position);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('custom draggable re-rendered');
  }, []);

  useEffect(() => {
    console.log('position', position);
    if (!isDragging) {
      setCurrentPosition(position);
    }
  }, [position.x, position.y, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const handleElement = target.closest(handle);

    if (!handleElement) return;

    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - currentPosition.x,
      y: e.clientY - currentPosition.y,
    });

    if (onStart) onStart();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    // Apply bounds
    let boundedX = newX;
    let boundedY = newY;

    if (bounds === 'parent' && elementRef.current?.parentElement) {
      const parent = elementRef.current.parentElement;
      const parentRect = parent.getBoundingClientRect();
      const elementRect = elementRef.current.getBoundingClientRect();

      boundedX = Math.max(
        0,
        Math.min(newX, parentRect.width - elementRect.width)
      );
      boundedY = Math.max(
        0,
        Math.min(newY, parentRect.height - elementRect.height)
      );
    }

    const newPosition = { x: boundedX, y: boundedY };
    setCurrentPosition(newPosition);
    onDrag(e, newPosition);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);
    if (onStop) onStop();
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <div
      ref={elementRef}
      className={clsx('absolute', className)}
      style={{
        left: currentPosition.x,
        top: currentPosition.y,
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
}
