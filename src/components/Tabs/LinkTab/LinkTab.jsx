import React, { useEffect, useState } from 'react';
import './LinkTab.scss';
import ICON from '../../../assets/link.svg';

import toast from 'react-hot-toast';

const LinkTab = () => {

  return (
    <div className='tab-content'>
      <div className='i-box'>
        <img src={ICON} className='icon' alt='icon' />
        <input
          type='url'
          className='input-box'
          placeholder='https://google.com'
          // onChange={(e) => setLlink(e.target.value)}
          // value={lLink}
        />
      </div>
     
      <button className='create-btn'>
        Upload
      </button>
    </div>
  );
};

export default LinkTab;
