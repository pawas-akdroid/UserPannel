import { Button, Grid } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components'
import { Title } from '../../components/Header'
import { ErrorHandler } from '../../components/NotificationProvider'
import {  TokenUrl } from '../../Utilities/Urls'

const Profile = () => {
    const [user, setUser] = useState("")
    const [merchant, setMerchant] = useState()

    useEffect(() => {
        TokenUrl().get('/profile').then(res => {
            setUser(res?.data?.data)
        }).catch((err) => {
            ErrorHandler(err)
        })
        Title(user.name)
    }, [])


    return (
        <div className="m-2 md:m-10 mt-5 p-2 md:p-10 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl h-full">
            <Header category="Profile" title={user?.name} />

            <div className=" md:mt-0 md:col-span-2 dark:bg-secondary-dark-bg">
                <div className=" sm:rounded-md sm:overflow-hidden dark:bg-secondary-dark-bg">
                    <div className="bg-white space-y-6 sm:p-6 dark:bg-secondary-dark-bg">

                        <Grid grow>
                            <Grid.Col span={6}>
                                <label className="block text-sm font-medium text-gray-700 ml-3 dark:bg-secondary-dark-bg dark:text-gray-200">Photo</label>
                                <div className="mt-1 items-center ml-3 dark:bg-secondary-dark-bg">
                                    <img className='inline-block h-40 w-40 rounded-full overflow-hidden bg-gray-100 dark:bg-secondary-dark-bg text-center'
                                        src={`${"casd"}${user?.image}`} />
                                </div>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <h2>User Details</h2>
                                <div className='flex text-base mb-2'>
                                    <strong className='mr-1'>Name: </strong> <span className='text-gray-400'> {user?.name}</span>
                                </div>
                                <div className='flex text-base mb-2'>
                                    <strong className='mr-1'>Credential Phone: </strong> <span className='text-gray-400'> {user?.phone}</span>
                                </div>
                                <div className='flex text-base mb-2'>
                                    <strong className='mr-1'>Email: </strong><span className='text-gray-400'>{user?.email}</span>
                                </div>
                                <div className='flex text-base mb-2'>
                                    <strong className='mr-1'>Unique Identity: </strong> <span className='text-gray-400'> {user?.uid}</span>
                                </div>
                                <div className='flex text-base mb-4'>
                                </div>

                            </Grid.Col>
                        
                        </Grid>

<div className='text-center justify-center'>
    <Link to={"update"}>
    <Button variant={"outline"} >Update</Button>

    </Link>
</div>
                    </div>

                </div>
            </div>





        </div>
    )
}

export default Profile