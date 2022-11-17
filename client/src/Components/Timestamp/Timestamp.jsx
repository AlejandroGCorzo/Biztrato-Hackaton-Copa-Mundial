import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { timestamps } from '../../json/timestamps.json'
import { setTimestamp } from '../../redux/info/infoActions'

export default function Timestamp() {
    const dispatch = useDispatch()

    const changeTime = (e) => {
        dispatch(setTimestamp(e.target.value))
    }

    return (
        <div className="lg:pl-[340px] p-8 pt-36">
            <div className="flex space-between">
                <h2 className="text-white pr-5">Selecciona tu zona horaria para poder ver los partidos en tu horario.</h2>
                <select onChange={changeTime}>
                    {
                        timestamps.map((time, i) => {
                            return <option value={time.slice(4)} key={i}>{time}</option>
                        })
                    }
                </select>
            </div>
            <div className='text-white py-10'>
                <p className='text-white '>El horario local es UTC +3</p>
                <h4>Si no sabes cual es tu zona horaria revisala aqui.</h4>
                <a className='underline' href="https://upload.wikimedia.org/wikipedia/commons/8/88/World_Time_Zones_Map.png" target="_blank">Mapa de Zonas Horarias Wikipedia</a>
            </div>
        </div >
    )
}
<option></option>