import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const Header = (props) => {
    const {setFiltro} = props
    const [tipos, setTipos] = useState([])

    useEffect(()=>{
        async function fetchTipe() {
            const res = await Axios.get(`https://pokeapi.co/api/v2/type`)
            setTipos(res.data.results)
            console.log(res.data.results)
        }
        fetchTipe();
    },[])

    async function fetchRes(tipo) {
        const res = await Axios.get(tipo)
        setFiltro(res.data.pokemon)
        console.log(res.data.pokemon)
    }

    const handleTipos = (tipo) =>{
        fetchRes(tipo);
    }

    return(
        <div className="card">
            <div className="card-header">
                <h2>Header</h2>
                <label>Tipos: </label>
                <select 
                    onChange={(e) =>{handleTipos(e.target.value)}}
                    name="sel_tipos"
                    >
                    {tipos.map((tipo, index)=>(
                        <option 
                            key={index} 
                            value={tipo.url}>
                                {tipo.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default Header