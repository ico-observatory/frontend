import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import { FaCaretDown } from 'react-icons/fa';

class ChartThree extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [60, 12, 5, 23],
      options: {
        chart: {
          fontFamily: 'Satoshi, sans-serif',
          type: 'donut',
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          toolbar: {
            show: true,
            tools: {
              download: true // Ativar opção de download na barra de ferramentas
            },
            export: {
              csv: {
                filename: 'market-share-data',
                columnDelimiter: ',',
                headerCategory: 'Label',
                headerValue: 'Value'
              },
              svg: {
                filename: 'market-share-chart'
              },
              png: {
                filename: 'market-share-chart'
              }
            }
          }
        },
        colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
        labels: ['GoDaddy', 'Amazon', 'Cloudflare', 'Others'],
        legend: {
          show: true,
          position: 'bottom',
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
              background: 'transparent',
            },
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '11px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            colors: ['#FFFFFF'] // Aqui definimos explicitamente as labels para branco
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            opacity: 0.5
          },
        },
        responsive: [
          {
            breakpoint: 2600,
            options: {
              chart: {
                width: 380,
              },
            },
          },
          {
            breakpoint: 640,
            options: {
              chart: {
                width: 200,
              },
            },
          },
        ],
      },
    }
  }

  render() {
    return (
      <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5'>
        <div className='mb-3 justify-between gap-4 sm:flex'>
          <div>
            <h5 className='text-xl font-semibold text-black dark:text-white'>
              Market Share
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

        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
          </div>
          <div id="html-dist"></div>
        </div>
      </div>
    )
  }
}

export default ChartThree
