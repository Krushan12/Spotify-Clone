import React from 'react';
import { assets, songsData } from '../assets/assets';

const SongInfo = ({ song }) => (
  <div className='hidden lg:flex items-center gap-4'>
    <img className='w-12' src={song.image} alt="" />
    <div>
      <p>{song.name}</p>
      <p>{song.desc.slice(0, 12)}</p>
    </div>
  </div>
);

const Controls = () => (
  <div className='flex flex-col items-center gap-1 m-auto'>
    <div className='flex gap-4'>
      <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
      <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
      <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
      <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
      <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
    </div>
    <div className='flex items-center gap-5'>
      <p>1:06</p>
      <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
        <hr className='h-1 border-none w-0 bg-green-800 rounded-full' />
      </div>
      <p>3:20</p>
    </div>
  </div>
);

const AdditionalControls = () => (
  <div className='hidden lg:flex items-center gap-2 opacity-75'>
    <img className='w-4' src={assets.play_icon} alt="" />
    <img className='w-4' src={assets.mic_icon} alt="" />
    <img className='w-4' src={assets.queue_icon} alt="" />
    <img className='w-4' src={assets.speaker_icon} alt="" />
    <img className='w-4' src={assets.volume_icon} alt="" />
    <div className='w-20 bg-slate-50 h-1 rounded'></div>
    <img className='w-4' src={assets.mini_player_icon} alt="" />
    <img className='w-4' src={assets.zoom_icon} alt="" />
  </div>
);

const Player = () => (
  <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
    <SongInfo song={songsData[0]} />
    <Controls />
    <AdditionalControls />
  </div>
);

export default Player;
