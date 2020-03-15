import React from 'react';
import cn from 'classnames';
import ActionButton from '../../../components/ActionButton';

require('./MusicPlayer.scss');

const MusicPlayer = ({ className }) => {
  return (
    <div className={cn('module-music-player flex items-center px-2 justify-end', className)}>
      <ActionButton icon="cog" className="ml-2" />
      <ActionButton icon="desktop" className="ml-2" />
      <ActionButton icon="copy" className="ml-2" />
      <ActionButton icon="bell" className="ml-2" />
    </div>
  );
};

export default MusicPlayer;
