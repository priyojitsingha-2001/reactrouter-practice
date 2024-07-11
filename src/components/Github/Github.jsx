import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // this one way of fetching data, there's a better way
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/priyojitsingha-2001")
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])
    const data=useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}
            <img src={data?.avatar_url} alt="github profile picture" width={300} />
        </div>
    )
}

export default Github

// this is the better way

// loader methhod
export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/priyojitsingha-2001")
    return response.json()

}