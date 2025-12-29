import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    console.log(data)

    //use of fetch
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    // use of axios

    //     useEffect(() => {
    //     axios.get("https://api.github.com/users/hiteshchoudhary")
    //     .then(response => {
    //         console.log(response.data);
    //         setData(response.data)
    //     })
    //     .catch(error => {
    //         console.log("error in fetching data" ,error)
    //     })
    // },[])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <p> Number of Repository : {data.public_repos}</p>
    <img src={data.avatar_url} alt="Git picture" width={300} />
    <p className=''> - {data.name}</p>
    </div>
  )
}
export default Github;

//Hot Reloading
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
