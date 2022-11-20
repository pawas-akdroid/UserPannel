import React from 'react'

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';


import trophy from './trophy-png-30567.png';
import joystick from './Joystick.png';
import Carousel from '../components/Carousel';


const Dashboard = () => {

  const DropDown = ({ currentMode }) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
      <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
  );



  return (
    <div>

      <div className="ml-5 align-center mb-5">


        <div class=" ml-5 heading-table">
          <h1>Dashboard</h1>
        </div>

        <div class="flex gap-3 grid-cols-3 p-2 justify-between flex-wrap">
          <div class="w-60 bg-white p-5 rounded-2xl shadow-2xl transtiton-all hover:shadow-none">
            <span ><img className="w-12 h-12 rounded-lg" src={trophy} alt="" /></span>
            <div class="flex content-center justify-between">
              <div class="left">
                <h3>Total Points Earned</h3>
                <h1>1000 Points</h1 >
              </div>

            </div>

            <input id="disabled-range" type="range" value="20" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" disabled />
          </div>

          <div class="w-60 bg-white p-5 rounded-2xl shadow-2xl transtiton-all hover:shadow-none">
            <span ><img className="w-12 h-12 rounded-lg" src={joystick} alt="" /></span>
            <div class="flex content-center justify-between">
              <div class="left">
                <h3>Total Games Played</h3>
                <h1>5 Games</h1 >
              </div>

            </div>


          </div>


          <div class="w-60 bg-white p-5 rounded-2xl shadow-2xl transtiton-all hover:shadow-none">
            <span ><img className="w-12 h-12 rounded-lg" src={joystick} alt="" /></span>
            <div class="flex content-center justify-between">
              <div class="left">
                <h3>Total Points Spent</h3>
                <h1>200 Points</h1 >
              </div>

            </div>


          </div>


          <div class="w-60 bg-white p-5 rounded-2xl shadow-2xl transtiton-all hover:shadow-none">
            <span ><img className="w-12 h-12 rounded-lg" src={joystick} alt="" /></span>
            <div class="flex content-center justify-between">
              <div class="left">
                <h3>Total Games Won</h3>
                <h1>1000 Points</h1 >
              </div>

            </div>

          </div>



        </div>
      </div>

    </div>
  )
}

export default Dashboard