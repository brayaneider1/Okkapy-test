import React from 'react';
import { AiFillAppstore, AiFillGift } from 'react-icons/ai'
import { MdDonutLarge, MdLogout } from 'react-icons/md'
import { BsStack } from 'react-icons/bs'
export const Sidebar = () => {
  return <div className='sidebar'>
    <div className='sidebar__nav'>
      <ul>
        <li><a href='#'><AiFillAppstore /> </a> </li>
        <li><a href='#'>  <AiFillGift /> </a></li>
        <li><a href='#'><MdDonutLarge /> </a></li>
        <li><a href='#'><BsStack /></a></li>
      </ul>
    </div>
    <div className='sidebar__logout'>
      <div className='logout'>
        <MdLogout />
      </div>
    </div>
  </div>;
};
