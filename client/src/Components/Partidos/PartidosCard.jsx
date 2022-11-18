import React from 'react'

export const PartidosCard = () => {

  return (
    <div className='border-2 border-gray-400 rounded-lg mb-4 pb-2 px-6 box-border bg-purple-100'>
      <div className='flex justify-around mb-2 text-gray-400'>
        <p>Fase de grupos</p>
        <p>14:00hs</p>
      </div>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='mr-2'>
            <p>🟦</p>
            <p>🟥</p>
          </div>
          <div>
            <p>Equipo 1</p>
            <p>Equipo 2</p>
          </div>
        </div>
        <div className='font-bold'>
          <p>0</p>
          <p>0</p>
        </div>
      </div>
    </div>
  )
}
