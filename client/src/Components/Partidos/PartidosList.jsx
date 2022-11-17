import React from 'react'
import { PartidosCard } from './PartidosCard'

export const PartidosList = () => {

  return (
    <div className='lg:pl-[340px] p-8 pt-36'>
      <h1 className=' tracking-wider text-gray-300 text-center font-bold text-5xl my-8'>Partidos</h1>
      <div className='container mx-auto columns-2'>
        <PartidosCard />
        <PartidosCard />
        <PartidosCard />
        <PartidosCard />
      </div>
    </div>
  )
}
