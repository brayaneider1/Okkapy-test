import React from 'react';
import { BiSearchAlt } from 'react-icons/bi'
export const InputComponent = (props) => {
  return <div className='input-component'>
    <BiSearchAlt className='icon' />
    <input  {...props} />
  </div>;
};
