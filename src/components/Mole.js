import { useEffect } from 'react'
import moleImg from '../assets/mole.png'

const Mole = (props) => {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '25vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}


export default Mole