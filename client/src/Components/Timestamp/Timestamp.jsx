import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { timestamps } from '../../json/timestamps.json'
import { setTimestamp } from '../../redux/info/infoActions'

export default function Timestamp() {
    const dispatch = useDispatch()

    const changeTime = async (e) => {
        await dispatch(setTimestamp(e.target.value))
    }

    return (
        <div className="lg:pl-[340px] p-8 pt-36 flex space-between">
            <h6 className="text-white">Selecciona tu zona horaria para poder ver los partidos en tu horario.</h6>
            <select onChange={changeTime}>
                {
                    timestamps.map((time, i) => {
                        return <option value={time.slice(4)} key={i}>{time}</option>
                    })
                }
            </select>
        </div>
    )
}
<option></option>