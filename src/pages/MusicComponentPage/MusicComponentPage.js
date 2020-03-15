import React from 'react';
import MusicPlayer from './MusicPlayer';

const MusicComponentPage = () => {
  return (
    <div className="flex">
      <div className="w-1/3"></div>
      <div className="w-1/3 flex flex-col justify-center">
        <MusicPlayer />
        <div className='mt-10'>
          <div className="neumorphism" style={{
            width: '100%',
            height: '20em',
            borderRadius: '2.5em',
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default MusicComponentPage;
