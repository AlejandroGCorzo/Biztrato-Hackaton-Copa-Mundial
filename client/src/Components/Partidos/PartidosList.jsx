import React from 'react'
import { useSelector } from 'react-redux'
import { PartidosCard } from './PartidosCard'

export const PartidosList = () => {
  const date = new Date()
  const parsedDate = `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`
  const matchDay = useSelector(state => state.info.groups.map(matches => {
    return matches.matches.filter(game => game.local_date.slice(0, 10) === parsedDate)
  }))

  return (
    <div className='lg:pl-[340px] p-8 pt-36'>
      <h1 className=' tracking-wider text-gray-300 text-center font-bold text-5xl my-8'>Partidos</h1>
      <div className='container mx-auto columns'>
        {
          matchDay.map(matchs => {
            if (matchs.length > 0) {
              return matchs.map(match => {
                return <PartidosCard key={match.id} match={match} />
              })
            }
          })
        }
      </div>
    </div>
  )
}
