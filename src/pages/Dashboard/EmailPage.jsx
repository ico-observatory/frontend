import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import ChatCard from '../../components/ChatCard';
import TableOne from '../../components/TableOne'
import ChartOne from '../../components/ChartOne';
import ChartTwo from '../../components/ChartTwo';
import ChartThree from '../../components/ChartThree';
import Breadcrumb from '../../components/Breadcrumb';

const EmailPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Email Analysis' />
      <div className='flex justify-center items-center h-full'>
        <p className='text-center text-4xl text-gray-500'>To be implemented</p>
      </div>
    </DefaultLayout>
  )
}

export default EmailPage;
