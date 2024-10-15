import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

const TableOne = () => {
  return (
    <div
      className="w-full shadow-default rounded-sm border border-stroke dark:border-strokedark bg-white dark:bg-boxdark pt-6 pb-2.5 xl:pb-1 px-5 sm:px-7.5">
      <div className='mb-3 justify-between gap-4 sm:flex'>
        <div>
          <h5 className='text-xl font-semibold text-black dark:text-white'>
            Top Concentrated Providers
          </h5>
        </div>
        <div>
          <div className=''>
            <div className='inline-flex items-center rounded-md bg-white p-1.5 dark:bg-meta-4'>
              <select
                name=''
                id=''
                className='inline-flex appearance-none bg-transparent py-1 pl-3 text-sm font-medium outline-none'
              >
                <option value=''>All dataset</option>
              </select>
              <FaCaretDown className='text-black' />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="grid grid-cols-3 sm:grid-cols-5 bg-gray-2 dark:bg-meta-4 rounded-sm w-full">
          <div className="w-full p-2.5 xl:p-5">
            <h5 className="font-medium text-sm xsm:text-base uppercase">Name</h5>
          </div>
          <div className="w-full p-2.5 xl:p-5 text-center">
            <h5 className="font-medium text-sm xsm:text-base uppercase">AS Number</h5>
          </div>
          <div className="w-full p-2.5 xl:p-5 text-center">
            <h5 className="font-medium text-sm xsm:text-base uppercase">Service</h5>
          </div>
          <div className="hidden sm:block w-full p-2.5 xl:p-5 text-center">
            <h5 className="font-medium text-sm xsm:text-base uppercase">Location</h5>
          </div>
          <div className="hidden sm:block w-full p-2.5 xl:p-5 text-center">
            <h5 className="font-medium text-sm xsm:text-base uppercase">Language</h5>
          </div>
        </div>

        {['Godaddy.com LLC', 'Amazon.com, Inc', 'Godaddy.com LLC', 'Host Europe GmbH',].map((provider, index) => (
          <div key={index} className="grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark w-full">
            <div className="flex items-center gap-3 p-2.5 xl:p-5 w-full">
              <div className="flex-shrink-0"></div>
              <p className="text-black dark:text-white">{provider}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5 w-full">
              <p className="text-black dark:text-white">{['AS26496', 'AS16509', 'AS26496', 'AS20773'][index]}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5 w-full">
              <p className="text-meta-3">{['Hosting', 'Hosting', 'DNS', 'DNS'][index]}</p>
            </div>
            <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5 w-full">
              <p className="text-black dark:text-white">{['US', 'US', 'US', 'Germany'][index]}</p>
            </div>
            <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5 w-full">
              <p className="text-meta-5">{['English', 'English', 'English', 'German'][index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
