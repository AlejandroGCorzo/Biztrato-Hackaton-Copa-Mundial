import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { stadiums } from '../../json/stadiums.json'
import { Link } from 'react-router-dom'
import './loader.css'
import { setTimeFixture } from "../../helpers/setTimeFixture"

export default function Fixture() {
    const [match, setMatch] = useState([])
    const groupId = useParams().group
    const matchs = useSelector(state => state.info.groups.filter(el => el.group === groupId))
    const time = useSelector(state => state.info.timestamp)
    useEffect(() => {
        if (matchs.length > 0) {
            setMatch([
                ...matchs[0].matches
            ])
        }
    }, [matchs.length > 0, groupId])
    return (
        <div className="lg:pl-[340px] p-8 pt-36">
            {
                match.length > 0
                    ?
                    <div className="flex flex-col items-center">
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-white">Fechas</th>
                                    <th className="text-white">Horas</th>
                                    <th className="text-white">Partidos</th>
                                    <th className="text-white align-center">Estadios</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    match.map(el => {
                                        return <tr key={el.id}>
                                            <td className="text-white pr-2 pl-2">{el.local_date.slice(0, 5)}</td>
                                            <td className="text-white pr-2 pl-2">{setTimeFixture(time, el.local_date)}</td>
                                            <td className="flex justify-between py-2 align-center pr-2 pl-2">
                                                <div className="flex w-40 items-center">
                                                    <img className='h-10 w-10' src={el.home_flag} alt='Home flag' />
                                                    <p className="text-white text-sm pl-2">{el.home_team_en.toUpperCase()}</p>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <input className='h-8 w-20' type='number' />
                                                    <p className="text-white p-2">-</p>
                                                    <input className='h-8 w-20' type='number' />
                                                </div>
                                                <div className="flex w-40 justify-end items-center">
                                                    <p className="text-white text-sm pr-2">{el.away_team_en.toUpperCase()}</p>
                                                    <img className='h-10 w-10' src={el.away_flag} alt='away flag' />
                                                </div>
                                            </td>
                                            <td className="text-white pl-3">{stadiums[el.id - 1]}</td>
                                        </tr>

                                    })
                                }
                            </tbody>
                        </table>
                        <p className="text-white py-5">Los horarios se encuentran en el horario local.
                            <Link to="/timestamp" className="underline"> Presiona aqui para elegir tu zona horaria.</Link></p>
                    </div>
                    : <div className="loader" id="loader"></div>
            }

        </div>
    )
}
