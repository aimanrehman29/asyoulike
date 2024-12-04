import React from 'react'
import {Facebook , Instagram, Twitter ,Linkedin} from 'lucide-react';

const Icons = () => {
  return (
    
       <div className='bg-footerBackground  flex flex-col items-center justify-center h-[100px] '>
      <div className='flex space-x-12 '>
       
        <a href={'#'}><Facebook className='w-[30px] h-[30px] hover:bg-gray-200 '/></a>
        <a href={"#"}><Instagram className='w-[30px] h-[30px] hover:bg-gray-200' /></a>
        <a href={"#"}><Twitter className='w-[30px] h-[30px] hover:bg-gray-200' /></a>
        <a href={"#"}><Linkedin className='w-[30px] h-[30px] hover:bg-gray-200' /></a>
      </div>

    </div>
  )
}
export default Icons