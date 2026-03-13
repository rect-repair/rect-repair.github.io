'use client';

import React, { useState } from 'react';

export default function AlternativeRealityWindow() {
  const [currentUrl] = useState('http://www.rect.repair/alternative-reality/about.html');
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleExternal = () => {
    window.open(currentUrl, '_blank');
  };

  return (
    <div className="h-full bg-white text-black flex flex-col">
      {/* Browser Toolbar */}
      <div className="bg-gray-200 p-2 flex items-center space-x-2">
        <button
          onClick={handleRefresh}
          className="retro-button w-6 h-6 flex items-center justify-center p-0"
          title="Refresh"
        >
          <img src="/images/icons/refresh.png" alt="Refresh" className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
        </button>
        
        <div className="flex-1 bg-white px-2 py-1 text-xs">
          <span className="text-black">{currentUrl}</span>
        </div>
        
        <button
          type="button"
          onClick={handleExternal}
          className="retro-button w-6 h-6 flex items-center justify-center p-0"
          title="Open in new tab"
        >
          <img src="/images/icons/external.png" alt="External" className="w-3 h-3" />
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 relative">
        <iframe
          src={currentUrl}
          className="w-full h-full border-0"
          title="[[alternative reality]]: WEEK!"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Status Bar */}
      <div className="bg-gray-200 border-t-2 border-black px-2 py-1 text-xs text-black">
        <div className="flex justify-between items-center">
          <span>Status: {isLoading ? 'Loading...' : 'Ready'}</span>
          <span>URL: {currentUrl}</span>
        </div>
      </div>
    </div>
  );
}
