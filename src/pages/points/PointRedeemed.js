import { Button, Grid } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Header } from '../../components'
import { ErrorHandler } from '../../components/NotificationProvider'
import { TokenUrl } from '../../Utilities/Urls'

const PointRedeemed = () => {

    const [point, setPoint] = useState("")
    const [refresh, setRefresh] = useState(false)
    const [code, setCode] = useState("")


    useEffect(() => {
        TokenUrl().get('/points').then(res => {
            setPoint(res?.data?.data)
            setRefresh(false)
        }).catch((err) => {
            console.log(err)
            ErrorHandler(err)
        })


    }, [refresh])


    const handlePointRedeem = (e) => {
        e.preventDefault()
        TokenUrl().post('/redeem-voucher', { "code": code }).then(res => {
            setRefresh(true)
            setCode(null)
        }).catch((err) => {
            ErrorHandler(err)
        })
    }




    return (
        <>

            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-gray-600 dark:text-gray-200">
                <Header category="Point" title="Point Redeem" />

                <Grid grow className="p-5">
                    <Grid.Col span={12} >
                        <h2 className=" text-base mb-4">
                            <strong> Total Points: </strong> {point.points}
                        </h2>

                    </Grid.Col>
                    <Grid.Col span={12} >
                        <form onSubmit={handlePointRedeem}>
                            <h2 className=" text-base mb-4">
                                <strong>  Enter the Code:</strong>
                            </h2>
                            <div className='flex text-base mb-4'>
                                <input className='dark:bg-gray-300 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Please enter your redeem code..' type={"text"} value={code} onChange={(e => setCode(e.target.value))} />
                            </div>

                            <Button variant='outline' type='submit'>Submit</Button>
                        </form>
                    </Grid.Col>



                </Grid>



            </div>

        </>
    )
}

export default PointRedeemed