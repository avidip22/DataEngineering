'use client'
import React from 'react'

const page = () => {
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide' >
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='hidden sm:block px6 px-3 '>
               Author Name
              </th>

              <th scope='col' className=' px6 px-3 '>
              Blog Title
              </th>

              <th scope='col' className=' px6 px-3 '>
              Blog Date
              </th>

              <th scope='col' className=' px6 px-3 '>
               Action
              </th>
            </tr>

          </thead>
          <tbody></tbody>

        </table>
      </div>
    </div>
  )
}

export default page
