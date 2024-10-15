import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'
import { FaCaretDown } from 'react-icons/fa';

class ChartOne extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: 'DNS',
          data: [23, 20, 22, 27, 19, 22, 37],
        },

        {
          name: 'Hosting',
          data: [30, 25, 36, 30, 29, 31, 28],
        },
        {
          name: 'Email',
          data: [30, 35, 31, 30, 34, 36, 39],
        },
      ],
      options: {
        legend: {
          show: false,
          position: 'top',
          horizontalAlign: 'left',
        },
        colors: ['#3C50E0', '#80CAEE', '#7074D1'],
        chart: {
          fontFamily: 'Satoshi, sans-serif',
          height: 335,
          type: 'area',
          dropShadow: {
            enabled: true,
            color: '#623CEA14',
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1,
          },

          toolbar: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 1024,
            options: {
              chart: {
                height: 300,
              },
            },
          },
          {
            breakpoint: 1366,
            options: {
              chart: {
                height: 350,
              },
            },
          },
        ],
        stroke: {
          width: [2, 2, 2],
          curve: 'straight',
        },
        labels: {
          show: false,
          position: 'top',
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 4,
          colors: '#fff',
          strokeColors: ['#3056D3', '#80CAEE', '#7074D1'],
          strokeWidth: 3,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          hover: {
            size: undefined,
            sizeOffset: 5,
          },
        },
        xaxis: {
          type: 'category',
          categories: [
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'Jan',
            'Feb',
            'Mar',
          ],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          title: {
            style: {
              fontSize: '0px',
            },
          },
          min: 0,
          max: 100,
        },
      },
    }
  }

  render() {
    return (
      <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-7'>
        <h4 className="font-semibold text-xl text-black dark:text-white mb-6">Concentration on Top 10 Providers</h4>
        <div className='flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap'>
          <div className='flex w-full flex-wrap gap-3 sm:gap-5'>
            <div className='flex'>
              <span className='mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary'>
                <span className='block h-2.5 w-full max-w-2.5 rounded-full bg-primary'></span>
              </span>
              <div className='w-full'>
                <p className='font-semibold text-primary'>Hosting</p>
              </div>
            </div>
            <div className='flex'>
              <span className='mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary'>
                <span className='block h-2.5 w-full max-w-2.5 rounded-full bg-secondary'></span>
              </span>
              <div className='w-full'>
                <p className='font-semibold text-secondary'>DNS</p>
              </div>
            </div>
            <div className='flex'>
              <span className='mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary'>
                <span className='block h-2.5 w-full max-w-2.5 rounded-full bg-[#7074D1]'></span>
              </span>
              <div className='w-full'>
                <p className='font-semibold text-[#7074D1]'>Email</p>
              </div>
            </div>
          </div>
          <div className='flex w-full max-w-45 justify-end'>
            <div className='inline-flex items-center rounded-md bg-white p-1.5 dark:bg-meta-4'>
              <select
                name=''
                id=''
                className='relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-1 text-sm font-medium outline-none'
              >
                <option value=''>Porto Alegre - BR</option>
              </select>
              <FaCaretDown className='text-black' />
            </div>
          </div>
        </div>

        <div>
          <div id='chartOne' className='-ml-5'>
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type='area'
              height={350}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ChartOne;
