import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '.';

import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { fetchTokenSuccess } from '../action/Token';
import { useDispatch } from 'react-redux';

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () =>{
    console.log('sdcnks')
    navigate('/login')
    dispatch(fetchTokenSuccess(null))
  }

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96" style={{ zIndex: 1000 }}>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
    
      <div className="mt-5">
        <Link to='/profile'>
          <Button
            color="white"
            bgColor={currentColor}
            text="Update Profile"
            borderRadius="10px"
            width="full"
          />
        </Link>

      </div>

      <div className="mt-5" onClick ={handleLogout} >
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        
        />
      </div>
    </div>

  );
};

export default UserProfile;
