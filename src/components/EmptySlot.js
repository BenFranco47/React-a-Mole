import { useEffect } from "react"
import MoleHill from "../assets/molehill.png"

const EmptySlot = (props) => {
   
    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomSeconds)
        return () => clearTimeout(timer)
})

    return (
        <div>
            <img style={{'width': "25vw"}} src={MoleHill} />
        </div>
    )
}

export default EmptySlot
