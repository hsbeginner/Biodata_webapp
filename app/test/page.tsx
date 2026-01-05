'use client';
import axios from 'axios';
import Login from './login'

const page = () => {

  const callApi= async ()=>{
    const result=await axios.get('/api/posts')
    console.log(result.data,'result')
  }

  return (
    <div className='flex h-screen items-center justify-center w-full '>
        
        <Login/>
        <button className='bg-yellow-300' onClick={()=>callApi()} >
          call api button
        </button>
      
    </div>
  )
}

export default page
