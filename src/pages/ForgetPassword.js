import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { ErrorHandler, ErrorNotification, SuccessNotification } from '../components/NotificationProvider';
import { Box, Button, PasswordInput, Select } from '@mantine/core';
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Title } from '../components/Header';
import { Url } from '../Utilities/Urls';


const ForgetPassword = () => {
  const history = useNavigate()

  const [mode, setMode] = useState(1)
  const [log_phone, setPhone] = useState("")


  return (
    mode === 1 ? <ForgetPart log_phone={log_phone} setPhone={setPhone} setMode={setMode} /> : <ChangePassword log_phone={log_phone} setMode={setMode} />
  );

}

export default ForgetPassword

const Image = styled.img`
height: 100px;
width: 200px;
margin: auto;
`;

const H1 = styled.h1`
text-align: center;
text-size:40px;
font-weight:700;
`;


const Buttons = styled(Button)`
background-color:yellow;
color:black;
`;



const ForgetPart = ({ setPhone, log_phone, setMode }) => {
  const [OTP, setOTP] = useState("")
  const [success, setSuccess] = useState(false)



  const handleLogin = (e) => {
    e.preventDefault()
    const body = {
      email: `${log_phone}`,

    }
    Url.post(`/forget-password`, body).then((res) => {
      SuccessNotification({ title: "Sent!", message: res?.data?.data })
      setSuccess(true)
    }).catch(err => {
      ErrorHandler(err)
    })
  }

  useEffect(() => {
    Title("Login")
  }, [])


  const renderTime = () => React.Fragment;
  const renderButton = (buttonProps) => {
    return (
      <button {...buttonProps}>
        {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec to resend code.` : <Button variant='outline'>Resend</Button>}
      </button>
    );
  };

  const handleOtp = (e) => {
    e.preventDefault()
    const body = {
      token: OTP,
    }
    Url.post(`/reset-password/${log_phone}`, body).then((res) => {
      SuccessNotification({ title: "Succeed", message: "Your token has been verified." })
      setMode(2)
    }).catch(err => {
      ErrorHandler(err)
    })
  }



  const ResendOtp = (e) => {
    Url.post(`/resend-login-code/${log_phone}`).then((res) => {
      SuccessNotification({ title: "Succeed", message: "Your OTP has been sent. Please wait a while..." })
    }).catch(err => {
      ErrorHandler(err)
    })
  }


  return (
    <>
      <div style={{
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center", height: "100vh"
      }}>

        <Box sx={(theme) => ({
          textAlign: 'left',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: 'pointer'

        })}>
          <Image src='https://kinkhel.com/wp-content/uploads/2020/08/Transparent.png'></Image>
          <div className="p-10 text-gray-200 bg-secondary-dark-bg rounded-3xl h-full">
            <div className="mt-8 text-gray-200 bg-secondary-dark-bg">
              <H1>Forget Password</H1>
              <div className="rounded-lg dark:bg-secondary-dark-bg">

                <div className="mt-8 dark:text-gray-200 dark:bg-secondary-dark-bg">
                  <div className="rounded-lg bg-secondary-dark-bg">
                    {!success ?
                      <form onSubmit={handleLogin}>
                        <h2 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                          Phone
                        </h2>
                        <ReactPhoneInput
                          className="ml-5 mb-3 justify-between  white  rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" country={"np"} inputProps={{
                            required: true,
                            autoFocus: true
                          }}

                          searchClass="search-class"
                          value={log_phone}
                          onChange={(e) => setPhone(`+${e}`)}
                          enableSearchField
                          disableSearchIcon
                        />
                        <Buttons className='ml-5' color="yellow" uppercase type='submit'>
                          Send Code
                        </Buttons>
                        <Link to={'/login'} className={"ml-5"}>
                          Back to Login?
                        </Link>

                      </form>
                      :
                      <form onSubmit={handleOtp}>
                        <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} className="ml-5  mb-3 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <div className='flex space-between'>
                          <Buttons className='ml-5' color="yellow" uppercase type='submit'>
                            Verify
                          </Buttons>
                          <ResendOTP className="ml-5" onResendClick={ResendOtp} maxTime={90} renderButton={renderButton} renderTime={renderTime} />
                        </div>
                      </form>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  )
}

const ChangePassword = ({ log_phone }) => {
  const navigate = useNavigate()

  const [password, setPassword] = useState("")

  const handleChangePassword = (e) => {
    e.preventDefault()
    Url.post(`/new-password/${log_phone}`, { password: password }).then(res => {
      SuccessNotification({ title: "Succeed", message: "Your password has been changed." })
      navigate('/login')
    }).catch(err => {
      console.log(err)
      ErrorHandler(err)
    })
  }

  return (
    <>
      <div style={{
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center", height: "100vh"
      }}>

        <Box sx={(theme) => ({
          textAlign: 'left',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: 'pointer'

        })}>
          <Image src='https://kinkhel.com/wp-content/uploads/2020/08/Transparent.png'></Image>
          <div className="p-10 text-gray-200 bg-secondary-dark-bg rounded-3xl h-full">
            <div className="mt-8 text-gray-200 bg-secondary-dark-bg">
              <H1>Forget Password</H1>
              <div className="rounded-lg dark:bg-secondary-dark-bg">

                <div className="mt-8 dark:text-gray-200 dark:bg-secondary-dark-bg">
                  <div className="rounded-lg bg-secondary-dark-bg">

                    <form onSubmit={handleChangePassword}>
                      <h2 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                        Password
                      </h2>
                      <PasswordInput
                        required
                        className="ml-5  mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Buttons className='ml-5' color="yellow" uppercase type='submit'>
                        Change Password
                      </Buttons>
                      <Link to={'/login'} className={"ml-5"}>
                        Back to Login?
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>

    </>
  )
}
