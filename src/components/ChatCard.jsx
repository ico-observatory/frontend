import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { FaCaretDown } from 'react-icons/fa';

const ChatCard = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Hosting',
        group: 'hosting',
        data: [40, 41, 45]
      },
      {
        name: 'DNS',
        group: 'dns',
        data: [41, 40, 45]
      },
      {
        name: 'Email',
        group: 'email',
        data: [45, 46, 47]
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      dataLabels: {
        formatter: (val) => {
          return val + '%'
        }
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: [
          '2022',
          '2023',
          '2024',
        ]
      },
      fill: {
        opacity: 1
      },
      colors: ['#1172e5', '#6ea6ff', '#afddff'],
      yaxis: {
        labels: {
          formatter: (val) => {
            return val + '%'
          }
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      export: {
        csv: {
          filename: undefined,
          columnDelimiter: ',',
          headerCategory: 'category',
          headerValue: 'value',
          categoryFormatter(x) {
            return new Date(x).toDateString()
          }
        },
        svg: {
          filename: undefined,
        },
        png: {
          filename: undefined,
        }
      },
      // title: {
      //   text: 'Concentration on Top 10 Providers',
      //   align: 'center',
      //   style: {
      //     fontSize: '20px',
      //     fontWeight: 'bold',
      //     color: '#263238'
      //   }
      // }
    },
  });

  return (
    <>
      <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-7'>
        <div className='mb-3 justify-between gap-4 sm:flex'>
          <div>
            <h5 className='text-xl font-semibold text-black dark:text-white'>
              Concentration on Top 10 Providers
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
                  <option value=''>Porto Alegre - BR</option>
                </select>
                <FaCaretDown className='text-black' />
              </div>
            </div>
          </div>
        </div>
        <div id="chart">
          <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
        </div>
      </div>
    </>
  )
}

export default ChatCard
