import { Pagination } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Header, { Title } from '../../components/Header'
import { Loadings } from '../../components/Loading'
import { MerchantTokenUrl, TokenUrl } from '../../Utilities/Urls'

const PointDetails = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [pages, setPages] = useState("")
    const [page, setPage] = useState(1)

    useEffect(() => {
        TokenUrl().get(`/points-details?page=${page}`).then(res => {
            console.log(res)
            setData(res?.data?.data?.data)
            setPages(res?.data?.data?.totalPages)
        }).catch((err) => {

        })
        Title('Points Details')
    }, [])

    setTimeout(() => setLoading(false), 1000)


    return (
        <>
        {loading? <Loadings/> :
            <div className="m-2 md:m-10 mt-18 p-2 md:p-10 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl">
                <Header category={"History"} title="Point history." />
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    {
                        data?.length > 0 ?
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ height: "300", overflowY: "scroll" }}>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Point
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Remarks
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            UID
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Date
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((e, i) =>
                                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                            {e.points}    
                                            </th>
                                            <td className="py-4 px-6">
                                            {e.remarks}
                                            </td>
                                            <td className="py-4 px-6">
                                            {e.id}
                                            </td>
                                            <td className="py-4 px-6">
                                            {new Date(e.createdAt).toString()}
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

export default PointDetails