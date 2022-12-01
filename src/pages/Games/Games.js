import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components'
import { Loadings } from '../../components/Loading'
import { ErrorHandler } from '../../components/NotificationProvider'
import { TokenUrl } from '../../Utilities/Urls'

function Games() {
  const [data, setData] = useState([])
  const [alter, setAlternate] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
    TokenUrl().get('/games').then((res) => {
      setData(res?.data?.data)
    }).catch((err) => {
      ErrorHandler(err)
    })
    TokenUrl().get('/alternate-games-active').then((res) => {
      setAlternate(res?.data?.data?.data)
    }).catch((err) => {
      ErrorHandler(err)
    })

  }, [])
  return (
    loading ? <Loadings /> :
      <div className="md:m-1 mt-10 p-2 md:p-10 bg-white rounded-3xl  dark:bg-gray-700 dark:text-gray-200">
        <Header category="Games" title="List of Games" />

        <div className="overflow-x-auto  shadow-md sm:rounded-lg">


          <div className="flex justify-center text-center pb-4 bg-white dark:bg-gray-800 p-5 mb-2 rounded-t-2xl">

          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-2xl">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>

                <th scope="col" className="py-3 px-6">
                  Game
                </th>
                <th scope="col" className="py-3 px-6">
                  Points Required
                </th>
                <th scope="col" className="py-3 px-6">
                  Closing Time
                </th>
              </tr>
            </thead>
            { data.length > 0 || alter.length > 0 ? 
                <tbody>
                  {data?.map((e) =>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        <Link to={`${e.id}`}>
                          {e?.Category.name} ({e?.name})
                        </Link>

                      </td>

                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {e?.charge}
                      </td>
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {new Date(e?.closing_time).toLocaleString()}
                      </td>
                      <td className="py-4 px-6">
                        <Link to={`${e.id}/play`}>
                          <p className="font-medium text-green-600 dark:text-green-500 hover:underline mr-2">
                            Play
                          </p>
                        </Link>

                      </td>
                    </tr>
                  )}
                  {alter?.map((e) =>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        <Link to={`${e.id}`}>
                          {e?.Category.name} ({e?.name})
                        </Link>

                      </td>
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {e?.charge}
                      </td>
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        Alternate Game
                      </td>
                      <td className="py-4 px-6">
                        <Link to={`${e.id}/play`}>
                          <p className="font-medium text-green-600 dark:text-green-500 hover:underline mr-2">
                            Play
                          </p>
                        </Link>

                      </td>
                    </tr>
                  )}

                </tbody>
                : <p className='p-5'>No data has been found</p>
            }



          </table>
        </div>
      </div>
  )
}

export default Games