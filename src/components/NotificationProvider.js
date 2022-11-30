import React from 'react'
import { showNotification } from '@mantine/notifications';
import { MdError, MdDone } from 'react-icons/md';
import { fetchTokenSuccess } from '../action/Token';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserSuccess } from '../action/UserAction';

export const ErrorNotification = ({ title, message }) => {
  return showNotification({
    disallowClose: false,
    autoClose: 1000,
    title: title,
    message: message,
    color: 'red',
    icon: <MdError />,
    loading: false,
  })
}

export const SuccessNotification = ({ title, message }) => {
  return showNotification({
    disallowClose: false,
    autoClose: 2500,
    title: title,
    message: message,
    color: 'green',
    icon: <MdDone />,
    loading: false,
  })
}

export const LoadingNotification = ({ title, message }) => {
  return showNotification({
    disallowClose: false,
    autoClose: 2500,
    title: title,
    message: message,
    color: 'green',
    icon: <MdDone />,
    loading: true,
  })
}

const data = () => {

  return (
    <>
    </>
  )
}


export const ErrorHandler = (err) => {


  if (err?.response?.status === 404) return ErrorNotification({ title: "Not Found Error!", message: "The data has not been found." })
  else if (err?.response?.status === 400) return ErrorNotification({ title: "Server Error!", message: "Something went wrong. Please try again later." })
  else if (err?.response?.status === 406) return ErrorNotification({ title: "Validation Error!", message: err?.response?.data?.error?.errors === undefined ? err?.response?.data?.error : err?.response?.data?.error?.errors[0].msg   })
  else if (err?.response?.status === 403) return ErrorNotification({ title: "Forbidden Error!", message: err?.response?.data?.error?.errors === undefined ? err?.response?.data?.error : err?.response?.data?.error?.errors[0].msg  })
  else if (err?.response?.status === 401) return ErrorNotification({ title: "Access Error!", message: "You are not authorized to access this page!!" })
  else return ErrorNotification({ title: "Server Error!", message: "Server connection failed. Please try again later" })
}

