import { Pagination } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Header } from '../components'
import { Title } from '../components/Header'
import { Loadings } from '../components/Loading'
import { ErrorHandler } from '../components/NotificationProvider'
import { TokenUrl } from '../Utilities/Urls'

const Notification = () => {

    const [loading, setLoading] = useState('')
    const [data, setData] = useState([])
    const [pages, setPages] = useState('')
    const [page, setPage] = useState(1)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        Title("Notifications")
        TokenUrl().get(`/notifications?page=${page}`).then((res) => {
            setRefresh(false)
            setData(res?.data?.data)
        }).catch(err => {
            ErrorHandler(err)
        })
    }, [refresh])

    const handleSeenNotification = () =>{
        TokenUrl().get('/notifications/read').then((res)=>{
            setRefresh(true)
        }).catch((err)=>{
            ErrorHandler(err)
        })
    }



    return (<>
        {loading ? <Loadings /> :
            <div className="m-2 md:m-10 mt-18 p-2 md:p-10 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl">
                <Header category={"History"} title="Point history." />
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    {
                        data?.length > 0 ?
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ height: "300", overflowY: "scroll" }}>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Notification
                                        </th>

                                        <th scope="col" className="py-3 px-6">
                                            Go to
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Date
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Seen
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((e, i) =>
                                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                                {e?.notification_msg?.substring(0, 30)}
                                            </th>
                                            <td className="py-4 px-6">
                                                {e.web_link}
                                            </td>
                                            <td className="py-4 px-6">
                                                {new Date(e.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="py-4 px-6">
                                                {e.seen ? "Seen" : <p onClick={handleSeenNotification}>Mark Read</p>}
                                            </td>
                                        </tr>
                                    )}

                                </tbody>

                            </table>
                            : <p className='p-5'>No data found.</p>
                    }
                    <div className='p-5 justify-center'>
                        <Pagination total={pages} onChange={setPage} />
                    </div>


                </div>
            </div>}
    </>
    )
}

export default Notification