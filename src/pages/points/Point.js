import { Grid } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components';
import { ErrorHandler } from '../../components/NotificationProvider';
import { TokenUrl } from '../../Utilities/Urls';
import ReactPhoneInput from "react-phone-input-2";
import { Loadings } from '../../components/Loading';
import { Title } from '../../components/Header';

function Point() {


  const [loading, setLoading] = useState(true)
  const [data, setData] = useState("")
  const [list, setList] = useState([])
  const [amount, setAmount] = useState('')
  const [display, setDisplay] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [value, setValue] = useState("")
  const [refresh, setRefresh] = useState(false)


  useEffect(() => {
    Title("Points")
    TokenUrl().get('/points').then(res => {
      setData(res?.data?.data)
      setLoading(false)
      setRefresh(false)
    }).catch((err) => {
      ErrorHandler(err)
      setLoading(false)
    })
    TokenUrl().get('/points-details').then(res => {
      setList(res?.data?.data)
      setRefresh(false)
    }).catch((err) => {
      ErrorHandler(err)
    })

  }, [refresh])

  const handleDisplay = () => {
    display ? setDisplay(false) : setDisplay(true)
  }

  setTimeout(() => setLoading(false), 1000)

  const Wait = () => {
    setTimeout(() => setDisabled(false), 60000)
  }

  return (
    loading ? <Loadings/> :
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-gray-600 dark:text-gray-200">
      <Header category="Point" title="Point Details" />

      <Grid grow className="p-5">
        <Grid.Col span={6} >
          <h2 className=" text-base mb-4">
            <strong> Total Remaining Points: </strong> {data.points}
          </h2>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-2xl">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>

                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Points
                </th>

              </tr>
            </thead>
            {
              list?.length > 0 ?
                <tbody>
                  {data.map((e) =>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {new Date(e.createdAt).toLocaleString()}

                      </td>

                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {e.points}
                      </td>


                    </tr>
                  )}

                </tbody>
                : <p className='p-5'>No data has been found</p>
            }



          </table>

        </Grid.Col>
        {display ?
          <Grid.Col span={6}>
            <PointTransfer setRefresh={setRefresh} Wait={Wait} setDisabled={setDisabled} setDisplay={setDisplay} />
          </Grid.Col>
          :
          <Grid.Col span={6}>
            <button onClick={handleDisplay} className='px-4 py-2 text-white bg-green-500 rounded shadow-xl' disabled={disabled}>Send Points</button>
          </Grid.Col>}

      </Grid>



    </div>
  )
}

export default Point
  ;




const PointTransfer = ({ setRefresh, Wait, setDisabled, setDisplay }) => {

  const [point, setPoint] = useState("")
  const [phone, setPhone] = useState("")
  const [remarks, setRemarks] = useState("")


  const handleSendPoint = (e) => {
    e.preventDefault()
    TokenUrl().post('/transfer-points', { "point": point, "phone": phone, "remarks": remarks }).then(res => {
      setRefresh(true)
      setDisplay(false)
      setDisabled(true)
      Wait()
      SuccessNotification({ title: "Successffully Sent!", message: "Your point has been suessfully sent." })
    }).catch(err => {
      setDisplay(false)
      setDisabled(true)
      Wait()
      ErrorHandler(err)
    })
  }

  return ( 
    <>
      <form onSubmit={handleSendPoint}>
        <div className='flex text-base mb-2'>
          Enter the phone you want to send:
        </div>
        <div className='flex text-base mb-4'>
          <ReactPhoneInput
            className="dark:bg-gray-300 justify-between shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultCountry="pl"
            searchClass="search-class"
            value={phone}
            onChange={(e) => setPhone(`+${e}`)}
            enableSearchField
            disableSearchIcon
          />
        </div>
        <div className='flex text-base mb-2'>
          Enter the point:
        </div>
        <div className='flex text-base mb-4'>
          <input className='dark:bg-gray-300 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Please enter your point.' type={"text"} value={point} onChange={(e => setPoint(e.target.value))} />
        </div>
        <div className='flex text-base mb-2'>
          Enter the remarks :
        </div>
        <div className='flex text-base mb-4'>
          <input className='dark:bg-gray-300 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Please enter your remarks.' type={"text"} value={remarks} onChange={(e => setRemarks(e.target.value))} />
        </div>
        <p><button type='submit' className='px-4 py-2 text-white bg-green-500 rounded shadow-xl'>Send</button></p>
      </form>
    </>
  )
}