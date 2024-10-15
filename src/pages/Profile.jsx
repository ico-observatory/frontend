import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';
import userOne from '../images/user/user-01.png'
import { FaCameraRetro, FaUser, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Perfil' />
      <div className='overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className='relative z-20 h-35 md:h-30'>
        </div>
        <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>
          <div className='relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3'>
            <div className='relative drop-shadow-2'>
              <img src={userOne} alt='profile' />
              <label
                htmlFor='profile'
                className='absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2'
              >
                <FaCameraRetro size={14}/>
                <input
                  type='file'
                  name='profile'
                  id='profile'
                  className='sr-only'
                />
              </label>
            </div>
          </div>
          <div className='mt-4'>
            <h3 className='mb-1.5 text-2xl font-semibold text-black dark:text-white'>
              Luciano Zembruzki
            </h3>
          </div>
          <div className='col-span-5 xl:col-span-3'>
            <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
              <div className='border-b border-stroke py-4 px-7 dark:border-strokedark'>
                <h3 className='font-medium text-black dark:text-white'>
                  Administrador
                </h3>
              </div>
              <div className='p-7'>
                <form action='#'>
                  <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>
                    <div className='w-full sm:w-1/2'>
                      <label
                        className='mb-3 block text-sm font-medium text-black dark:text-white'
                        htmlFor='fullName'
                      >
                        Nome Completo
                      </label>
                      <div className='relative'>
                        <span className='absolute left-4.5 top-4'>
                          <FaUser size={16}/>
                        </span>
                        <input
                          className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                          type='text'
                          name='fullName'
                          id='fullName'
                          placeholder='Seu nome completo'
                          defaultValue='Luciano Zembruzki'
                        />
                      </div>
                    </div>

                    <div className='w-full sm:w-1/2'>
                      <label
                        className='mb-3 block text-sm font-medium text-black dark:text-white'
                        htmlFor='phoneNumber'
                      >
                        Número de Celular
                      </label>
                      <input
                        className='w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                        type='text'
                        name='phoneNumber'
                        id='phoneNumber'
                        placeholder='+55 51 3343 7865'
                        defaultValue='+55 51 3343 7865'
                      />
                    </div>
                  </div>

                  <div className='mb-5.5'>
                    <label
                      className='mb-3 block text-sm font-medium text-black dark:text-white'
                      htmlFor='emailAddress'
                    >
                      Email
                    </label>
                    <div className='relative'>
                      <span className='absolute left-4.5 top-4'>
                        <FaEnvelope size={16}/>
                      </span>
                      <input
                        className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                        type='email'
                        name='emailAddress'
                        id='emailAddress'
                        placeholder='Seu email'
                        defaultValue='devidjond45@gmail.com'
                      />
                    </div>
                  </div>

                  <div className='flex justify-end gap-4.5'>
                    <button
                      className='flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white'
                      type='submit'
                    >
                      Cancelar
                    </button>
                    <button
                      className='flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1'
                      type='submit'
                    >
                      Salvar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Profile;
