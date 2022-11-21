import React from 'react'
import { useSelector } from 'react-redux';
import { setTimeFixture } from '../../helpers/setTimeFixture'

export const PartidosCard = ({ match }) => {
  const time = useSelector((state) => state.info.timestamp);
  return (
    <div className='border-2 border-gray-400 rounded-lg mb-4 pb-2 px-6 box-border bg-purple-100'>
      <div className='flex justify-around mb-2 text-gray-400'>
        <p>Fase de grupos</p>
        <p>{setTimeFixture(time, match.local_date)}</p>
      </div>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='mr-2'>
            <p>🟦</p>
            <p>🟥</p>
          </div>
          <div>
            <p>{match.home_team_en}</p>
            <p>{match.away_team_en}</p>
          </div>
        </div>
        <div className='font-bold'>
          <p>{match.home_score}</p>
          <p>{match.away_score}</p>
        </div>
      </div>
    </div>
  )
}
