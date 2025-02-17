import React, { useState } from 'react';

const SwitcherOne = (state) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div>
      <label
        htmlFor='toggle1'
        className='flex cursor-pointer select-none items-center'
      >
        <div className='relative'>
          <input
            type='checkbox'
            id='toggle1'
            className='sr-only'
            onChange={() => {
              setEnabled(!enabled)
            }}
          />
          <div className='dark:bg-[#5A616B] block h-5 w-8 rounded-full bg-meta-9'></div>
          <div
            className={`absolute left-1 top-1 h-3 w-3 rounded-full bg-white transition ${
              enabled && '!right-1 !translate-x-full !bg-primary dark:!bg-white'
            }`}
          ></div>
        </div>
      </label>
    </div>
  )
}

export default SwitcherOne;
