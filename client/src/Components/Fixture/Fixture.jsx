<<<<<<< HEAD
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import './loader.css'

export default function Fixture() {
    const dispatch = useDispatch()
    const [match, setMatch] = useState([])
    const groupId = useParams().group
    const matchs = useSelector(state => state.info.matchs.filter(el => el.group === groupId))

    useEffect(() => {
        if (matchs.length > 0) {
            setMatch([
                ...matchs
            ])
        }
    }, [matchs.length > 0])
    console.log(match)
    return (
        <div className="lg:pl-[340px] p-8 pt-36">
            {
                match.length > 0
                    ? <table>
                        <tr>
                            <th className="text-white">Fechas</th>
                            <th className="text-white">Horas</th>
                            <th className="text-white">Partidos</th>
                            <th className="text-white">Estadios</th>
                        </tr>
                        {
                            match.map(el => {
                                return <tr>
                                    <td className="text-white pr-2 pl-2">{el.date.slice(0, 5)}</td>
                                    <td className="text-white pr-2 pl-2">{el.date.slice(11)}</td>
                                    <td className="flex justify-between py-2 align-center pr-2 pl-2">
                                        <div className="flex w-40 items-center">
                                            <img className='h-10 w-10' src={el.home_flag} alt='Home flag' />
                                            <p className="text-white text-sm pl-2">{el.home_team.toUpperCase()}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <input className='h-8 w-20' type='number' />
                                            <p className="text-white p-2">-</p>
                                            <input className='h-8 w-20' type='number' />
                                        </div>
                                        <div className="flex w-40 justify-end items-center">
                                            <p className="text-white text-sm pr-2">{el.away_team.toUpperCase()}</p>
                                            <img className='h-10 w-10' src={el.away_flag} alt='away flag' />
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </table>
                    : <div className="loader" id="loader"></div>
            }

        </div>
    )
}
=======
import React from "react";
import "../../Index.css";

export default function Fixture() {
  return (
    <div className="lg:pl-[340px] p-8 pt-36">
      <h1 className="bg-red-500">Hola Mundo!</h1>
    </div>
  );
}
>>>>>>> development
